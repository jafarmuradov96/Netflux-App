import React from "react";

const Input = ({ value, type, onChange, className, name, placeholder }) => {
  return (
    <input
      type={type}
      value = {value}
      onChange={onChange}
      className={className}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
