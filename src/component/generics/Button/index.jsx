import React from 'react'
import { ContainerButton } from './style'

const Button = ({children, type, onClick, width, Mediawidth}) => {
  return (
    <ContainerButton
      type={type}
      onClick={onClick}
      width={width}
      Mediawidth={Mediawidth}
    >
      {children || "Submit"}
    </ContainerButton>
  );
}

export default Button