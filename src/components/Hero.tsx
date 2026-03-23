'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.75, ease: 'easeOut' },
} as const;

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/nikhil_resume.png';
    link.download = 'Nikhil-Pandey-Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_85%_22%,rgba(212,175,55,0.10),transparent_18%)]" />
      <div className="section-shell relative">
        <div className="section-frame gold-ring overflow-hidden px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="mb-6 inline-flex rounded-full border border-[rgba(245,158,11,0.4)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#f6d58c]"
              >
                DevOps Engineer
              </motion.div>

              <motion.p
                {...fadeUp}
                className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-400"
              >
              Nikhil Pandey
              </motion.p>

              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.05, ease: 'easeOut' }}
                className="max-w-4xl text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl"
              >
                DevOps Engineer crafting{' '}
                <span className="gold-text">scalable</span>,{' '}
                <span className="gold-text">secure</span> and{' '}
                <span className="gold-text">automated</span> infrastructure.
              </motion.h1>

              <motion.p
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
                className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300"
              >
                Building Scalable, Secure &amp; Automated Infrastructure with a
                focus on reliable cloud delivery, elegant deployment systems,
                and measurable operational resilience.
              </motion.p>

              <motion.p
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.18, ease: 'easeOut' }}
                className="mt-5 max-w-xl text-base leading-7 text-zinc-500"
              >
                I design release workflows, cloud platforms, and observability
                stacks that help teams ship with confidence.
              </motion.p>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.24, ease: 'easeOut' }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('#projects')}
                  className="gold-button gap-2 whitespace-nowrap"
                >
                  View Projects
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('#contact')}
                  className="gold-outline gap-2 whitespace-nowrap"
                >
                  Contact Me
                  <Mail size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleResumeDownload}
                  className="gold-outline inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Download Resume
                  <Download size={16} />
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 24 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_45%)] blur-2xl" />
              <div className="relative rounded-[1.75rem] border border-[rgba(245,158,11,0.32)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">
                      Signature Stack
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      Cloud Delivery Suite
                    </p>
                  </div>
                  <div className="rounded-full border border-[rgba(245,158,11,0.34)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#f5d17b]">
                    Online
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['AWS Architecture', 'Multi-account platform foundations'],
                    ['Kubernetes', 'Production workloads with policy controls'],
                    ['CI/CD', 'Secure automated delivery pipelines'],
                    ['Observability', 'Metrics, logs, and actionable alerts'],
                  ].map(([title, description]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-[rgba(245,158,11,0.26)] bg-[rgba(255,255,255,0.03)] p-5"
                    >
                      <p className="text-sm uppercase tracking-[0.24em] text-[#f5d17b]">
                        {title}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[rgba(245,158,11,0.26)] bg-black/40 px-5 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        Operational Focus
                      </p>
                      <p className="mt-2 text-base text-zinc-200">
                        Faster releases with tighter reliability guardrails.
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-semibold gold-text">99.9%</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                        Delivery confidence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
