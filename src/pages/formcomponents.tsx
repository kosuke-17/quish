import { Input, Form, Button, Select, DatePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import moment from "moment";
const { Option } = Select;

const formcomponents = () => {
  const DATEFORMAT = "YYYY年M月";
  const NOWTIME = new Date();
  const langueges = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Vue",
    "Java",
    "Ruby",
    "PHP",
    "Phyton",
    "Nodejs",
    "docker",
    "flutter",
  ];
  const lang_children = [];
  for (const languege of langueges) {
    lang_children.push(
      <Option key={languege} value={languege}>
        {languege}
      </Option>
    );
  }
  return (
    <div className="h-screen">
      <div className="flex-none">フォームコンポーネント(削除用)</div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center bg-white pt-8 h-2/3 w-96 rounded-lg border shadow-md ">
          <Form className="w-5/6">
            <Form.Item
              name="orgname"
              rules={[
                { required: true, message: "会社・学習タイトルが空欄です" },
              ]}
            >
              <span className="p-2">
                <Input
                  className="focus:placeholder-gray-400"
                  placeholder="会社・学習タイトルを入力"
                  bordered={false}
                  size={"large"}
                />
              </span>
            </Form.Item>
            <Form.Item
              name="role"
              rules={[{ required: true, message: "使用技術が空欄です" }]}
            >
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="select one country"
                defaultValue={["HTML5"]}
                optionLabelProp="label"
              >
                {lang_children}
              </Select>
            </Form.Item>
            <div className="flex">
              <Form.Item
                name="startdate"
                rules={[{ required: true, message: "日付が未選択です" }]}
              >
                <DatePicker
                  size="large"
                  picker="month"
                  placeholder="2021年12月"
                  format={DATEFORMAT}
                />
                &nbsp; から &nbsp;
              </Form.Item>
              <Form.Item
                name="enddate"
                rules={[{ required: true, message: "日付が未選択です" }]}
              >
                <DatePicker
                  size="large"
                  picker="month"
                  defaultValue={moment(NOWTIME, DATEFORMAT)}
                  format={DATEFORMAT}
                />
                &nbsp; まで &nbsp;
              </Form.Item>
            </div>
            <Form.Item
              name="content"
              rules={[{ required: true, message: "業務・学習内容が空欄です" }]}
            >
              <span className="p-2 rounded-xl">
                <TextArea
                  placeholder="担当した業務、学習した内容"
                  autoSize={{ minRows: 3 }}
                  bordered={false}
                />
              </span>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 14, span: 16 }}>
              <div className="flex">
                <Button size="large" shape="round" htmlType="button">
                  戻る
                </Button>
                &nbsp;
                <Button size="large" shape="round" htmlType="submit">
                  保存
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 -z-40 bg-black" />
    </div>
  );
};

export default formcomponents;
