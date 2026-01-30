import React, { useEffect } from 'react'

export default function MTRLayout({ children }) {
  useEffect(() => {
    console.log('MTRLayout mounted ✅')
    document.body.style.setProperty('--page-bg', '#0E1E1F')

    return () => {
      document.body.style.removeProperty('--page-bg')
    }
  }, [])

  return <>{children}</>
}
