export type ButtonPropsType = {
    size: 'large' | 'small'
    variant: 'primary' | 'secondary'
    icon: 'default' | 'left' | 'right'
    disabled?: boolean
    type: 'button' | 'submit' | 'reset' | undefined
    onClick?: (e?: any) => void
}
