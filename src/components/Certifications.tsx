import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      name: 'Java SE 17 Developer Certification',
      issuer: 'Oracle',
      year: '2026',
    },
    {
      name: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      year: '2026',
    },
    {
      name: 'Ransomware Techniques',
      issuer: 'IT Masters, Charles Sturt University',
      year: '2026',
    },
    {
      name: 'Microsoft AI Skills Challenge',
      issuer: 'Microsoft',
      year: '2025',
    },
  ]

  return (
    <section id="certifications" className="py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/10 bg-[#141414] rounded-xl p-6 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Award className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {cert.issuer} — {cert.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
