import styles from './index.module.scss'
import { useState, useEffect, useRef } from 'react'

import { LanguageItem, MessageType } from "@/types"
import KeyboardControls from './keyboardControls'

import keyboardIcon from '@/assets/keyboard-icon.svg'
import keypressSound from '@/assets/key-press-sound.mp3'
import { numbersMacLayout, macLayout, numbersWindowsLayout, windowsLayout } from '@/languagesMap'

interface KeyboardProps {
  selectedLanguage: LanguageItem 
  soundEnabled: boolean
  visibility: number
  isDarkMode: boolean 
  isCollapsed: boolean
  keyboardEnabled: boolean
  dragHandlerProps: any
  didDrag: any
  isMac: boolean
}

const Keyboard = (props: KeyboardProps) => {
  const { 
    selectedLanguage, 
    soundEnabled, 
    visibility, 
    isDarkMode, 
    isCollapsed,
    dragHandlerProps, 
    didDrag,
    isMac
  } = props || {}

  const { title, lng } = selectedLanguage || {}
  const layout = isMac ? macLayout : windowsLayout
  const numbersLayout = isMac ? numbersMacLayout : numbersWindowsLayout

  const [pressedKey, setPressedKey] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleCollapseToggle = () => {
    browser.runtime.sendMessage({ type: MessageType.TOGGLE_COLLAPSE })
  }

  const handleDarkModeToggle = () => {
    browser.runtime.sendMessage({ type: MessageType.TOGGLE_THEME })
  }

  const handleClose = () => {
    browser.runtime.sendMessage({ type: MessageType.SET_KEYBOARD_MASTER, payload: { visible: false } })
  }

  useEffect(() => {
    audioRef.current = new Audio(keypressSound)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      setPressedKey(e.key.toUpperCase())

      if (soundEnabled && audioRef.current) {
        audioRef.current.currentTime = 0 
        audioRef.current.play()
      }

      if (timeoutRef.current) 
        clearTimeout(timeoutRef.current)

      timeoutRef.current = setTimeout(() => {
        setPressedKey(null)
      }, 300)
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      if (timeoutRef.current)
        clearTimeout(timeoutRef.current)
    }
  }, [soundEnabled])

  return (
    <>
      <div 
        {...dragHandlerProps}
        onClick={(e) => {
          if (didDrag.current) {
            e.preventDefault()
            e.stopPropagation()
            return 
          }
          handleCollapseToggle()
        }} 
        className={`${styles['keyboard-toggle-btn']} ${isCollapsed ? styles.show : ''}`}
      >
        <img src={keyboardIcon} alt="" />
      </div>
    
      <div 
        className={`${styles.root} ${isCollapsed ? styles.collapsing : ''}`}
        style={{ opacity: visibility / 100, width: isMac ? 700 : 755 }}
        data-theme = {isDarkMode ? 'dark' : 'light'}
      >
        <div className={styles.header}>
          <p className={styles['selected-lang']}>{title}</p>

          <KeyboardControls 
            isDarkMode={isDarkMode}
            onShutDown={handleClose}
            onToggleCollapse={handleCollapseToggle}
            onToggleTheme={handleDarkModeToggle}
          />
        </div>

        <div className={styles['numbers-row']}>
          {numbersLayout.map(n => (
            <button key={n.num} className={pressedKey === n.num ? styles.highlight : ''}>
              <div className={styles['chars-container']}>
                <span>{n.num}</span>
                <span>{n[lng]}</span>
              </div>
            </button>
          ))}
        </div>

        <div className={styles['layout']}>
          {layout.map((row, rowIndex) => (
            <div key={rowIndex} className={styles['row']}>
              {row.map((keyObj, keyIndex) => (
                <button key={keyIndex} className={`${styles['key']} ${pressedKey === keyObj.en ? styles.highlight : ''} `}>
                  <div className={styles['key-content-container']}>
                    <div className={styles['sub-container']}>
                      <span className={styles['english-letter']}>{keyObj.en}</span>
                      <span className={styles['primary-letter']}>{keyObj[lng][0]}</span>
                    </div>

                    <span className={styles['secondary-letter']}>{keyObj[lng][1]}</span>
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Keyboard