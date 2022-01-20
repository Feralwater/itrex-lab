export interface ButtonProps {
  size: 'large' | 'small'
  variant: 'primary' | 'secondary'
  icon: 'default' | 'left' | 'right'
  disabled?: boolean
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  iconUrl?: string
  isBorder?: boolean
}
