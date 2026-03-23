'use client';

import { motion } from 'framer-motion';

const showcaseCards = [
  {
    label: 'Work Field',
    title: 'DevOps & Cloud Operations',
    description:
      'Focused on CI/CD automation, Linux administration, Docker, Kubernetes, cloud infrastructure, monitoring, and secure production delivery across multiple stacks.',
  },
  {
    label: 'Education',
    title: 'Computer Science Background',
    description:
      "Built a technical foundation through a Bachelor's degree in Computer Science and continuous hands-on learning in infrastructure and automation.",
  },
];

const detailPoints = [
  {
    title: 'Work Performance',
    text: 'I focus on reducing deployment friction, improving release confidence, and maintaining stable environments under production pressure.',
  },
  {
    title: 'Team Work',
    text: 'I work closely with developers, QA, and operations teams to align delivery workflows, resolve blockers faster, and improve collaboration.',
  },
  {
    title: 'Strong Points',
    text: 'I bring calm problem-solving, strong ownership, continuous learning, and a practical mindset for secure and scalable infrastructure.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="section-frame overflow-hidden px-6 py-12 sm:px-10 lg:px-14"
        >
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#f5d17b]">
                About
              </p>
              <h2 className="mt-4 text-4xl text-white sm:text-[3.1rem]">
                DevOps profile focused on strong delivery and dependable teamwork.
              </h2>
              <div className="mt-8 h-px w-28 bg-gradient-to-r from-[#f59e0b] to-transparent" />

              <div className="mt-8 grid gap-4">
                {showcaseCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.5rem] border border-[rgba(245,158,11,0.24)] bg-[rgba(255,255,255,0.02)] p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#f5d17b]">
                      {card.label}
                    </p>
                    <h3 className="mt-2 text-lg text-white">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lg leading-8 text-zinc-300">
                I am Nikhil Pandey, a DevOps Engineer focused on building
                systems that are scalable, secure, and easy to operate. My work
                is centered on cloud infrastructure, deployment automation,
                Linux environments, and production readiness for modern teams.
              </p>
              <p className="mt-5 text-base leading-7 text-zinc-500">
                I have also worked on deploying many kinds of projects including
                Python, PHP, React, HTML/CSS, Node.js, Next.js, and WordPress
                applications. My goal is not only to automate deployment. I aim
                to create stable delivery platforms where teams can release
                faster, manage infrastructure confidently, and maintain strong
                operational discipline across projects.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {detailPoints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.35rem] border border-[rgba(245,158,11,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#f5d17b]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-[rgba(245,158,11,0.24)] bg-[rgba(245,158,11,0.05)] px-5 py-4">
                <p className="text-sm uppercase tracking-[0.24em] text-[#f5d17b]">
                  Personal Summary
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  I bring a practical mindset, a strong learning attitude, and a
                  commitment to team success. Whether the task is infrastructure
                  setup, automation, monitoring, troubleshooting, or release
                  coordination for Python, PHP, React, Node.js, Next.js, static
                  frontend, or WordPress projects, I focus on creating
                  dependable results with clarity and consistency.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
