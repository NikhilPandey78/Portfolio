'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Pipeline Forge',
    description:
      'A secure CI/CD platform for automated build, validation, and controlled production releases.',
    image: '/pipeline-forge.svg',
    stack: ['GitHub Actions', 'Docker', 'Terraform'],
  },
  {
    title: 'Atlas Cluster',
    description:
      'A Kubernetes deployment foundation with ingress, scaling policy, and operational dashboards.',
    image: '/atlas-cluster.svg',
    stack: ['Kubernetes', 'Helm', 'Prometheus'],
  },
  {
    title: 'Golden Bastion',
    description:
      'AWS landing zone architecture designed for resilient networking, IAM boundaries, and observability.',
    image: '/golden-bastion.svg',
    stack: ['AWS', 'VPC', 'CloudWatch'],
  },
  {
    title: 'Signal Vault',
    description:
      'An observability stack for logs, metrics, and alert routing to strengthen production awareness.',
    image: '/signal-vault.svg',
    stack: ['Grafana', 'Loki', 'Alertmanager'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="mb-10 flex flex-col gap-3 text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-[#f5d17b]">
            Projects
          </p>
          <h2 className="text-4xl text-white sm:text-5xl">
            Selected platform and automation work.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-zinc-500">
            A clean set of delivery, infrastructure, and observability concepts
            presented with premium restraint.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
              className="group overflow-hidden rounded-[1.5rem] border border-[rgba(245,158,11,0.34)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(245,158,11,0.54)] hover:shadow-[0_24px_48px_rgba(212,175,55,0.08)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[rgba(245,158,11,0.26)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl text-white sm:text-[1.75rem]">{project.title}</h3>
                  <span className="rounded-full border border-[rgba(245,158,11,0.3)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#f5d17b]">
                    DevOps
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(245,158,11,0.26)] bg-[rgba(245,158,11,0.05)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-[#f5d17b] transition-transform duration-300 group-hover:translate-x-1"
                >
                  View Details
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
