"use client";

import { motion } from "framer-motion";
import { Cloud, ShieldCheck } from "lucide-react";
import {
  SiAnsible,
  SiCloudflare,
  SiDocker,
  SiElastic,
  SiGit,
  SiGithubactions,
  SiGrafana,
  SiKubernetes,
  SiLinux,
  SiMysql,
  SiNginx,
  SiNpm,
  SiPm2,
  SiPostgresql,
  SiPrometheus,
  SiTerraform,
} from "react-icons/si";
import type { IconType } from "react-icons";

const skills = [
  {
    icon: SiGit,
    iconColor: "#f05032",
    title: "Git",
    description:
      "Version control, branching strategies, and collaborative workflows.",
  },

  // 🔹 CI/CD
  {
    icon: SiGithubactions,
    iconColor: "#2088ff",
    title: "CI/CD",
    description:
      "Automated pipelines using Jenkins, GitHub Actions, and GitLab CI.",
  },

  // 🔹 Containers
  {
    icon: SiDocker,
    iconColor: "#2496ed",
    title: "Docker",
    description:
      "Containerized application delivery with consistent runtime environments.",
  },

  // 🔹 Orchestration
  {
    icon: SiKubernetes,
    iconColor: "#326ce5",
    title: "Kubernetes",
    description:
      "Cluster orchestration, auto-scaling, and resilient deployments.",
  },

  // 🔹 Cloud Platforms
  {
    icon: Cloud,
    iconColor: "#ff9900",
    title: "AWS",
    description:
      "EC2, S3, IAM, VPC, and scalable infrastructure design.",
  },
  {
    icon: Cloud,
    iconColor: "#0078d4",
    title: "Azure",
    description:
      "Virtual machines, networking, and enterprise cloud solutions.",
  },

  // 🔹 Infrastructure as Code
  {
    icon: SiTerraform,
    iconColor: "#844fba",
    title: "Terraform",
    description:
      "Provisioning and managing infrastructure using Infrastructure as Code.",
  },
  {
    icon: SiAnsible,
    iconColor: "#ee0000",
    title: "Ansible",
    description: "Configuration management and automation of servers.",
  },

  // 🔹 OS & Server
  {
    icon: SiLinux,
    iconColor: "#fcc624",
    title: "Linux",
    description:
      "Server administration, troubleshooting, and performance tuning.",
  },

  // 🔹 Web Server
  {
    icon: SiNginx,
    iconColor: "#009639",
    title: "Nginx",
    description:
      "Reverse proxy, load balancing, and SSL configuration.",
  },

  // 🔹 Monitoring
  {
    icon: SiPrometheus,
    iconColor: "#e6522c",
    title: "Prometheus",
    description:
      "Metrics collection and alerting for infrastructure monitoring.",
  },
  {
    icon: SiGrafana,
    iconColor: "#f46800",
    title: "Grafana",
    description:
      "Visualization dashboards for monitoring and observability.",
  },

  // 🔹 Logging
  {
    icon: SiElastic,
    iconColor: "#005571",
    title: "ELK Stack",
    description:
      "Centralized logging using Elasticsearch, Logstash, and Kibana.",
  },

  // 🔹 Databases
  {
    icon: SiMysql,
    iconColor: "#4479a1",
    title: "MySQL",
    description:
      "Relational database management, backups, and optimization.",
  },
  {
    icon: SiPostgresql,
    iconColor: "#4169e1",
    title: "PostgreSQL",
    description:
      "Advanced relational database with high performance and reliability.",
  },

  // 🔹 Networking & Security
  {
    icon: SiCloudflare,
    iconColor: "#f38020",
    title: "Networking & Security",
    description:
      "Firewall setup, SSL, domain configuration, and secure deployments.",
  },

  // 🔹 Deployment Tools
  {
    icon: SiPm2,
    iconColor: "#2b037a",
    title: "PM2",
    description:
      "Process manager for Node.js applications with monitoring and auto-restart.",
  },

  // 🔹 File Transfer / Access
  {
    icon: ShieldCheck,
    iconColor: "#f5f5f5",
    title: "SFTP / SSH",
    description:
      "Secure server access, file transfer, and permission management.",
  },

  // 🔹 Build Tools
  {
    icon: SiNpm,
    iconColor: "#cb3837",
    title: "Build & Package Tools",
    description:
      "Managing builds and dependencies for Node.js, React, and backend services.",
  },
];

const marqueeSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-4 text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-[#f5d17b]">
            Skills
          </p>
          <h2 className="text-4xl text-white sm:text-5xl">
            Core technologies shaped for modern infrastructure.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-zinc-500">
            A focused toolkit across containers, cloud, deployment automation,
            and systems operations.
          </p>
        </motion.div>

        <div className="skills-marquee-fade overflow-hidden py-3">
          <div className="skills-marquee-track flex w-max gap-5">
            {marqueeSkills.map((skill, index) => {
              const Icon = skill.icon as IconType;

              return (
                <div
                  key={`${skill.title}-${index}`}
                  className="group min-h-[20rem] w-[18rem] flex-none rounded-[1.6rem] border border-[rgba(245,158,11,0.34)] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(245,158,11,0.55)] hover:shadow-[0_22px_50px_rgba(212,175,55,0.10)] sm:w-[19rem]"
                >
                  <div className="mb-6 inline-flex rounded-2xl border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.07)] p-4 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={24} style={{ color: skill.iconColor }} />
                  </div>
                  <h3 className="text-2xl text-white">{skill.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
