import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { InputStrType } from "../const/Types";

const LoginUser: React.FC = () => {
  // ログインデータ
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  // エラーメッセージ
  const [errorMessage, setErrorMessage] = useState("");

  const loginUser = async (): Promise<void> => {
    const response = await axios.post(`http://spring:9090/user/login`, {
      email: mailAddress,
      password: password,
    });

    if (response.data.status == "error") {
      setErrorMessage("ログインに失敗しました");
    }
  };

  // 入力データをステートにセットする処理
  const changeMailAddress = (e: InputStrType) => setMailAddress(e.target.value);
  const changePassword = (e: InputStrType) => setPassword(e.target.value);

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
        <div className="font-bold text-3xl m-10 -ml-4 text-blue-500">
          ログイン
        </div>
        <div className="text-red-500">{{ errorMessage }}</div>
        <div className="font-bold">メールアドレス</div>
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
        <div>
          <input
            type="text"
            className="p-2 m-4 w-96 border-2 rounded-xl"
            placeholder="パスワード"
            value={password}
            onChange={changePassword}
          />
        </div>
        <button
          type="button"
          v-on:click={loginUser}
          className="bg-blue-500 rounded-lg p-2 w-48 mx-28 mt-6 text-white font-normal px-10 border-2 border-white hover:border-blue-500 hover:bg-gray-100 hover:text-blue-500"
        >
          ログイン
        </button>
      </div>
    </div>
  );
};

export default LoginUser;
