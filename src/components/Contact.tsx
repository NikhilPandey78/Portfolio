"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Send } from "lucide-react";

const inquiryOptions = [
  "Cloud Setup",
  "Infrastructure Setup",
  "Job Opportunity",
  "Collaboration",
  "Technical Consultation",
  "General Inquiry",
  "Issue Support",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  category: string;
  message: string;
};

export default function Contact() {
  const contactApiBaseUrl =
    process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "http://localhost:5000";
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    category: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const inquiryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!inquiryRef.current?.contains(event.target as Node)) {
        setIsInquiryOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsInquiryOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`${contactApiBaseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "Portfolio inquiry",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFormData({ name: "", email: "", category: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleInquirySelect = (value: string) => {
    setFormData((current) => ({
      ...current,
      category: value,
    }));
    setIsInquiryOpen(false);
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="section-frame px-5 py-8 sm:px-7 sm:py-9"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-[#f5d17b]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl">
              Let&apos;s build dependable systems together.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400">
              Available for DevOps engineering, cloud architecture, deployment
              automation, and infrastructure modernization discussions.
            </p>

            <div className="mt-7 space-y-3">
              {[
                ["Email", "np63884336@gmail.com"],
                ["Location", "Noida, Uttar Pradesh"],
                ["Focus", "Cloud, CI/CD, Kubernetes, Linux"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[rgba(245,158,11,0.28)] bg-[rgba(255,255,255,0.02)] px-4 py-3"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[#f5d17b]">
                    {label}
                  </p>
                  <p className="mt-1.5 text-sm text-zinc-200">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex gap-3">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:np63884336@gmail.com",
                  label: "Email",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(245,158,11,0.36)] bg-[rgba(255,255,255,0.02)] text-[#f5d17b] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(245,158,11,0.56)] hover:bg-[rgba(245,158,11,0.10)]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
            className="section-frame px-5 py-8 sm:px-7 sm:py-9"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-[#f5d17b]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[rgba(245,158,11,0.3)] bg-black/40 px-4 py-3.5 text-white outline-none transition-colors duration-300 placeholder:text-zinc-600 focus:border-[rgba(245,158,11,0.56)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-[#f5d17b]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[rgba(245,158,11,0.3)] bg-black/40 px-4 py-3.5 text-white outline-none transition-colors duration-300 placeholder:text-zinc-600 focus:border-[rgba(245,158,11,0.56)]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-[#f5d17b]">
                  Inquiry Type
                </label>
                <div ref={inquiryRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsInquiryOpen((current) => !current)}
                    className={`flex w-full items-center justify-between rounded-2xl border bg-black/40 px-4 py-3.5 text-left text-white outline-none transition-all duration-300 ${
                      isInquiryOpen
                        ? "border-[rgba(245,158,11,0.56)] shadow-[0_0_0_1px_rgba(245,158,11,0.14),0_10px_30px_rgba(245,158,11,0.08)]"
                        : "border-[rgba(245,158,11,0.3)]"
                    }`}
                    aria-haspopup="listbox"
                    aria-expanded={isInquiryOpen}
                  >
                    <span
                      className={
                        formData.category ? "text-white" : "text-zinc-500"
                      }
                    >
                      {formData.category || "Select inquiry type"}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isInquiryOpen ? "rotate-180 text-[#f5d17b]" : "text-zinc-400"
                      }`}
                    />
                  </button>

                  <input
                    type="hidden"
                    name="category"
                    value={formData.category}
                    required
                  />

                  {isInquiryOpen && (
                    <div className="absolute left-0 right-0 z-20 mt-3 overflow-hidden rounded-[1.6rem] border border-[rgba(245,158,11,0.32)] bg-[linear-gradient(180deg,rgba(17,17,17,0.98),rgba(8,8,8,0.98))] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                      <div className="inquiry-scrollbar max-h-72 overflow-y-auto pr-1">
                        <div className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                          Select Inquiry Type
                        </div>
                        {inquiryOptions.map((option) => {
                          const isSelected = formData.category === option;

                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => handleInquirySelect(option)}
                              className={`flex w-full items-center rounded-[1.1rem] px-4 py-3 text-left text-base transition-all duration-200 ${
                                isSelected
                                  ? "bg-[rgba(245,158,11,0.14)] text-[#f8d27a]"
                                  : "text-zinc-100 hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-[#f5d17b]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-2xl border border-[rgba(245,158,11,0.3)] bg-black/40 px-4 py-3.5 text-white outline-none transition-colors duration-300 placeholder:text-zinc-600 focus:border-[rgba(245,158,11,0.56)]"
                  placeholder="Tell me about your infrastructure or automation needs."
                />
              </div>

              <button
                type="submit"
                className="gold-button gap-2"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Submit"}
                <Send size={16} />
              </button>

              <p className="text-sm text-zinc-500">
                {status === "success" && "Message sent successfully."}
                {status === "error" &&
                  "Unable to send right now. Check the local contact API and try again."}
                {status === "idle" &&
                  "Minimal form styling with a lightweight submission flow."}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
