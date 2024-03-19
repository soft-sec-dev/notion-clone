import { useState, useEffect } from "react";
export const useSrollTop = (threshold = 10) => {
  const [scrolled, setSCrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setSCrolled(true)
      } else {
        setSCrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}