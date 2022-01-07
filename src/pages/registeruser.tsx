import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { InputStrType } from "../const/Types";

const RegisterUser: React.FC = () => {
  // 新規登録データ
  const [userName, setUserName] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  // エラーメッセージ
  const [errorOfMailAddress, setErrorOfMailAddress] = useState("");
  const [errorOfPassword, setErrorOfPassword] = useState("");
  const [errorOfCheckpassword, setErrorOfCheckpassword] = useState("");

  const hasErrors = (): boolean => {
    // エラー変数
    let hasError = false;

    //未入力値チェック（メールアドレス）/ ＠が含まれているかのチェック
    if (mailAddress === "") {
      setErrorOfMailAddress("「メールアドレス」が未入力です。");
      hasError = true;
    } else if (mailAddress.indexOf("@") === -1) {
      setErrorOfMailAddress("この「メールアドレス」は有効ではありません。");
      hasError = true;
    } else {
      setErrorOfMailAddress("");
    }

    //未入力値チェック（パスワード）
    if (password === "") {
      setErrorOfPassword("「パスワード」が未入力です。");
      hasError = true;
    } else if (password.length < 8 || 12 < password.length) {
      setErrorOfPassword("8文字以上12文字以内で入力して下さい。");
      hasError = true;
    } else if (isValidPassword() == false) {
      setErrorOfPassword("大文字小文字の英字と数字を含め入力して下さい。");
      hasError = true;
    } else {
      setErrorOfPassword("");
    }

    //未入力値チェック（確認用パスワード）とパスワード一致チェック
    if (checkPassword === "") {
      setErrorOfCheckpassword("「確認用パスワード」が未入力です。");
      hasError = true;
    } else if (password !== checkPassword && checkPassword !== "") {
      setErrorOfCheckpassword("パスワードと確認用パスワードが異なります。");
      hasError = true;
    } else {
      setErrorOfCheckpassword("");
    }

    return hasError;
  };
  const isValidPassword = () => {
    const ratz = /[a-z]/,
      rAtZ = /[A-Z]/,
      r0t9 = /[0-9]/;
    return ratz.test(password) && rAtZ.test(password) && r0t9.test(password);
  };

  const registerUser = async (): Promise<void> => {
    if (hasErrors()) {
      return;
    }

    // ネットワークエラー発生おそらくCORS関連
    // const response = await axios.post(`http://spring:9090/user/register`, {
    //   userName: userName,
    //   email: mailAddress,
    //   password: password,
    // });

    // if (response.data.message == "そのメールアドレスはすでに使われています。") {
    //   setErrorOfMailAddress("この「メールアドレス」は既に使用されています。");
    //   return;
    // }

    // if (response.data.status == "success" && checkPassword !== "") {
    //   Router.push("/loginUser");
    // }
  };

  // 入力データをステートにセットする処理
  const changeUserName = (e: InputStrType) => setUserName(e.target.value);
  const changeMailAddress = (e: InputStrType) => setMailAddress(e.target.value);
  const changePassword = (e: InputStrType) => setPassword(e.target.value);
  const changeCheckPassword = (e: InputStrType) =>
    setCheckPassword(e.target.value);

  return (
    <div className="w-full bg-white flex">
      <div className="w-3/5 my-20 mx-20">
        <div className="text-5xl font-semibold text-blue-500">
          How developers code is here.
          <br />
          Lets&apos;s share your experience.
        </div>
        <div className="mt-3 mx-20">
          <Image src="/img/engineer.png" alt="画像" width={382} height={382} />
        </div>
      </div>
      <div className="w-2/5 my-20 -ml-40">
        <div className="font-bold text-3xl m-4 -ml-4 text-blue-500">
          会員登録
        </div>
        <div className="font-bold">ユーザーネーム</div>
        <div>
          <input
            type="text"
            className="p-2 m-4 w-96 border-2 rounded-xl"
            placeholder="ユーザーネーム"
            value={userName}
            onChange={changeUserName}
          />
        </div>
        <div className="font-bold">メールアドレス</div>
        <span className="text-red-600">{errorOfMailAddress}</span>
        <div>
          <input
            type="text"
            className="p-2 m-4 w-96 border-2 rounded-xl"
            placeholder="メールアドレス"
            value={mailAddress}
            onChange={changeMailAddress}
          />
        </div>
        <div className="font-bold">パスワード</div>
        <span className="text-red-600">{errorOfPassword}</span>
        <div>
          <input
            type="text"
            className="p-2 m-4 w-96 border-2 rounded-xl"
            placeholder="パスワード"
            value={password}
            onChange={changePassword}
          />
        </div>
        <div className="font-bold">確認用パスワード</div>
        <span className="text-red-600">{errorOfCheckpassword}</span>
        <div>
          <input
            type="text"
            className="p-2 m-4 w-96 border-2 rounded-xl"
            placeholder="確認用パスワード"
            value={checkPassword}
            onChange={changeCheckPassword}
          />
        </div>
        <button
          type="button"
          onClick={registerUser}
          className="bg-blue-500 rounded-lg p-2 w-40 mx-32 mt-6 text-white font-normal px-10 border-2 border-white hover:border-blue-500 hover:bg-gray-100 hover:text-blue-500"
        >
          会員登録
        </button>
      </div>
    </div>
  );
};

export default RegisterUser;
