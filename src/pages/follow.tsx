import React from "react";
import { RectangleProfile } from "../components/organisms";

const Follow: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="w-1/3">
        <RectangleProfile user_info_data={user_info_data} />
        <RectangleProfile user_info_data={user_info_data} />
        <RectangleProfile user_info_data={user_info_data} />
        <RectangleProfile user_info_data={user_info_data} />
      </div>
    </div>
  );
};

export default Follow;

const user_data = {
  user_name: "rakus111111",
  password: "Yamtataro123",
};

const skill_tags = [
  { user_info_id: 1, skill_id: 1, skill_name: "フロントエンド" },
  { user_info_id: 1, skill_id: 5, skill_name: "TypeScript" },
  { user_info_id: 1, skill_id: 6, skill_name: "Vue" },
  { user_info_id: 1, skill_id: 3, skill_name: "TailwindCSS" },
];

export const user_info_data = {
  user_info_id: 1,
  first_name: "太郎",
  last_name: "山田",
  user_name: user_data.user_name,
  email: "yama@taro.com",
  engineer_type: "",
  comment: "趣味はサウナです。",
  skill_tags: skill_tags,
};
