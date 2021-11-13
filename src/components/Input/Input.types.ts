export type InputTextPropsType = {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    placeholder?: string
    addActionCreator: (value: string) => { type: string, inputValue: string }
}