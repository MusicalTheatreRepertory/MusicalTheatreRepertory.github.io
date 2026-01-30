import React, { useEffect } from 'react'

export default function LSOHLayout({ children }) {
  useEffect(() => {
    document.body.style.setProperty('--page-bg', '#F5EEFF')

    return () => {
      document.body.style.removeProperty('--page-bg')
    }
  }, [])

  return <>{children}</>
}
