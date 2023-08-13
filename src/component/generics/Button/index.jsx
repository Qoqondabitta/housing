import React from 'react'
import { ContainerButton } from './style'

const Button = ({children, type, onClick}) => {
  return (
    <ContainerButton type={type} onClick={onClick}>
        {children || "Submit"}
    </ContainerButton>
  )
}

export default Button