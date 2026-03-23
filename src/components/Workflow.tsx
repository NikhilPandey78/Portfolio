import { Code, Wrench, TestTube, Container, Rocket, Activity, ChevronRight } from 'lucide-react';

export default function Workflow() {
  const steps = [
    { icon: Code, label: 'Code', color: 'from-sky-500 to-blue-500' },
    { icon: Wrench, label: 'Build', color: 'from-cyan-500 to-blue-500' },
    { icon: TestTube, label: 'Test', color: 'from-sky-400 to-cyan-600' },
    { icon: Container, label: 'Docker', color: 'from-blue-500 to-indigo-700' },
    { icon: Rocket, label: 'Deploy', color: 'from-slate-600 to-slate-800' },
    { icon: Activity, label: 'Monitor', color: 'from-sky-600 to-cyan-500' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              DevOps Workflow
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Streamlined CI/CD pipeline from code to production
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="hidden md:flex items-center justify-center gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-3 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                    >
                      <Icon className="text-white" size={36} />
                    </div>
                    <p className="text-white font-semibold">{step.label}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className="text-sky-300 mx-2" size={32} />
                  )}
                </div>
              );
            })}
          </div>

          <div className="md:hidden space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-lg">{step.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
