import { motion } from 'framer-motion'
import { Shield, Workflow, Network } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'SSH Honeypot with Automated Attacker Profiling',
      category: 'Cybersecurity / Security Automation / LLM Agents',
      icon: Shield,
      description: 'Deployed a Cowrie SSH honeypot to capture attacker activity, including brute-force attempts, command execution, and malware downloads. Built an LLM-based triage agent with structured tool-use to autonomously analyze session logs, classify threat severity, and generate attack summaries. Mapped agent-classified behaviors to the MITRE ATT&CK framework and built a real-time ELK Stack dashboard to visualize attack sessions and patterns.',
      technologies: ['Cowrie', 'Python', 'LLM Agents', 'Structured Tool Use', 'MITRE ATT&CK', 'ELK Stack'],
      gradient: 'from-red-500/10 to-orange-500/10',
      border: 'border-red-500/20',
    },
    {
      title: 'CI/CD Pipeline Automation Platform',
      category: 'Software Engineering / DevOps / Developer Tools',
      icon: Workflow,
      description: 'Engineered a containerized CI/CD automation platform that orchestrates build, test, and deployment workflows through REST APIs. Developed asynchronous FastAPI backend services for pipeline execution, status tracking, and failure handling. Dockerized application services for isolated, reproducible environments and integrated GitHub Actions for automated pipeline execution.',
      technologies: ['Python', 'FastAPI', 'Docker', 'GitHub Actions', 'REST APIs', 'Redis', 'RQ', 'SQLite', 'SQLModel', 'Streamlit'],
      gradient: 'from-blue-500/10 to-cyan-500/10',
      border: 'border-blue-500/20',
    },
    {
      title: 'Real-Time Encrypted Traffic Classification',
      category: 'Network Security / Machine Learning',
      icon: Network,
      description: 'Built a system to classify encrypted network traffic using flow-level metadata such as timing, size, and direction without inspecting payload contents. Engineered a feature extraction pipeline using Scapy/PyShark, converting raw packet captures into flow-based statistical features. Trained Random Forest and XGBoost classifiers, outperforming a CNN baseline with a best weighted F1 score of 0.52. Built a real-time Streamlit dashboard for live traffic classification.',
      technologies: ['Python', 'Scapy', 'PyShark', 'Random Forest', 'XGBoost', 'CNN', 'Streamlit'],
      metric: 'Weighted F1: 0.52',
      gradient: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-500/20',
    },
  ]

  return (
    <section id="projects" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-neutral-500 text-lg">
            Building security systems, automation platforms, and intelligent software
          </p>
        </motion.div>

        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group`}
            >
              <div className={`border ${project.border} bg-[#141414] rounded-2xl p-8 lg:p-12 hover:border-white/30 hover:-translate-y-1 transition-all duration-300`}>
                {/* Icon */}
                <div className="mb-6">
                  <project.icon className="w-12 h-12 text-white/80" strokeWidth={1.5} />
                </div>

                {/* Category */}
                <p className="text-sm text-neutral-400 mb-3 uppercase tracking-wide">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 leading-relaxed mb-6 text-base lg:text-lg">
                  {project.description}
                </p>

                {/* Metric if available */}
                {project.metric && (
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">
                      {project.metric}
                    </span>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
