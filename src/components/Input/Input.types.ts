export type InputTextPropsType = {
    onEnter?: () => void
    error?: string
    placeholder?: string
    addActionCreator: (value: string) => { type: string, inputValue: string }
    inputLabel: string
}