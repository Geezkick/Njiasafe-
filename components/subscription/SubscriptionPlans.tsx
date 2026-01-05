'use client'

import { motion } from 'framer-motion'
import { Check, Crown, Zap, Shield, Users, Globe, Star } from 'lucide-react'
import { useState } from 'react'

const plans = {
  free: {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Basic navigation',
      'Real-time traffic updates',
      'Community alerts',
      'Basic safety features',
      'Email support',
    ],
    buttonText: 'Get Started Free',
    buttonColor: 'from-primary-600 to-primary-700',
  },
  premium: {
    name: 'Premium',
    price: '$9.99',
    period: 'per month',
    features: [
      'All Free features',
      'AI-powered routing',
      'Advanced V2V communication',
      'Emergency SOS priority',
      'Government data access',
      'Premium analytics dashboard',
      '24/7 priority support',
      'Multi-language support',
    ],
    buttonText: 'Upgrade to Premium',
    buttonColor: 'from-primary-orange to-primary-gold',
    popular: true,
  },
}

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'premium'>('premium')

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Choose Your <span className="text-gradient-premium">Plan</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Select the perfect plan for your journey safety
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Free Plan */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ y: -5 }}
          className={`relative rounded-3xl p-8 ${
            selectedPlan === 'free'
              ? 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple border-2 border-primary-gold'
              : 'bg-white/5 border border-white/10'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{plans.free.name}</h3>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-bold">{plans.free.price}</span>
              <span className="text-gray-400">/{plans.free.period}</span>
            </div>
            <p className="text-gray-400">Perfect for getting started</p>
          </div>

          <ul className="space-y-4 mb-8">
            {plans.free.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-green-400" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedPlan('free')}
            className={`w-full py-4 rounded-xl font-bold transition-all ${
              selectedPlan === 'free'
                ? 'bg-gradient-to-r from-primary-orange to-primary-gold text-primary-950'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {plans.free.buttonText}
          </motion.button>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ y: -5 }}
          className="relative rounded-3xl p-8 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple border-2 border-primary-gold"
        >
          {plans.premium.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary-gold to-primary-orange text-primary-950 font-bold">
                <Crown className="w-4 h-4" />
                <span>MOST POPULAR</span>
              </div>
            </div>
          )}

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              {plans.premium.name}
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </h3>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-bold">{plans.premium.price}</span>
              <span className="text-gray-400">/{plans.premium.period}</span>
            </div>
            <p className="text-gray-400">For maximum safety & features</p>
          </div>

          <ul className="space-y-4 mb-8">
            {plans.premium.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-orange to-primary-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary-950" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedPlan('premium')}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-orange to-primary-gold text-primary-950 font-bold"
          >
            {plans.premium.buttonText}
          </motion.button>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-gray-400">
              <Shield className="w-4 h-4 inline mr-1" />
              30-day money-back guarantee
            </p>
          </div>
        </motion.div>
      </div>

      {/* Payment Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 pt-12 border-t border-white/10"
      >
        <h3 className="text-2xl font-bold text-center mb-8">Payment Methods</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* M-Pesa */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-400">M</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">M-Pesa</h4>
                <p className="text-gray-400 text-sm">Instant payment</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Pay instantly via M-Pesa. We'll send you a prompt to complete payment.
            </p>
            <button className="w-full py-3 rounded-xl bg-green-500/20 text-green-400 font-medium hover:bg-green-500/30 transition-colors">
              Pay with M-Pesa
            </button>
          </div>

          {/* Card Payment */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-400">💳</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Credit/Debit Card</h4>
                <p className="text-gray-400 text-sm">Secure payment</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Pay securely with Visa, MasterCard, or American Express.
            </p>
            <button className="w-full py-3 rounded-xl bg-blue-500/20 text-blue-400 font-medium hover:bg-blue-500/30 transition-colors">
              Pay with Card
            </button>
          </div>
        </div>
      </motion.div>

      {/* Features Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-12 pt-12 border-t border-white/10"
      >
        <h3 className="text-2xl font-bold text-center mb-8">Feature Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4">Feature</th>
                <th className="text-center p-4">Free</th>
                <th className="text-center p-4">Premium</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AI Navigation', 'Basic', 'Advanced'],
                ['V2V Communication', 'Limited', 'Unlimited'],
                ['Emergency SOS', 'Basic', 'Priority'],
                ['Real-time Analytics', 'Basic', 'Advanced'],
                ['Government Data', 'No', 'Yes'],
                ['Support', 'Email', '24/7 Priority'],
                ['Multi-language', 'Basic', 'Full'],
              ].map(([feature, free, premium], index) => (
                <tr key={index} className="border-b border-white/10">
                  <td className="p-4">{feature}</td>
                  <td className="text-center p-4">
                    <span className="text-gray-400">{free}</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-gradient-premium font-semibold">{premium}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
