'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

type ExperienceStat = {
  value: number;
  suffix: string;
  label: string;
};

const experience = {
  badge: '1 Year Experience',
  role: 'DevOps Engineer',
  company: 'Cloud & Automation Projects',
  summary:
    'Designing and managing scalable infrastructure focused on automation, reliability, and production-grade delivery across Linux servers, deployment pipelines, and real-world environments.',
  focus: [
    'Automation',
    'Deployment Reliability',
    'Infrastructure Scalability',
    'Production Stability',
  ],
  achievements: [
    '25+ production deployments with zero-downtime strategies.',
    '10+ Linux servers managed with uptime, hardening, and optimization.',
    '20+ deployments automated through CI/CD pipelines.',
    'Configured Nginx, reverse proxy, SSL, and domain routing.',
    'Built Docker-based environments and explored Kubernetes basics.',
    'Improved reliability with monitoring and logging solutions.',
  ],
  stack: [
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'PHP',
    'WordPress',
    'Linux',
    'AWS',
    'Docker',
    'Nginx',
    'CI/CD',
    'Git',
    'Bash',
    'PM2',
    'MySQL',
  ],
  stats: [
    { value: 25, suffix: '+', label: 'Deployments' },
    { value: 10, suffix: '+', label: 'Servers' },
    { value: 20, suffix: '+', label: 'Automations' },
  ] satisfies ExperienceStat[],
};

function StatCounter({ value, suffix, label }: ExperienceStat) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      whileHover={{ y: -5, borderColor: 'rgba(245,158,11,0.28)' }}
      className="rounded-[1.55rem] border border-[rgba(245,158,11,0.16)] bg-[rgba(255,255,255,0.02)] px-6 py-5"
    >
      <p className="text-[2.15rem] font-semibold gold-text sm:text-[2.45rem]">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-zinc-500">
        {label}
      </p>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.7, 1, 0.75],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(245,158,11,0.08),transparent_22%),radial-gradient(circle_at_84%_18%,rgba(212,175,55,0.05),transparent_18%)]"
      />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-[#f5d17b]">
            Experience
          </p>
          <h2 className="mt-3 text-3xl text-white sm:text-4xl">
            Production delivery and infrastructure operations.
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
            A more compact view of outcomes, tooling, and delivery focus.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="section-frame overflow-hidden"
        >
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-w-0 border-b border-[rgba(245,158,11,0.14)] px-5 py-6 sm:px-7 lg:border-b-0 lg:border-r lg:py-7">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="flex flex-wrap items-start justify-between gap-4"
              >
                <motion.div variants={itemVariants} className="min-w-0 max-w-xl">
                  <motion.span
                    variants={itemVariants}
                    className="inline-flex rounded-full border border-[rgba(245,158,11,0.34)] bg-[rgba(0,0,0,0.22)] px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[#f5d17b]"
                  >
                    {experience.badge}
                  </motion.span>
                  <motion.h3
                    variants={itemVariants}
                    className="mt-4 text-3xl text-white sm:text-[2.6rem]"
                  >
                    {experience.role}
                  </motion.h3>
                  <motion.p
                    variants={itemVariants}
                    className="mt-2 text-xs uppercase tracking-[0.24em] text-zinc-500 sm:text-sm"
                  >
                    {experience.company}
                  </motion.p>
                  <motion.p
                    variants={itemVariants}
                    className="mt-4 text-sm leading-7 text-zinc-300"
                  >
                    {experience.summary}
                  </motion.p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: '0 18px 36px rgba(245,158,11,0.10)' }}
                  className="w-full rounded-[1.3rem] border border-[rgba(245,158,11,0.16)] bg-[rgba(245,158,11,0.05)] p-4 sm:w-auto sm:max-w-[19rem]"
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#f5d17b]">
                    Focus
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.focus.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ y: -2, scale: 1.03 }}
                        className="rounded-full border border-[rgba(245,158,11,0.2)] bg-[rgba(0,0,0,0.18)] px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-zinc-200"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="mt-5 grid gap-3 sm:grid-cols-3"
              >
                {experience.stats.map((stat) => (
                  <StatCounter
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </motion.div>
            </div>

            <div className="min-w-0 px-5 py-6 sm:px-7 lg:py-7">
              <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="min-w-0">
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="text-[10px] uppercase tracking-[0.24em] text-[#f5d17b]"
                  >
                    Impact & Achievements
                  </motion.p>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-3 grid gap-2"
                  >
                    {experience.achievements.map((item, index) => (
                      <motion.div
                        key={item}
                        variants={itemVariants}
                        whileHover={{ x: 4, borderColor: 'rgba(245,158,11,0.24)' }}
                        className="flex items-start gap-3 rounded-[1rem] border border-[rgba(245,158,11,0.12)] bg-[rgba(255,255,255,0.015)] px-3 py-3"
                      >
                        <motion.span
                          animate={{ boxShadow: ['0 0 0 rgba(245,158,11,0)', '0 0 12px rgba(245,158,11,0.18)', '0 0 0 rgba(245,158,11,0)'] }}
                          transition={{ duration: 2.8, delay: index * 0.15, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.5 }}
                          className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-[rgba(245,158,11,0.22)] bg-[rgba(245,158,11,0.08)] text-[10px] font-semibold text-[#f8d27a]"
                        >
                          0{index + 1}
                        </motion.span>
                        <p className="text-sm leading-6 text-zinc-300">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div className="min-w-0">
                  <motion.div
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    whileHover={{ y: -4, boxShadow: '0 20px 36px rgba(245,158,11,0.08)' }}
                    className="rounded-[1.3rem] border border-[rgba(245,158,11,0.14)] bg-[rgba(255,255,255,0.02)] p-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#f5d17b]">
                      Tech Stack
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {experience.stack.map((item) => (
                        <motion.span
                          key={item}
                          whileHover={{ y: -2, scale: 1.04 }}
                          className="rounded-full border border-[rgba(245,158,11,0.16)] bg-[rgba(0,0,0,0.2)] px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-zinc-300"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
                    whileHover={{ y: -4, borderColor: 'rgba(245,158,11,0.22)' }}
                    className="mt-4 rounded-[1.3rem] border border-[rgba(245,158,11,0.14)] bg-[rgba(245,158,11,0.05)] px-4 py-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#f5d17b]">
                      Delivery Lens
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      Faster releases, fewer manual steps, stronger uptime, and
                      cleaner production operations.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
