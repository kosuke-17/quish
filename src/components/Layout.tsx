import { Layout } from "antd";
import HeaderComp from "./organisms/HeaderComp";

const { Header, Footer } = Layout;

// レイアウト全体のスタイル
const LayoutComp: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header className="bg-blue-500 w-full h-16 relative">
        <HeaderComp />
      </Header>
      <Layout>{children}</Layout>
      <Footer className="bg-blue-500 h-12 text-center">
        <div className="text-white p-2"> © 2011-2021 Quish Inc.</div>
      </Footer>
    </Layout>
  );
};

export default LayoutComp;
