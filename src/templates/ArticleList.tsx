import React from "react";

const ArticleList: React.FC = () => {
  return (
    <div className="bg-white border p-8 m-2 box-content rounded-lg shadow-md flex">
      <div>
        <div className="font-sans text-xs">
          @rakus111111が12月7日に投稿しました
        </div>
        <div className="font-bold text-xl no-underline hover:underline">
          TailwindCSSのチートシートを公開します。
        </div>
        <div className="m-1">
          <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
            フロントエンド
          </span>
          <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
            CSS
          </span>
          <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
            TailwindCSS
          </span>
          <span className="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg">
            初心者
          </span>
        </div>
      </div>
      <div className="bg-gray-100 box-content ml-8 h-30 w-1/5 p-8 text-center">
        NoImage
      </div>
    </div>
  );
};

export default ArticleList;
