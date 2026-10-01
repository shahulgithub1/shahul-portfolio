import { motion } from 'framer-motion'
import { ArrowDown, Github, FileText } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
            Mohammed Shahul Hameed
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-400 mb-8 tracking-tight">
            Computer Science × Cybersecurity
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-neutral-500 max-w-3xl mx-auto mb-12 leading-relaxed">
            Fourth-year Computer Science undergraduate building security monitoring systems, 
            CI/CD automation platforms, network analysis tools, and intelligent software. 
            Specializing in security automation, LLM-powered threat analysis, and developer tooling.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-100 transition-all"
            >
              View Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 border-2 border-white/20 rounded-lg font-medium hover:border-white/40 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <FileText size={18} />
              Download Resume
            </a>
            <a
              href="https://github.com/shahulgithub1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 border-2 border-white/20 rounded-lg font-medium hover:border-white/40 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20"
        >
          <a href="#projects" className="inline-block text-neutral-600 hover:text-neutral-400 transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
