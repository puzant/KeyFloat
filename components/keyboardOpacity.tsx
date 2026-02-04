import styles from '../entrypoints/popup/index.module.scss'

interface KeyboardOpacityProps {
  isKeyboardEnabled: boolean
  visibility: number 
  onVisibilityChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
  percentage: number
}

const KeyboardOpacity = ({ isKeyboardEnabled, visibility, onVisibilityChange, percentage }: KeyboardOpacityProps) => {
  return (
    <div className={`${styles['keyboard-opacity']} ${isKeyboardEnabled && styles['visibility']}`}>
      <div className={styles['opacity-level-indicator']}>
        <p className={styles.title}>Keyboard Visibility</p>
        <p className={styles['opacity-level']}>{visibility}%</p>
      </div>
      
      <input 
        type="range" 
        min="1" 
        max="100" 
        value={visibility}
        onChange={onVisibilityChange}
        disabled={!isKeyboardEnabled} 
        style={{
          background: `linear-gradient(to right, #ff5733 0%, #ff5733 ${percentage}%, #bdb9a6 ${percentage}%, #bdb9a6 100%)`
        }}
      />
    </div>
  )
}

export default KeyboardOpacity