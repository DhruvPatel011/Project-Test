import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const isAuthenticated = false // Replace with actual auth state

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tournaments', path: '/tournaments' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Teams', path: '/teams' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <h1 className="text-2xl font-bold gradient-text tracking-wider">
              NEXUS<span className="text-white">ESPORTS</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-neon-cyan transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:block">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="text-neon-cyan hover:text-neon-purple transition-colors">
                  <FiUser size={20} />
                </Link>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <FiLogOut size={20} />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="px-4 py-2 text-sm font-medium hover:text-neon-cyan transition-colors">
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-6 py-2 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full text-sm font-bold hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-card border-t border-dark-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-neon-cyan transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="block px-3 py-2 text-base font-medium hover:text-neon-cyan">
                  Login
                </Link>
                <Link to="/register" className="block px-3 py-2 text-base font-medium text-neon-cyan">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="block px-3 py-2 text-base font-medium text-neon-cyan">
                  Dashboard
                </Link>
                <button className="block w-full text-left px-3 py-2 text-base font-medium text-red-500">
                  Logout
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
