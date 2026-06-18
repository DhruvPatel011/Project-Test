import { Link } from 'react-router-dom'
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube, FaTwitch } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    platform: [
      { name: 'About Us', path: '/about' },
      { name: 'Tournaments', path: '/tournaments' },
      { name: 'Leaderboard', path: '/leaderboard' },
      { name: 'Teams', path: '/teams' },
    ],
    support: [
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact', path: '/contact' },
      { name: 'Support', path: '/support' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Refund Policy', path: '/refund' },
    ],
  }

  const socialLinks = [
    { icon: FaDiscord, url: '#', color: 'hover:text-[#5865F2]' },
    { icon: FaTwitter, url: '#', color: 'hover:text-[#1DA1F2]' },
    { icon: FaInstagram, url: '#', color: 'hover:text-[#E4405F]' },
    { icon: FaYoutube, url: '#', color: 'hover:text-[#FF0000]' },
    { icon: FaTwitch, url: '#', color: 'hover:text-[#9146FF]' },
  ]

  return (
    <footer className="glass-card border-t border-dark-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold gradient-text tracking-wider">
              NEXUS<span className="text-white">ESPORTS</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              The ultimate esports tournament platform. Compete, win, and rise to the top in the most competitive gaming ecosystem.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} NEXUS ESPORTS. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">Powered by</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">Next-Gen Gaming</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
