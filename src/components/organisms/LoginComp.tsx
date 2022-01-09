import React from "react";
import { UserFormInput } from "../atoms";

type Props = {
  loginText: string;
  onChangeMailAddress: Function;
  onChangePassword: Function;
  onClicklogin: Function;
  errorMessage: string;
};

const LoginComp: React.FC<Props> = ({
  loginText,
  errorMessage,
  onChangeMailAddress,
  onChangePassword,
  onClicklogin,
}) => {
  const LOGIN_INPUT_DATA = ["メールアドレス", "パスワード"];
  return (
    <React.Fragment>
      <div className="font-bold text-3xl m-10 -ml-4 text-blue-500">
        {loginText}
      </div>
      <div className="text-red-500 h-10">{errorMessage}</div>
      <div className="font-bold">メールアドレス</div>
      <div>
        <UserFormInput
          onChange={onChangeMailAddress}
          placeholder="メールアドレス"
        />
      </div>
      <div className="font-bold">パスワード</div>
      <div>
        <UserFormInput onChange={onChangePassword} placeholder="パスワード" />
      </div>
      <button
        type="button"
        onClick={() => onClicklogin()}
        className="bg-blue-500 rounded-lg p-2 w-48 mx-28 mt-6 text-white font-normal px-10 border-2 border-white hover:border-blue-500 hover:bg-gray-100 hover:text-blue-500"
      >
        {loginText}
      </button>
    </React.Fragment>
  );
};

export default LoginComp;
