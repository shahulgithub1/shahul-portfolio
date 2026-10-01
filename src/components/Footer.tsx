import { Github, Linkedin, Mail, Code2 } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/shahulgithub1',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohammed-shahul-299a71291/',
      icon: Linkedin,
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/shahulleetcode/',
      icon: Code2,
    },
    {
      name: 'Email',
      href: 'mailto:shahulmh.786@gmail.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="border-t border-white/10 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Name and tagline */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-1 tracking-tight">
              Mohammed Shahul Hameed
            </h3>
            <p className="text-sm text-neutral-500">
              Computer Science × Cybersecurity
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-neutral-500 hover:text-white transition-colors"
                aria-label={link.name}
              >
                <link.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-neutral-600">
            © {currentYear} Mohammed Shahul Hameed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
