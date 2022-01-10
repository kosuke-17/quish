import { Button } from "antd";
import React from "react";
import { UserFormInputs } from "../molecules";

type Props = {
  registerTitleText: string;
  userNameText: string;
  mailAdressText: string;
  passwordText: string;
  checkPasswordText: string;
  onChangeUserName: Function;
  onChangeMailAddress: Function;
  onChangePassword: Function;
  onChangeCheckPassword: Function;
  onClick: Function;
  errorOfMailAddress: string;
  errorOfPassword: string;
  errorOfCheckpassword: string;
};

const RegisterUserComp: React.FC<Props> = ({
  registerTitleText,
  userNameText,
  mailAdressText,
  passwordText,
  checkPasswordText,
  onChangeUserName,
  onChangeMailAddress,
  onChangePassword,
  onChangeCheckPassword,
  onClick,
  errorOfMailAddress,
  errorOfPassword,
  errorOfCheckpassword,
}) => {
  const INPUT_ITEMS_DATA = [
    {
      name: userNameText,
      onChange: onChangeUserName,
      errorMsg: "",
    },
    {
      name: mailAdressText,
      onChange: onChangeMailAddress,
      errorMsg: errorOfMailAddress,
    },
    {
      name: passwordText,
      onChange: onChangePassword,
      errorMsg: errorOfPassword,
    },
    {
      name: checkPasswordText,
      onChange: onChangeCheckPassword,
      errorMsg: errorOfCheckpassword,
    },
  ];
  return (
    <React.Fragment>
      <div className="font-bold text-3xl m-4 -ml-4 text-blue-500">
        {registerTitleText}
      </div>
      <div>
        <UserFormInputs INPUT_ITEMS_DATA={INPUT_ITEMS_DATA} />
      </div>
      <Button
        type="primary"
        onClick={() => onClick()}
        className="bg-blue-500 rounded-lg p-2 w-40 mx-32 mt-6 text-white font-normal px-10 border-2 border-white hover:border-blue-500 hover:bg-gray-100 hover:text-blue-500"
      >
        {registerTitleText}
      </Button>
    </React.Fragment>
  );
};

export default RegisterUserComp;

{
  /* <div className="font-bold">{userNameText}</div>
      <div>
        <UserFormInput onChange={changeUserName} placeholder={userNameText} />
      </div>
      <div className="font-bold">{mailAdressText}</div>
      <span className="text-red-600">{errorOfMailAddress}</span>
      <div>
        <UserFormInput
          onChange={changeMailAddress}
          placeholder={mailAdressText}
        />
      </div>
      <div className="font-bold">{passwordText}</div>
      <span className="text-red-600">{errorOfPassword}</span>
      <div>
        <UserFormInput onChange={changePassword} placeholder={passwordText} />
      </div>
      <div className="font-bold">{checkPasswordText}</div>
      <span className="text-red-600">{errorOfCheckpassword}</span>
      <div>
        <UserFormInput
          onChange={changeCheckPassword}
          placeholder={checkPasswordText}
        />
      </div> */
}
