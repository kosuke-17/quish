import Router from "next/router";
import { ArticleComp } from "../components/organisms";
import { Header, ArticleList } from "../templates";

const goToProfile = () => {
  Router.push("/profile");
};
const addArticle = () => {
  Router.push("/articleAdd");
};
const goToRegisterUser = () => {
  Router.push("/registerUser");
};
const goToLogin = () => {
  Router.push("/loginuser");
};

const Home: React.FC = () => {
  return (
    <div className="bg-orange-100 h-screen">
      <button onClick={goToProfile}>プロフィールへ</button>
      <button onClick={goToRegisterUser}>会員登録</button>
      <button onClick={goToLogin}>ログイン</button>
      <div>
        <Header />
      </div>
      <div className="mx-80 text-4xl font-semibold text-orange-500 bg-orange-100">
        Articles
      </div>
      <div>
        <ArticleList />
      </div>
    </div>
  );
};

export default Home;
