import React from "react";
import { CheckCircle2, ChevronRight, Quote } from "lucide-react";

interface PortableTextProps {
  value?: any[];
}

export default function PortableTextRenderer({ value }: PortableTextProps) {
  if (!value || !Array.isArray(value) || value.length === 0) {
    return null;
  }

  // Agrupar elementos de lista consecutivos en <ul> o <ol>
  const elements: React.ReactNode[] = [];
  let currentList: { type: "bullet" | "number"; items: any[] } | null = null;

  const flushList = () => {
    if (!currentList) return;
    const isBullet = currentList.type === "bullet";

    elements.push(
      <ul
        key={`list-${elements.length}`}
        className="my-8 space-y-3.5 pl-2 sm:pl-4 text-slate-300 text-base sm:text-lg leading-relaxed"
      >
        {currentList.items.map((item, idx) => (
          <li key={item._key || idx} className="flex items-start gap-3.5">
            {isBullet ? (
              <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563FF]/20 text-[#70A7FF]">
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            ) : (
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#2563FF]/20 font-mono text-xs font-bold text-[#70A7FF] border border-[#2563FF]/30">
                {idx + 1}
              </span>
            )}
            <div className="flex-1">
              {renderChildren(item.children, item.markDefs)}
            </div>
          </li>
        ))}
      </ul>
    );
    currentList = null;
  };

  value.forEach((block, index) => {
    if (block._type === "block" && block.listItem) {
      const listType = block.listItem === "bullet" ? "bullet" : "number";
      if (!currentList || currentList.type !== listType) {
        flushList();
        currentList = { type: listType, items: [block] };
      } else {
        currentList.items.push(block);
      }
      return;
    }

    flushList();

    if (block._type === "block") {
      const style = block.style || "normal";
      const key = block._key || index;
      const content = renderChildren(block.children, block.markDefs);

      switch (style) {
        case "h2":
          elements.push(
            <div key={key} className="mt-14 mb-6 pt-6 border-t border-white/[0.08] first:border-0 first:pt-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-5 w-1.5 rounded-full bg-[#2563FF]" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight">
                  {content}
                </h2>
              </div>
            </div>
          );
          break;
        case "h3":
          elements.push(
            <h3
              key={key}
              className="text-xl sm:text-2xl font-bold font-display text-[#8DB8FF] mt-10 mb-4"
            >
              {content}
            </h3>
          );
          break;
        case "h4":
          elements.push(
            <h4
              key={key}
              className="text-lg font-bold font-display text-white mt-8 mb-3"
            >
              {content}
            </h4>
          );
          break;
        case "blockquote":
          elements.push(
            <div
              key={key}
              className="relative my-10 overflow-hidden rounded-2xl border border-[#2563FF]/30 bg-gradient-to-r from-[#2563FF]/10 via-[#0F172A] to-[#07101F] p-7 shadow-xl shadow-blue-950/20"
            >
              <Quote className="absolute right-4 top-4 h-16 w-16 text-[#2563FF]/10 pointer-events-none" />
              <div className="relative z-10 flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2563FF] text-white shadow-md shadow-blue-600/40">
                  <Quote className="h-5 w-5" />
                </span>
                <blockquote className="text-base sm:text-lg font-medium text-slate-100 italic leading-relaxed pt-1">
                  {content}
                </blockquote>
              </div>
            </div>
          );
          break;
        default:
          elements.push(
            <p
              key={key}
              className="text-slate-300 leading-[1.8] text-base sm:text-lg mb-6"
            >
              {content}
            </p>
          );
          break;
      }
    } else if (block._type === "image" && (block.asset?.url || block.imageUrl)) {
      const src = block.asset?.url || block.imageUrl;
      elements.push(
        <figure
          key={block._key || index}
          className="my-12 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl"
        >
          <img
            src={src}
            alt={block.alt || "Fotografía técnica"}
            className="w-full rounded-2xl object-cover max-h-[540px]"
          />
          {block.caption && (
            <figcaption className="mt-3 text-center text-xs sm:text-sm text-slate-400 font-mono">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }
  });

  flushList();

  return <div className="portable-text-content">{elements}</div>;
}

function renderChildren(children: any[] = [], markDefs: any[] = []): React.ReactNode {
  if (!children) return null;

  return children.map((span, idx) => {
    let node: React.ReactNode = span.text;

    if (span.marks && Array.isArray(span.marks)) {
      span.marks.forEach((mark: string) => {
        if (mark === "strong") {
          node = <strong key={idx} className="font-bold text-white tracking-wide">{node}</strong>;
        } else if (mark === "em") {
          node = <em key={idx} className="italic text-slate-200">{node}</em>;
        } else if (mark === "code") {
          node = (
            <code
              key={idx}
              className="rounded-lg bg-white/10 px-2 py-0.5 font-mono text-sm text-[#70A7FF] border border-white/5"
            >
              {node}
            </code>
          );
        } else if (mark === "underline") {
          node = <u key={idx}>{node}</u>;
        } else if (mark === "strike-through") {
          node = <s key={idx}>{node}</s>;
        } else {
          const linkDef = markDefs?.find((def) => def._key === mark);
          if (linkDef && linkDef._type === "link") {
            node = (
              <a
                key={idx}
                href={linkDef.href}
                target={linkDef.href.startsWith("http") ? "_blank" : undefined}
                rel={linkDef.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[#70A7FF] hover:text-white underline underline-offset-4 decoration-[#2563FF] transition-colors"
              >
                {node}
              </a>
            );
          }
        }
      });
    }

    return <React.Fragment key={span._key || idx}>{node}</React.Fragment>;
  });
}
