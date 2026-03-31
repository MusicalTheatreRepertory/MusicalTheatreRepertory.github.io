import React, { useEffect } from 'react'

export default function ADMLayout({ children }) {
  useEffect(() => {
    document.body.style.setProperty('--page-bg', '#d9f1ea')

    return () => {
      document.body.style.removeProperty('--page-bg')
    }
  }, [])

  return <>{children}</>
}
