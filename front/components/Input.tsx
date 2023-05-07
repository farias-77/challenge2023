import Image from 'next/image'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export function Input({
  iconPath,
  ...props
}: InputProps & { iconPath?: string; onValue?: (val: string) => void }) {
  return (
    <div className="w-full h-[55px] bg-dark-20 rounded-xl px-6 gap-3 flex justify-start items-center">
      {iconPath && <Image width={20} height={20} src={iconPath} alt="input-item" />}
      <input
        onChange={(e) => (props.onChange?.(e), props.onValue?.(e.target.value))}
        className="placeholder:text-lg bg-transparent text-bright font-bold placeholder:font-normal outline-none"
        {...props}
      />
    </div>
  )
}
