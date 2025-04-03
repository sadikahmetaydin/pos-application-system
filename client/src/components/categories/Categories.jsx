import { useState } from "react";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal } from "antd";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      });
      message.success("Category added successfully.");
      form.resetFields();
      setCategories([...categories, values]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ul className="flex md:flex-col gap-4 text-center">
     {
      categories.map((item) => (
        <li className="category-item" key={item._id}>
          <span>{item.title}</span>
        </li>
      ))
     }

      <li className="category-item !bg-purple-800 hover:opacity-90" onClick={() => setIsAddModalOpen(true)}>
        <PlusOutlined className="md:text-2xl" />
      </li>

      <Modal title="Add New Category" open={isAddModalOpen} onCancel={() => setIsAddModalOpen(false)} footer={false}>
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item name="title" label="Add Category" rules={[{ required: true, message: "Please enter category name!" }]}>
            <Input />
          </Form.Item>

          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">Create</Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  );
};
export default Categories;
