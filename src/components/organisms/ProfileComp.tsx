import React from "react";
import SkillTagsOnProfile from "../molecules/SkillTagsOnProfile";

// FCの型定義
type Props = {
  user_info_data: {
    user_info_id: number;
    first_name: string;
    last_name: string;
    user_name: string;
    email: string;
    enginner_type: string;
    comment: string;
    skill_tags: {
      user_info_id: number;
      skill_id: number;
      skill_name: string;
    }[];
  };
};

const ProfileComp: React.FC<Props> = ({ user_info_data }) => {
  return (
    <div className="w-full p-2 m-2 bg-white rounded-lg border shadow-md">
      <div className="m-4">
        <div className="flex justify-center items-center">
          <div className="w-20 h-20 rounded-full bg-slate-300"></div>
          <div className="pl-3">@{user_info_data.user_name}</div>
        </div>
        <div className="m-4 flex jusify-around divide-x divide-black ">
          <div className="flex-grow text-center">
            投稿数
            <div>11</div>
          </div>
          <div className="flex-grow text-center">
            フォロー
            <div>122</div>
          </div>
          <div className="flex-grow text-center ">
            フォロワー
            <div>140</div>
          </div>
        </div>
        <div className="text-xl mt-2 flex justify-center items-center">
          職種:
          <span className="ml-4 px-3 rounded-md text-white bg-orange-400">
            FR
          </span>
        </div>
      </div>
      <div className="block m-2">{user_info_data.comment}</div>
    </div>
  );
};

export default ProfileComp;
