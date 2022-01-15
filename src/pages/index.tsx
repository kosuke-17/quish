import Router from "next/router";
import { ArticleList, Profile } from "../templates";

const goToProfile = () => {
  Router.push("/profile");
};
const addArticle = () => {
  Router.push("/articleAdd");
};

const Home: React.FC = () => {
  return (
    <div className="flex h-screen bg-orange-100	">
      <div className="w-2/6">
        <Profile />
      </div>
      <div className="w-4/6 overflow-y-auto">
        <ArticleList />
      </div>
      <button onClick={goToProfile}>プロフィールへ</button>
      <div className="w-2/6">
        <button
          type="button"
          onClick={addArticle}
          className="py-2 px-5 m-4 bg-white text-blue-500 border-2 border-blue-500 focus:ring-blue-500 focus:ring-offset-blue-400 w-11/12 transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:bg-blue-500 hover:text-white rounded-xl"
        >
          記事を投稿する
        </button>
        <button
          type="button"
          className="py-2 px-5 m-4 -mt-2 bg-white text-blue-500 border-2 border-blue-500 focus:ring-blue-500 focus:ring-offset-blue-400 w-11/12 transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:bg-blue-500 hover:text-white rounded-xl"
        >
          ブログを投稿する
        </button>
        <div className="h-3/4 m-2 bg-white rounded-lg border shadow-md"></div>
      </div>
    </div>
  );
};

export default Home;
