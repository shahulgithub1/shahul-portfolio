import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Code2 } from 'lucide-react'

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'shahulmh.786@gmail.com',
      href: 'mailto:shahulmh.786@gmail.com',
      icon: Mail,
    },
    {
      name: 'GitHub',
      value: 'github.com/shahulgithub1',
      href: 'https://github.com/shahulgithub1',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/mohammed-shahul-299a71291',
      href: 'https://www.linkedin.com/in/mohammed-shahul-299a71291/',
      icon: Linkedin,
    },
    {
      name: 'LeetCode',
      value: 'leetcode.com/u/shahulleetcode',
      href: 'https://leetcode.com/u/shahulleetcode/',
      icon: Code2,
    },
  ]

  return (
    <section id="contact" className="py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight">
            Get in Touch
          </h2>
          
          <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
            Have a project, opportunity, or interesting problem? Let's connect.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-white/10 bg-[#141414] rounded-xl p-6 text-left hover:border-white/20 hover:bg-[#1a1a1a] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <link.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-500 mb-1">
                      {link.name}
                    </p>
                    <p className="text-sm font-medium truncate">
                      {link.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
