export type ButtonType = 'primary' | 'danger' | 'success' | 'warning' | 'info'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonNativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: ButtonNativeType
  autofocus?: boolean
  icon?: string
  loading?: boolean
}
export interface ButtonInstance {
  ref: HTMLButtonElement
}
