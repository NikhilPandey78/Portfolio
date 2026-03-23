'use client';

import { motion } from 'framer-motion';
import { Boxes, Cloud, FolderGit2, Server, ShieldCheck, Zap } from 'lucide-react';

const metrics = [
  {
    icon: FolderGit2,
    value: '30+',
    label: 'Projects Deployed',
    description: 'Production deployments across modern web, backend, and CMS stacks.',
  },
  {
    icon: Server,
    value: '10+',
    label: 'Servers Handled',
    description: 'Managed Linux servers, virtual machines, and live application environments.',
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Delivery Focus',
    description: 'Built for stable releases, faster troubleshooting, and dependable uptime.',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Ops Mindset',
    description: 'Strong attention to security, reliability, and smooth team coordination.',
  },
];

const deployedStacks = [
  'Python',
  'PHP',
  'React',
  'HTML/CSS',
  'Node.js',
  'Next.js',
  'WordPress',
  'Docker',
  'Linux',
  'Nginx',
  'AWS',
  'CI/CD',
];

export default function Stats() {
  return (
    <section id="success" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="section-frame overflow-hidden px-6 py-12 sm:px-10 lg:px-14"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#f5d17b]">
                Success Done
              </p>
              <h2 className="mt-4 text-4xl text-white sm:text-5xl">
                Delivery results built from real deployments and server ownership.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
                A quick showcase of project delivery scale, server handling, and
                the technology stacks I have worked with across production
                environments.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-[rgba(245,158,11,0.24)] bg-[rgba(245,158,11,0.05)] p-5">
                <div className="flex items-center gap-3">
                  <Cloud className="text-[#f5d17b]" size={20} />
                  <p className="text-sm uppercase tracking-[0.24em] text-[#f5d17b]">
                    Deployment Range
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  Worked on many tech projects including Python, PHP, React,
                  HTML/CSS, Node.js, Next.js, and WordPress deployments with
                  cloud setup, reverse proxy configuration, process management,
                  and release support.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.08 }}
                    className="rounded-[1.5rem] border border-[rgba(245,158,11,0.28)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5"
                  >
                    <div className="inline-flex rounded-2xl border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.07)] p-4 text-[#f5d17b]">
                      <Icon size={22} />
                    </div>
                    <p className="mt-5 text-4xl text-white">{metric.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#f5d17b]">
                      {metric.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {metric.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-[rgba(245,158,11,0.24)] bg-[rgba(255,255,255,0.015)] p-5">
            <div className="mb-4 flex items-center gap-3">
              <Boxes className="text-[#f5d17b]" size={20} />
              <p className="text-sm uppercase tracking-[0.24em] text-[#f5d17b]">
                Tech Projects Covered
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {deployedStacks.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(245,158,11,0.28)] bg-[rgba(245,158,11,0.05)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
