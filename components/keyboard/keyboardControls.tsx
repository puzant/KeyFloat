import styles from './index.module.scss'

import collapseIconDark from '@/assets/collapse-icon-dark.svg'
import shutdownIconDark from '@/assets/shutdown-icon-dark.svg'
import moonIcon from '@/assets/moon-icon.svg'
import collapseIcon from '@/assets/collapse-icon.svg'
import shutdownIcon from '@/assets/shutdown-icon.svg'
import sunIcon from '@/assets/sun-icon.svg'

interface KeyboardControlsProps {
  isDarkMode: boolean 
  onToggleTheme: () => void
  onToggleCollapse: () => void
  onShutDown: () => void
}

const KeyboardControls = ({ isDarkMode, onToggleTheme, onToggleCollapse, onShutDown }: KeyboardControlsProps) => {
  return (
    <div className={styles['keyboard-controls']}>
      <img onClick={onToggleTheme} src={isDarkMode ? sunIcon : moonIcon} alt="" />
      <img onClick={onToggleCollapse} src={isDarkMode ? collapseIcon : collapseIconDark} alt="" />
      <img onClick={onShutDown} src={isDarkMode ? shutdownIcon : shutdownIconDark} alt="" />
    </div>
  )
}

export default KeyboardControls