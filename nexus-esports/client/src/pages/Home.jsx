import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiTrophy, FiUsers, FiDollarSign, FiGamepad, FiZap, FiAward } from 'react-icons/fi'
import { FaPlaystation, FaXbox, FaSteam } from 'react-icons/fa'

const Home = () => {
  const stats = [
    { icon: FiTrophy, value: '500+', label: 'Tournaments', color: 'text-neon-purple' },
    { icon: FiUsers, value: '50K+', label: 'Active Players', color: 'text-neon-cyan' },
    { icon: FiDollarSign, value: '$2M+', label: 'Prize Pool', color: 'text-green-400' },
    { icon: FiAward, value: '1000+', label: 'Winners', color: 'text-yellow-400' },
  ]

  const featuredTournaments = [
    { id: 1, title: 'BGMI Championship', game: 'BGMI', prize: '₹50,000', slots: '64/64', status: 'Live', image: '🎮' },
    { id: 2, title: 'Valorant Masters', game: 'Valorant', prize: '₹75,000', slots: '32/40', status: 'Upcoming', image: '🔫' },
    { id: 3, title: 'Free Fire Cup', game: 'Free Fire', prize: '₹30,000', slots: '12/12', status: 'Full', image: '🔥' },
    { id: 4, title: 'Clash Squad Pro', game: 'Free Fire', prize: '₹25,000', slots: '8/16', status: 'Open', image: '⚔️' },
  ]

  const topPlayers = [
    { rank: 1, name: 'ProGamer_X', earnings: '₹1,25,000', kills: 2450, avatar: '👤' },
    { rank: 2, name: 'SniperKing', earnings: '₹98,500', kills: 2180, avatar: '👤' },
    { rank: 3, name: 'HeadshotHero', earnings: '₹87,200', kills: 1950, avatar: '👤' },
    { rank: 4, name: 'ClutchMaster', earnings: '₹76,800', kills: 1820, avatar: '👤' },
    { rank: 5, name: 'VictoryRoyale', earnings: '₹65,400', kills: 1690, avatar: '👤' },
  ]

  const features = [
    { icon: FiGamepad, title: 'Multiple Games', description: 'Support for BGMI, Free Fire, Valorant, and more' },
    { icon: FiZap, title: 'Instant Matches', description: 'Quick matchmaking and real-time updates' },
    { icon: FiDollarSign, title: 'Real Rewards', description: 'Win real money and withdraw instantly' },
    { icon: FiUsers, title: 'Team Management', description: 'Create teams, invite members, compete together' },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 via-transparent to-neon-cyan/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="gradient-text">NEXUS</span>
              <br />
              <span className="text-white">ESPORTS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The Ultimate Competitive Gaming Platform. Join tournaments, win prizes, and become a legend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register" 
                className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full text-lg font-bold hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 transform hover:scale-105"
              >
                Start Competing Now
              </Link>
              <Link 
                to="/tournaments" 
                className="px-8 py-4 glass-card border border-neon-purple/50 rounded-full text-lg font-bold hover:bg-neon-purple/10 transition-all duration-300"
              >
                Browse Tournaments
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl neon-border">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Featured</span> Tournaments
            </h2>
            <p className="text-gray-400">Compete in the hottest tournaments with massive prize pools</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center text-6xl">
                  {tournament.image}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold">{tournament.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      tournament.status === 'Live' ? 'bg-red-500/20 text-red-400' :
                      tournament.status === 'Upcoming' ? 'bg-yellow-500/20 text-yellow-400' :
                      tournament.status === 'Full' ? 'bg-gray-500/20 text-gray-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {tournament.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{tournament.game}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-neon-cyan font-bold">{tournament.prize}</span>
                    <span className="text-gray-400 text-sm">{tournament.slots}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/tournaments" 
              className="inline-block px-8 py-3 border border-neon-purple text-neon-purple rounded-full hover:bg-neon-purple hover:text-white transition-all duration-300"
            >
              View All Tournaments →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">NEXUS?</span>
            </h2>
            <p className="text-gray-400">Experience the next generation of esports platforms</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center hover:border-neon-purple/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Players Leaderboard */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Top <span className="gradient-text">Players</span>
            </h2>
            <p className="text-gray-400">The best competitors on our platform</p>
          </motion.div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-dark-card">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Player</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Total Kills</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {topPlayers.map((player, index) => (
                    <motion.tr
                      key={player.rank}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-t border-dark-border hover:bg-neon-purple/5 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          player.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                          player.rank === 2 ? 'bg-gray-400/20 text-gray-300' :
                          player.rank === 3 ? 'bg-orange-500/20 text-orange-400' :
                          'bg-dark-border text-gray-400'
                        }`}>
                          {player.rank}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{player.avatar}</span>
                          <span className="font-semibold">{player.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-neon-cyan">{player.kills.toLocaleString()}</td>
                      <td className="px-6 py-4 text-green-400 font-bold">{player.earnings}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/leaderboard" 
              className="inline-block px-8 py-3 border border-neon-cyan text-neon-cyan rounded-full hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300"
            >
              View Full Leaderboard →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl neon-border"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Go Pro?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of competitive gamers and start your journey to becoming an esports legend.
            </p>
            <Link 
              to="/register" 
              className="inline-block px-12 py-5 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full text-xl font-bold hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 transform hover:scale-105"
            >
              Create Free Account
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-12 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">TRUSTED BY GAMERS WORLDWIDE</p>
          <div className="flex justify-center items-center space-x-12 opacity-50">
            <FaPlaystation size={48} />
            <FaXbox size={48} />
            <FaSteam size={48} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
