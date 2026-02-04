import styles from '../entrypoints/popup/index.module.scss'
import { LanguageItem } from '@/types'

import infoIcon from '@/assets/info-icon.svg'
import generalLanguageIcon from '@/assets/general-language.svg'
import arrowDownIcon from '@/assets/arrow-down.svg'
import frenchLangIcon from '@/assets/french-lang.svg'
import arabicLangIcon from '@/assets/arabic-lang.svg'
import armenianLangIcon from '@/assets/armenian-lang.svg'
import spanishLangIcon from '@/assets/spanish-lang.svg'

interface LanguageSelectorProps {
  selectedLang: LanguageItem | null
  isDropdownOpen: boolean
  onDropdownBtnClick: () => void
  onLangSelection: (selectedLang: LanguageItem) => void
}

const LanguageSelector = ({ selectedLang, isDropdownOpen, onDropdownBtnClick, onLangSelection }: LanguageSelectorProps) => {
  const languages: LanguageItem[] = [
    {title: 'Français', icon: frenchLangIcon, lng: 'fr'},
    {title: 'العربية', icon: arabicLangIcon, lng: 'ar'},
    {title: 'Spanish', icon: spanishLangIcon, lng: 'sp'},
    {title: 'հաերեն', icon: armenianLangIcon, lng: 'am'},
  ]

  return (
    <div className={styles['language-select']}>
      <div>
        <span className={styles.title}>Language</span>
      
        <span className={styles['tooltip-icon']}>
          <img style={{width: 15, height: 15}} src={infoIcon} alt="" />
          <span className={styles['tooltip-text']}>More languages coming soon.</span>
        </span>
      </div>
    
      <div className={styles['dropdown']}>
        <button onClick={onDropdownBtnClick} className={styles['dropdown-btn']}>
          {selectedLang ? (
            <div className={styles['dropdown-selected']}>
              <img className={styles['langFlag']} src={selectedLang.icon} alt="" />
              <span>{selectedLang.title}</span>
            </div>
              ) : (
            <div className={styles['dropdown-selected']}>
              <img className={styles['langFlag']} src={generalLanguageIcon} alt="" />
              <span>Not selected</span>
            </div>
          )}
          
          <img src={arrowDownIcon} className={`${isDropdownOpen && styles.open} ${styles.arrow}`} alt="" />
        </button>
        
        {isDropdownOpen && (
          <div className={styles['dropdown-content']}>
            {languages.map((_: LanguageItem) => (
              <div onClick={() => onLangSelection(_)} key={_.lng} className={styles['dropdown-item']} data-lang={_.lng}>
                <img src={_.icon} alt="" /> <span>{_.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  ) 
}

export default LanguageSelector