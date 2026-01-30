import React, { useEffect } from 'react'

export default function LSOHLayout({ children }) {
  useEffect(() => {
    document.body.style.setProperty('--page-bg', '#F8CBD0')

    return () => {
      document.body.style.removeProperty('--page-bg')
    }
  }, [])

  return <>{children}</>
}
