'use client';

import { motion } from 'framer-motion';

const experienceItems = [
  {
    period: '2026 - Present',
    role: 'DevOps Engineer',
    company: 'Cloud & Automation Projects',
    summary:
      'Designing deployment workflows, container platforms, and cloud infrastructure with a focus on reliability, security, and streamlined delivery.',
    highlights: [
      'Built CI/CD pipelines for faster and safer releases.',
      'Managed Docker and Kubernetes based deployment environments.',
      'Improved monitoring, logging, and infrastructure automation practices.',
    ],
  },
  {
    period: '2025',
    role: 'Infrastructure & Linux Engineer',
    company: 'Freelance / Lab Environment',
    summary:
      'Worked hands-on with Linux servers, web hosting stacks, and automated provisioning to strengthen core systems knowledge.',
    highlights: [
      'Configured Linux servers, Nginx, and secure access workflows.',
      'Practiced AWS provisioning and deployment architecture patterns.',
      'Created repeatable setup processes for development and staging environments.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="mb-12 flex flex-col gap-4 text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-[#f5d17b]">
            Experience
          </p>
          <h2 className="text-4xl text-white sm:text-5xl">
            Operational experience across delivery and infrastructure.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-zinc-500">
            A concise timeline of DevOps-focused work shaped around automation,
            platform reliability, and production readiness.
          </p>
        </motion.div>

        <div className="relative space-y-6 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(180deg,rgba(245,158,11,0.35),rgba(245,158,11,0.08))]">
          {experienceItems.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
              className="relative pl-14"
            >
              <div className="absolute left-5 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[#f5d17b] bg-black shadow-[0_0_18px_rgba(245,158,11,0.28)]" />

              <div className="rounded-[1.7rem] border border-[rgba(245,158,11,0.3)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6 sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="rounded-full border border-[rgba(245,158,11,0.3)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#f5d17b]">
                      {item.period}
                    </span>
                    <h3 className="mt-4 text-2xl text-white sm:text-[1.85rem]">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-500">
                      {item.company}
                    </p>
                  </div>

                  <div className="rounded-[1.2rem] border border-[rgba(245,158,11,0.18)] bg-[rgba(245,158,11,0.04)] px-4 py-3 sm:max-w-[16rem]">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#f5d17b]">
                      Focus
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Automation, deployment reliability, Linux operations, and
                      production delivery.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  {item.summary}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {item.highlights.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.15rem] border border-[rgba(245,158,11,0.18)] bg-[rgba(255,255,255,0.015)] p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#d4af37]" />
                        <p className="text-sm leading-6 text-zinc-300">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
