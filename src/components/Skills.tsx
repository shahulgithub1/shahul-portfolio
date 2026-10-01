import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'SQL', 'Apex'],
    },
    {
      title: 'Software Engineering & DevOps',
      skills: ['FastAPI', 'REST APIs', 'Docker', 'GitHub Actions', 'CI/CD'],
    },
    {
      title: 'Cybersecurity',
      skills: ['Network Security', 'Threat Analysis', 'Security Monitoring', 'Log Analysis', 'MITRE ATT&CK', 'Cowrie Honeypot'],
    },
    {
      title: 'AI & LLM',
      skills: ['LLM Tool Use', 'Function Calling', 'Agent Design', 'LLM Evaluation', 'Embeddings', 'RAG', 'Prompt Engineering', 'OpenAI API'],
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'PyTorch'],
    },
    {
      title: 'Tools & Databases',
      skills: ['MySQL', 'ELK Stack', 'Git', 'GitHub', 'Streamlit', 'Scapy', 'PyShark', 'Salesforce', 'Apex/SOQL'],
    },
    {
      title: 'Core CS',
      skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Computer Networks', 'DBMS'],
    },
  ]

  return (
    <section id="skills" className="py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/10 bg-[#141414] rounded-xl p-6 hover:border-white/20 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 tracking-tight">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-neutral-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
