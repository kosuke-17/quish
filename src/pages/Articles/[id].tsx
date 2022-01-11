import Link from "next/link";
import React from "react";

const Article: React.FC = () => {
  return (
    <div className="flex justify-center bg-slate-300 h-screen">
      <div className="m-10 bg-gray-100 w-1/2 h-auto ">
        <p className="m-4 mt-10 mb-8 text-2xl font-bold bg-slate-400">
          TailwindCSSのチートシートを公開します。
        </p>
        <p className="px-10">
          プログラミングをしていると、「あれ、どうだったかな？」とリファレンスを確認する場面が結構出てきます。そんな時に、サクッと確認できるのが「チートシート」です。
        </p>
        <p className="px-10">投稿日: 12月7日</p>
        <p className="px-10">タグ: フロントエンド、CSS、tailwindCSS、初心者</p>
        <Link href="/">
          <a> 戻る</a>
        </Link>
      </div>
    </div>
  );
};

export default Article;
