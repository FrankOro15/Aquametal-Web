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
  const [openIndexes, setOpenIndexes] = useState(() => new Set<number>());

  const toggle = (index: number) => {
    setOpenIndexes((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndexes.has(index);
        const answerId = `faq-answer-${faq._key || index}`;
        return (
          <div
            key={faq._key || index}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-blue-300 bg-white shadow-lg shadow-slate-200/70"
                : "border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50/50"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
              className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3 pr-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <HelpCircle className="h-4 w-4" />
                </span>
                <span className="text-base sm:text-lg font-bold font-display text-slate-900">
                  {faq.question}
                </span>
              </div>
              <span
                className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 bg-[#2563FF] border-[#2563FF] text-white shadow-md shadow-blue-600/40"
                    : "bg-slate-100 border-slate-200 text-slate-500"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            {isOpen && (
              <div id={answerId} className="px-6 pb-6 pt-2 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pl-16">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
