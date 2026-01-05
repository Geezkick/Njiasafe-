'use client'

import { useEffect } from 'react'

export default function ButtonFix() {
  useEffect(() => {
    console.log('🛠️ ButtonFix: Starting emergency button repairs...')
    
    const emergencyButtonFix = () => {
      let fixedCount = 0
      
      // Fix ALL button elements
      document.querySelectorAll('button').forEach(btn => {
        // Force enable
        btn.style.pointerEvents = 'auto'
        btn.style.cursor = 'pointer'
        btn.style.zIndex = '99999'
        btn.style.position = 'relative'
        
        // Remove problematic attributes
        btn.removeAttribute('data-framer-motion-component')
        
        // Ensure type attribute
        if (!btn.hasAttribute('type')) {
          btn.setAttribute('type', 'button')
        }
        
        // Add emergency click handler
        const originalOnClick = btn.onclick
        btn.onclick = function(e) {
          console.log('✅ EMERGENCY FIX: Button clicked!', {
            text: this.textContent?.trim(),
            type: this.getAttribute('type'),
            disabled: this.disabled
          })
          
          if (this.disabled) {
            console.log('❌ Button disabled, blocking click')
            e.preventDefault()
            e.stopPropagation()
            return false
          }
          
          if (originalOnClick) {
            return originalOnClick.call(this, e)
          }
        }
        
        fixedCount++
      })
      
      console.log(`🛠️ ButtonFix: Fixed ${fixedCount} buttons`)
    }
    
    // Run immediately
    emergencyButtonFix()
    
    // Keep running
    const intervals = [
      100, 500, 1000, 2000, 5000
    ]
    
    intervals.forEach(timeout => {
      setTimeout(emergencyButtonFix, timeout)
    })
    
    // Continuous fix
    const interval = setInterval(emergencyButtonFix, 3000)
    
    return () => clearInterval(interval)
  }, [])
  
  return null
}
