import styles from '../entrypoints/popup/index.module.scss'

interface ToggleProps {
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean 
  disabled: boolean
  className: string
  title: string 
}

const Toggle = ({ onToggle, checked, disabled, className, title }: ToggleProps) => {
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

export default Toggle