import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'SmartBridge',
      role: 'Salesforce Developer Intern',
      location: 'Virtual',
      period: 'May 2025 – July 2025',
      responsibilities: [
        'Engineered and customized Salesforce CRM components using Apex and SOQL across core business objects.',
        'Automated 3 key sales workflows via Apex triggers, saving approximately 6 hours/week in operational overhead.',
        'Implemented validation rules and data-quality checks, improving CRM data accuracy from 80% to 95%.',
      ],
    },
  ]

  return (
    <section id="experience" className="py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border border-white/10 bg-[#141414] rounded-xl p-8 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Briefcase className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2 tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-neutral-400 mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {exp.location} • {exp.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-neutral-400 leading-relaxed flex items-start gap-3">
                    <span className="text-neutral-600 mt-2">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
