import React from "react";
import { UserFormInput } from "../atoms";

type Props = {
  INPUT_ITEMS_DATA: { name: string; onChange: Function }[];
};

const UserFormInputs: React.FC<Props> = ({ INPUT_ITEMS_DATA }) => {
  return (
    <React.Fragment>
      {INPUT_ITEMS_DATA.map((label) => {
        return (
          <div key={label.name}>
            <div className="font-bold">{label.name}</div>
            <UserFormInput onChange={label.onChange} placeholder={label.name} />
          </div>
        );
      })}
    </React.Fragment>
  );
};
export default UserFormInputs;
