import React, { useState, useEffect } from "react"
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

const Theme = () => {
  const [colorMode, setColorMode] = useState('default')

  useEffect(() => {
    const savedMode = localStorage.getItem('colorMode') || 'default'
    setColorMode(savedMode)
    document.documentElement.setAttribute('data-theme', savedMode)
  }, [])

  const toggleTheme = () => {
    const newMode = colorMode === 'default' ? 'dark' : 'default'
    setColorMode(newMode)
    localStorage.setItem('colorMode', newMode)
    document.documentElement.setAttribute('data-theme', newMode)
  }

  return(
    <div className="theme-toggle">
      <button
        onClick={toggleTheme}
        className="theme-button">
          <div className="theme-icons">
            <div>
              {colorMode === 'default' ? <FiMoon/> : <FiSun/> }
            </div>
            <div className="theme-text">
              {colorMode === 'default' ? 'Dark' : 'Light'}
            </div>
          </div>
      </button>
    </div>
  )
}

export default Theme