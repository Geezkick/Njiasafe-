'use client'

import { motion } from 'framer-motion'
import { Crown, Zap, Shield, Check, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import SubscriptionPlans from '@/components/subscription/SubscriptionPlans'
import PremiumLayout from '@/components/layout/PremiumLayout'

export default function SubscriptionPage() {
  const router = useRouter()

  return (
    <PremiumLayout showHeader={true} showFooter={true}>
      <div className="py-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary-orange hover:text-primary-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-full border-4 border-primary-gold border-t-primary-orange animate-spin-slow flex items-center justify-center">
              <Crown className="w-8 h-8 text-primary-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upgrade to <span className="text-gradient-premium">Premium</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get access to advanced safety features, AI-powered navigation, and government data integration
          </p>
        </motion.div>

        {/* Subscription Plans */}
        <SubscriptionPlans />

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <h3 className="text-2xl font-bold text-center mb-8">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                role: 'Premium User',
                text: 'NjiaSafe Premium saved me from an accident. The AI warnings are incredible!',
                rating: 5,
              },
              {
                name: 'David K.',
                role: 'Truck Driver',
                text: 'The V2V alerts help me navigate Nairobi traffic safely. Worth every penny.',
                rating: 5,
              },
              {
                name: 'Grace W.',
                role: 'Government Official',
                text: 'The data from NjiaSafe is helping us improve road infrastructure.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-2 mb-4">
                  {'★'.repeat(testimonial.rating)}
                  <span className="text-yellow-400">★</span>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-orange to-primary-gold flex items-center justify-center">
                    <span className="font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple rounded-3xl p-8 border border-primary-gold/30">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Journey?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of users who trust NjiaSafe for their daily commute.
              Your safety is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-orange to-primary-gold text-primary-950 font-bold hover:shadow-xl transition-shadow">
                Start 7-Day Free Trial
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              <Shield className="w-4 h-4 inline mr-1" />
              30-day money-back guarantee • No credit card required for trial
            </p>
          </div>
        </motion.div>
      </div>
    </PremiumLayout>
  )
}
