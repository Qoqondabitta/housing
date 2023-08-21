import React from 'react'
import { ContainerButton } from './style'

const Button = ({children, type, onClick, width, mediawidth}) => {
  return (
    <ContainerButton
      type={type}
      onClick={onClick}
      width={width}
      Mediawidth={mediawidth}
    >
      {children || "Submit"}
    </ContainerButton>
  );
}

export default Button