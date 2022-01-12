import React from "react";
import { RectangleProfile } from "../components/organisms";
import { TrademarkCircleTwoTone } from "@ant-design/icons";
import { Input, Timeline } from "antd";
const { TextArea } = Input;
const { Item } = Timeline;

const profile: React.FC = () => {
  return (
    <div>
      <div className="flex-none">プロフィールページ(削除用)</div>
      {/* 下記以降必要 */}
      <div className="flex justify-center">
        <div className="w-1/3">
          <RectangleProfile user_info_data={user_info_data} />
          {/* <div className="mt-10">
            <span className="block p-2 rounded-xl">
              <Input
                className="text-3xl hover:placeholder-gray-600"
                placeholder="座右の銘・好きな言葉"
                bordered={false}
              />
            </span>
            <span className="block w-full p-2 text-xl rounded-xl hover:bg-gray-100">
              <TextArea
                placeholder="この読書の目的は「知ること」ではなく、「行動すること」"
                autoSize={{ minRows: 5 }}
                bordered={false}
              />
            </span>
          </div>
          <div className="block mt-10">
            <Timeline mode="right">
              <div className="flex">
                <Item
                  className="w-44 text-gray-500 text-xl pr-10"
                  dot={
                    <TrademarkCircleTwoTone
                      twoToneColor="#FFB545"
                      className="text-3xl rounded-full"
                    />
                  }
                >
                  2015年9月
                </Item>
                <div className="ml-3 bg-slate-400 w-full">
                  <p>タイトルとアピールなど</p>
                  <div className="bg-slate-200 w-full">
                    アピールの内容(現場で使用している言語や意識していること)
                  </div>
                  <div className="bg-slate-300 w-full">ここにArticleコンプ</div>
                </div>
              </div>
              <div className="flex">
                <Item
                  className="w-44 text-gray-500 text-xl pr-10"
                  dot={
                    <TrademarkCircleTwoTone
                      twoToneColor="#FFB545"
                      className="text-3xl rounded-full"
                    />
                  }
                >
                  2015年9月
                </Item>
                <div className="ml-3 bg-slate-400 w-full">
                  <p>タイトルとアピールなど</p>
                  <div className="bg-slate-200 w-full">
                    アピールの内容(現場で使用している言語や意識していること)
                  </div>
                  <div className="bg-slate-300 w-full">ここにArticleコンプ</div>
                </div>
              </div>
              <div className="flex">
                <Item
                  className="w-44 text-gray-500 text-xl pr-10"
                  dot={
                    <TrademarkCircleTwoTone
                      twoToneColor="#FFB545"
                      className="text-3xl rounded-full"
                    />
                  }
                >
                  2015年9月
                </Item>
                <div className="ml-3 bg-slate-400 w-full">
                  <p>タイトルとアピールなど</p>
                  <div className="bg-slate-200 w-full">
                    アピールの内容(現場で使用している言語や意識していること)
                  </div>
                  <div className="bg-slate-300 w-full">ここにArticleコンプ</div>
                </div>
              </div>
            </Timeline>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default profile;

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
