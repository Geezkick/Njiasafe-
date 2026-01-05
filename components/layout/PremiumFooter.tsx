'use client'

import { motion } from 'framer-motion'
import { 
  Navigation, 
  Heart, 
  Shield, 
  Users, 
  Globe,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-20 pt-12 border-t border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient-premium">NjiaSafe</h3>
                <p className="text-sm text-gray-400">Smart Navigation Built for Africa</p>
              </div>
            </div>
            <p className="text-gray-400">
              Making African roads safer through technology, AI, and community collaboration.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <Shield className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <Users className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <Globe className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gradient-premium">Quick Links</h4>
            <ul className="space-y-3">
              {['Dashboard', 'Safety Features', 'V2V System', 'Analytics', 'Community', 'Government Portal'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gradient-premium">Premium Features</h4>
            <ul className="space-y-3">
              {[
                'AI-Powered Routing',
                'Real-time V2V Alerts',
                'Emergency SOS System',
                'Government Integration',
                'Multi-language Support',
                'Premium Analytics'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-gold rounded-full" />
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gradient-premium">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-blue/20">
                  <Mail className="w-4 h-4 text-primary-blue" />
                </div>
                <span className="text-gray-400">support@njiasafe.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-orange/20">
                  <Phone className="w-4 h-4 text-primary-orange" />
                </div>
                <span className="text-gray-400">+254 700 000 000</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-purple/20">
                  <MapPin className="w-4 h-4 text-primary-purple" />
                </div>
                <span className="text-gray-400">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500">
                © {currentYear} NjiaSafe. All rights reserved.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Making African roads safer, one journey at a time.
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-gray-400">
                Built with passion for Africa's road safety
              </span>
            </div>
            
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-primary-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
