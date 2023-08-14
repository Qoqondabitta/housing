import React from 'react'
import { ContainerButton } from './style'

const Button = ({children, type, onClick, width}) => {
  return (
    <ContainerButton type={type} onClick={onClick} width={width}>
        {children || "Submit"}
    </ContainerButton>
  )
}

export default Button