'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import SafeButton from '@/components/ui/SafeButton'

export function NavigationButtons() {
  const router = useRouter()

  const handleSubscription = () => {
    console.log('Navigating to subscription')
    router.push('/subscription')
  }

  const handleProfile = () => {
    console.log('Navigating to profile')
    router.push('/profile')
  }

  return (
    <div className="flex gap-4">
      <motion.div whileHover={{ scale: 1.05 }}>
        <SafeButton
          onClick={handleSubscription}
          variant="premium"
          className="px-4 py-2 text-sm sm:text-base"
        >
          Subscription
        </SafeButton>
      </motion.div>
      
      <motion.div whileHover={{ scale: 1.05 }}>
        <SafeButton
          onClick={handleProfile}
          variant="secondary"
          className="px-4 py-2 text-sm sm:text-base"
        >
          Profile
        </SafeButton>
      </motion.div>
    </div>
  )
}
