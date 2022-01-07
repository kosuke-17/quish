import React from "react";

const Profile = () => {
  return (
    <div className="box-content h-96 m-2 bg-white rounded-lg border shadow-md">
      <div className="m-4">
        <div className="block ml-28 mr-28">@rakus1111111</div>
        <div className="m-4 flex jusify-around divide-x divide-black">
          <div className="flex-grow text-center">
            投稿数
            <div>11</div>
          </div>
          <div className="flex-grow text-center">
            フォロー
            <div>122</div>
          </div>
          <div className="flex-grow text-center">
            フォロワー
            <div>140</div>
          </div>
        </div>
        <div className="block">
          <div className="m-1">
            <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
              フロントエンド
            </span>
            <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
              TypeScript
            </span>
            <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
              Vue
            </span>
            <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
              TailwindCSS
            </span>
          </div>
        </div>
        <div className="block m-2">趣味はサウナです。</div>
      </div>
    </div>
  );
};

export default Profile;
