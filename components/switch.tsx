import styles from '../entrypoints/popup/index.module.scss'

interface SwitchProps {
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean 
  disabled: boolean
  className: string
  title: string 
}

const Switch = ({ onToggle, checked, disabled, className, title }: SwitchProps) => {
  return (
    <div className={className}>
      <p className={styles.title}>{title}</p>

      <label className={styles.switch}>
        <input 
          onChange={onToggle} 
          checked={checked} 
          disabled={disabled} 
          type="checkbox" 
        />
        <div></div>
        
      </label>
    </div>
  )
}

export default Switch