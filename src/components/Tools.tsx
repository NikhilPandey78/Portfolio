import { useState } from "react";
import {
  Box,
  GitBranch,
  Cloud,
  Container,
  Server,
  Activity,
  Search,
} from "lucide-react";

export default function Tools() {
  const [search, setSearch] = useState("");

  const tools = [
    {
      name: "Docker",
      icon: Container,
      category: "Container",
      level: "Advanced",
      desc: "Containerization platform for application deployment",
    },
    {
      name: "Kubernetes",
      icon: Box,
      category: "Container",
      level: "Intermediate",
      desc: "Container orchestration system",
    },
    {
      name: "AWS",
      icon: Cloud,
      category: "Cloud",
      level: "Advanced",
      desc: "Cloud infrastructure and services",
    },
    {
      name: "Terraform",
      icon: Server,
      category: "Infrastructure",
      level: "Intermediate",
      desc: "Infrastructure as Code tool",
    },
    {
      name: "Git",
      icon: GitBranch,
      category: "Version Control",
      level: "Advanced",
      desc: "Source code version control",
    },
    {
      name: "Jenkins",
      icon: Activity,
      category: "CI/CD",
      level: "Intermediate",
      desc: "Automation server for CI/CD pipelines",
    },
    {
      name: "Linux",
      icon: Server,
      category: "OS",
      level: "Advanced",
      desc: "Server administration and scripting",
    },
    {
      name: "Prometheus",
      icon: Activity,
      category: "Monitoring",
      level: "Intermediate",
      desc: "Metrics monitoring and alerting",
    },
  ];

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              DevOps Tools & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto"></div>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 w-72">
            <Search size={18} className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search tool..."
              className="bg-transparent outline-none text-black w-full placeholder:text-gray-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {filteredTools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-6 bg-gray-200 rounded-xl border border-gray-300 hover:border-sky-500/50 transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="text-white" size={30} />
                </div>

                {/* Name */}
                <p className="text-black text-sm font-semibold text-center">
                  {tool.name}
                </p>

                {/* Skill Level */}
                <span className="text-xs text-sky-300 mt-1">
                  {tool.level}
                </span>

                {/* Tooltip */}
                <div className="absolute bottom-full mb-3 hidden group-hover:block bg-gray-200 text-xs text-black px-3 py-2 rounded-lg border border-gray-300 w-40 text-center">
                  {tool.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
