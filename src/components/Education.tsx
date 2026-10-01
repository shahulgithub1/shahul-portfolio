import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const Education = () => {
  return (
    <section id="education" className="py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 bg-[#141414] rounded-xl p-8 hover:border-white/20 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 rounded-lg">
              <GraduationCap className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2 tracking-tight">
                Bachelor of Technology in Computer Science and Engineering – Cybersecurity
              </h3>
              <p className="text-lg text-neutral-400 mb-2">
                SRM University – AP, Amaravati
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-neutral-500">
                <span>2023 – 2027</span>
                <span className="hidden sm:inline">•</span>
                <span>CGPA: 7.82</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
