"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  _key: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primera abierta por defecto

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq._key || index}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-[#2563FF]/60 bg-[#0F172A]/90 shadow-xl shadow-blue-950/40"
                : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3 pr-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2563FF]/15 text-[#70A7FF]">
                  <HelpCircle className="h-4 w-4" />
                </span>
                <span className="text-base sm:text-lg font-bold font-display text-white">
                  {faq.question}
                </span>
              </div>
              <span
                className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 bg-[#2563FF] border-[#2563FF] text-white shadow-md shadow-blue-600/40"
                    : "bg-white/5 border-white/10 text-slate-400"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/[0.04] pl-16">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
