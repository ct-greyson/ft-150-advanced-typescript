import React, { MouseEvent } from 'react'

interface ButtonProps {
    buttonClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({buttonClick}: ButtonProps) => {
  return (
    <button onClick={buttonClick}>CLICK ME</button>
  )
}

export default Button