import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

interface RouterContextType {
  pathname: string
  navigate: (path: string, hash?: string) => void
}

const RouterContext = createContext<RouterContextType>({
  pathname: '/',
  navigate: () => {},
})

export const useRouter = () => useContext(RouterContext)

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState<string>(() => {
    return window.location.pathname || '/'
  })

  // Listen to popstate (back/forward browser buttons)
  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname || '/')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((path: string, hash?: string) => {
    const targetUrl = hash ? `${path}#${hash}` : path
    if (window.location.pathname !== path || (hash && window.location.hash !== `#${hash}`)) {
      window.history.pushState({}, '', targetUrl)
      setPathname(path)
    }

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}
