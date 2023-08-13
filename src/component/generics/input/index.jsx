import React from "react";
import { ContainerInput } from "./style";

const InputGeneral = ({
  width,
  height,
  type,
  name,
  onChange,
  placeholder,
  defaultvalue,
  value,
}) => {
  return (
    <ContainerInput
      width={width}
      height={height}
      name={name}
      value={value}
      defaultValue={defaultvalue}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
};

export default InputGeneral;
