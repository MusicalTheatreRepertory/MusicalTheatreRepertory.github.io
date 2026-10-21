import React, { useEffect } from 'react'

export default function SPALayout({ children }) {
  useEffect(() => {
    document.body.style.setProperty('--page-bg', '#443949')

    return () => {
      document.body.style.removeProperty('--page-bg')
    }
  }, [])

  return <>{children}</>
}
