import React from "react";
import { RectangleProfile } from "../components/organisms";
import { TrademarkCircleTwoTone, LoadingOutlined } from "@ant-design/icons";
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
          <div className="mt-10">
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
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" w-1/2">
          <div className="block mt-10">
            <Timeline mode="right">
              <div className="flex">
                <Item
                  className="w-44 text-gray-500 text-xl pr-10"
                  dot={
                    <TrademarkCircleTwoTone
                      twoToneColor="#FFB545"
                      className="text-3xl rounded-2xl"
                    />
                  }
                >
                  将来
                </Item>
                <div className="ml-6 w-full">
                  <p className="font-bold">この先やってみたいこと</p>
                  <div className="text-center w-full rounded-2xl hover:bg-gray-100">
                    <TextArea
                      placeholder="【フルスタックエンジニアになる】私は学習意欲が他の人よりも高いと考えられる。そのため、知識やスキルを増やして、仕事で活躍できるようなフルスタックエンジニアを目標にすることが良いと思ったから。"
                      autoSize={{ minRows: 5 }}
                      bordered={false}
                    />
                  </div>
                </div>
              </div>
              <div className="my-4 text-center divide-y-2 divide-dashed">
                <button className="p-2 rounded-xl bg-[rgb(255,195,98)] hover:bg-[rgb(255,207,131)] drop-shadow-2xl">
                  新しいプロジェクト・学習言語
                </button>
                {/* ボタンの下の点線 */}
                <div className="relative bottom-5 -z-20"></div>
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
                  2015年10月
                  {/* <br /> - <br /> */}
                  2015年11月
                </Item>
                <div className="ml-6 mb-5 bg-slate-400 w-full">
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
                <div className="ml-6 mb-5 bg-slate-400 w-full">
                  <p>タイトルとアピールなど</p>
                  <div className="bg-slate-200 w-full">
                    アピールの内容(現場で使用している言語や意識していること)
                  </div>
                  <div className="bg-slate-300 w-full">ここにArticleコンプ</div>
                </div>
              </div>
            </Timeline>
          </div>
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
