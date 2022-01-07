import { Button } from "antd";
import React from "react";

type PrimaryButtonProps = {
  label: string;
  onClick: Function;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <Button color="primary" onClick={()=> props.onClick}>
      {props.label}
    </Button>
  );
};

export default PrimaryButton;
