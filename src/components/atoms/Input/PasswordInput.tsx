import { Input } from "antd";
import React from "react";
import { onChangeProps } from "../../../const/Types";

const PasswordInput: React.FC<onChangeProps> = ({ onChange, label }) => {
  return (
    <Input
      onChange={(e) => onChange(e)}
      placeholder={label}
      className="p-2 m-4 w-96 border-2 rounded-xl"
    />
  );
};

export default PasswordInput;
