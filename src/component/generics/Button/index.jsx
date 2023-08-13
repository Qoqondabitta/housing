import React from 'react'
import { Container } from './style'

const Button = ({children, type, onClick}) => {
  return (
    <Container type={type} onClick={onClick}>
        {children || "Submit"}
    </Container>
  )
}

export default Button