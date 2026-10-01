import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-8 tracking-tight">
            About
          </h2>
          
          <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              I am a fourth-year Computer Science undergraduate specializing in Cybersecurity 
              at SRM University–AP.
            </p>
            
            <p>
              I have hands-on experience building security monitoring systems, CI/CD automation 
              tools, network traffic classifiers, and AI-powered threat analysis agents.
            </p>
            
            <p>
              I have a strong foundation in OOP, DBMS, Operating Systems, and Computer Networks 
              and am continuing to develop my Data Structures & Algorithms skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
