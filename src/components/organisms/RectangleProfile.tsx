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
    engineer_type: string;
    comment: string;
    skill_tags: {
      user_info_id: number;
      skill_id: number;
      skill_name: string;
    }[];
  };
};

const RectangleProfile: React.FC<Props> = ({ user_info_data }) => {
  return (
    <div className="flex w-full m-2 p-2 bg-white rounded-lg border shadow-md">
      <div className="w-1/2 flex items-center">
        <div className="w-20 h-20 rounded-full bg-slate-300"></div>
        <div className="pl-3">
          @{user_info_data.user_name}
          <div className="text-gray-400">&nbsp;ラクス太郎</div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mt-2 flex items-center justify-center">
          職種:{" "}
          <span className="ml-1 px-3 rounded-md text-white bg-orange-400">
            FR
          </span>{" "}
        </div>
        <div className="m-1 flex justify-center items-center divide-x divide-black text-xs text-center">
          <div className="px-1">
            投稿数
            <br />
            11
          </div>
          <div className="px-1">
            フォロー
            <br />
            12
          </div>
          <div className="px-1">
            フォロワー
            <br />
            14
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleProfile;
