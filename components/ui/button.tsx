import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}


