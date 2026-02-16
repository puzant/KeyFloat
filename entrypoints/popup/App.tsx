import React, { useEffect, useState, useRef } from 'react'
import styles from './index.module.scss'

import { usePreferences } from '@/hooks/usePreferences'
import LanguageSelector from '@/components/languageSelector'
import KeyboardOpacity from '@/components/keyboardOpacity'
import Toggle from '@/components/toggle'

import { LanguageItem, MessageType } from '@/types'

import keyBoardIconDark from '@/assets/keyboard-icon-dark.png'

function App() {
  const { preferences } = usePreferences()

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const [prefs, setPrefs] = useState({
    selectedLanguage: preferences.selectedLanguage,
    keyboardEnabled: preferences.keyboardEnabled,
    soundEnabled: preferences.soundEnabled,
    visibility: preferences.visibility
  })

  const percentage: number = (prefs.visibility / 100) * 100
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setPrefs({
      selectedLanguage: preferences.selectedLanguage,
      keyboardEnabled: preferences.keyboardEnabled,
      soundEnabled: preferences.soundEnabled,
      visibility: preferences.visibility
    })
  }, [preferences])

  const handleDropdownBtnClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLangSelection = async (selectedLang: LanguageItem) => {
    setPrefs(prev => ({
      ...prev,
      selectedLanguage: selectedLang
    }))

    setIsDropdownOpen(!isDropdownOpen)

    await browser.runtime.sendMessage({ 
      type: MessageType.APPLY_LANGUAGE, 
      payload: { selectedLanguage: selectedLang }
    })
  }

  const handleKeyboardToggle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrefs(prev => ({
      ...prev,
      keyboardEnabled: e.target.checked
    }))

    await browser.runtime.sendMessage({ 
      type: MessageType.SET_KEYBOARD_MASTER, 
      payload: { visible: e.target.checked }
    })
  }

  const handleSoundToggle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrefs(prev => ({
      ...prev,
      soundEnabled: e.target.checked
    }))

    await browser.runtime.sendMessage({ 
      type: MessageType.APPLY_SOUND, 
      payload: {  soundEnabled: e.target.checked }
    })
  }

  const handleVisibilityChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrefs(prev => ({
      ...prev,
      visibility: Number(e.target.value)
    }))

    if (debounceTimeout.current) 
      clearTimeout(debounceTimeout.current)
    
    debounceTimeout.current = setTimeout(() => {
      browser.runtime.sendMessage({ 
      type: MessageType.APPLY_VISIBILITY, 
      payload: {  visibility: Number(e.target.value) }
    })
    }, 300)
  } 

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={keyBoardIconDark} alt="" />
        <p>KeyFloat</p>
      </div>

      <div className={styles.controls}>
        <LanguageSelector
          isDropdownOpen={isDropdownOpen}
          selectedLang={prefs.selectedLanguage}
          onDropdownBtnClick={handleDropdownBtnClick}
          onLangSelection={handleLangSelection}
        />

        <Toggle 
          className={`${styles['enable-keyboard']} ${prefs.selectedLanguage && styles['visibility']}`}
          onToggle={handleKeyboardToggle}
          checked={prefs.keyboardEnabled}
          disabled={!prefs.selectedLanguage}
          title="Enable Keyboard"
        />

        <Toggle 
          className={`${styles['enable-sound']} ${prefs.keyboardEnabled && styles['visibility']}`}
          onToggle={handleSoundToggle}
          checked={prefs.soundEnabled}
          disabled={!prefs.keyboardEnabled}
          title="Enable Sound"
        />

        <KeyboardOpacity 
          isKeyboardEnabled={prefs.keyboardEnabled}
          visibility={prefs.visibility}
          percentage={percentage}
          onVisibilityChange={handleVisibilityChange}
        />
      </div>

      <p className={styles.version}>v1.4.1 - <i>Terra Nova</i></p>
    </div>
  )
}

export default App;
