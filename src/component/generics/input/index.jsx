import React, { forwardRef } from "react";
import { ContainerInput } from "./style";

// const InputGeneral = ({
//   width,
//   height,
//   type,
//   name,
//   onChange,
//   placeholder,
//   defaultvalue,
//   value,
// }) => {
//   return (
//     <ContainerInput
//       width={width}
//       height={height}
//       name={name}
//       value={value}
//       defaultValue={defaultvalue}
//       placeholder={placeholder}
//       type={type}
//       onChange={onChange}
//     />
//   );
// };

export const InputGeneral = forwardRef(
  (
    { width, height, type, name, onChange, placeholder, defaultvalue, value },
    ref
  ) => {
    return (
      <ContainerInput
        ref={ref}
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
  }
);

export default InputGeneral;
