import Link from "next/link";
import React from "react";
import { TagsOutlined, HeartTwoTone, PictureFilled } from "@ant-design/icons";
import { ProfileComp } from "../../components/organisms";
import TextArea from "antd/lib/input/TextArea";
import Image from "next/image";

const Article: React.FC = () => {
  const commentContent =
    "こんにちは。まず僕もこの議論は影から見ていて、ほとんどはこの記事の主張と同じように思っています。多いのはelseを省略したifですが、多くの場合それは副作用を利用しているコードだと思います。記事でも言及があるようにifがもし式（= 三項演算子）であったら通用しにくくなるというのももっともだと思っています。その点を踏まえたうえで、ちょっとコメントです。キーワードのところに「参照透過」があるので、mayPrintのところは次のような参照透過が破壊される例があると、その次のIO<Void>を使った説明へと繋げやすくなる？🤔このような 👇コードにちょっと変更してみますinamiさんに言うまでもないことだとは思いますが、参照透過であるとは「あらゆる変数をその代入された式で置換してもプログラム全体の意味が同じになる」ということを意味していると思います参照透過であれば、こういう感じでprintの結果をいったん変数に代入しても同じとなるはずですが、これだとxの値が何であっても大抵のプログラム言語では正の数が出力されてしまうと思います。したがって元のプログラムは参照透過ではないということになりますそもそも参照透過であると何がいいんだ？というような議論にもなりそうですが、これを無理やり（？）参照透過にしたいというモチベーションでIO<Void>がある！という説明にできるような気がしました";
  return (
    <div className="bg-gray-200 h-screen">
      <div className="flex justify-center">
        <div className="text-center m-10 bg-white w-1/2 h-auto rounded-lg border shadow-md">
          <div className="mt-8">
            <Image
              src={"/img/lang_logos/react.png"}
              width={80}
              height={80}
              alt="言語画像"
            />
          </div>
          <div className="py-2 text-2xl font-bold">
            TailwindCSSのチートシートを公開します。
          </div>
          <div className="px-10">
            <TagsOutlined className="text-2xl" />
            &nbsp;{" "}
            <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
              {" "}
              フロントエンド
            </span>
            <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
              CSS
            </span>
            <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
              tailwindCSS
            </span>
            <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
              初心者
            </span>
          </div>
          <div className="text-slate-500 text-center">
            <span>投稿日: 2021年12月7日</span>
            &nbsp;
            <span>更新日: 2021年12月7日</span>
          </div>

          <div className="bg-gray-400 box-content h-40  p-8 text-center">
            NoImage?
          </div>
          <p className="p-10 text-lg">
            {commentContent}{" "}
            プログラミングをしていると、「あれ、どうだったかな？」とリファレンスを確認する場面が結構出てきます。そんな時に、サクッと確認できるのが「チートシート」です。
          </p>
        </div>

        <div className="w-1/5 mt-8">
          <ProfileComp user_info_data={user_info_data} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="m-10 h-auto bg-white w-1/2 rounded-lg border shadow-md">
          <div className="my-2 text-3xl font-bold text-center">コメント</div>
          <hr />
          <div className="ml-4 mb-3">
            <div className=" mt-4 flex">
              <div className="w-10 h-10 rounded-full bg-slate-300"></div>
              <div className="flex items-center pl-1">
                @{user_info_data.user_name}
              </div>
            </div>
            <div className="pl-2 py-3 pr-6 text-center">{commentContent}</div>
            <div>
              <HeartTwoTone twoToneColor="#FFB545" className="text-2xl" /> 10
              <span className="ml-6">2021-11-1 11:40</span>
            </div>
          </div>
          <hr />
          <div className="ml-4 mb-3">
            <div className=" mt-4 flex">
              <div className="w-10 h-10 rounded-full bg-slate-300"></div>
              <div className="flex items-center pl-1">
                @{user_info_data.user_name}
              </div>
            </div>
          </div>
          <div className="w-full p-2 text-xl">
            <TextArea
              placeholder="この読書の目的は「知ること」ではなく、「行動すること」"
              autoSize={{ minRows: 3 }}
              bordered={false}
            />
          </div>
          <hr />
          <div className="flex justify-between px-4 py-2">
            <PictureFilled className="text-3xl" style={{ color: "#BCBCBC" }} />
            <button className="p-1 rounded-lg bg-[rgb(255,195,98)] hover:bg-[rgb(255,207,131)] drop-shadow-2xl">
              コメント
            </button>
          </div>
        </div>
        <div className="w-1/5 mt-10"></div>
      </div>
    </div>
  );
};

export default Article;

// APIでデータが取ってこれれば不要
// ------------------------------------------
// デモユーザー
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
  enginner_type: "FR",
};
