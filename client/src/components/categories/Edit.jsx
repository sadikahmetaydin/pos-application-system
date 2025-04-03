import { Button, Form, Input, message, Modal, Table } from "antd"
import { useState } from "react";

const Edit = ({ isEditModalOpen, setIsEditModalOpen, categories, setCategories }) => {
  const [editingRow, setEditingRow] = useState({});

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/update-category", {
        method: "PUT",
        body: JSON.stringify({ ...values, categoryId: editingRow._id }),
        headers: { "Content-type": "application/json; charset=UTF-8"},
      });
      message.success("Category updated successfully.");
      setCategories(
        categories.map((item) => {
          if (item._id === editingRow._id) {
            return { ...item, title: values.title };
          };
          return item;
        })
      );
    } catch (error) {
      message.warning("Someting went wrong!")
      console.log(error);
    }
  }

  const columns = [
    {
      title: "Category Title",
      dataIndex: "title",
      render: (_,record) => {
        if (record._id === editingRow._id) {
          return (
            <Form.Item className="mb-0" name="title">
              <Input defaultValue={record.title} />
            </Form.Item>
          )
        } else {
          return <p>{record.title}</p>
        }
      }
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="">
            <Button type="link" onClick={() => setEditingRow(record)} className="pl-0">Edit</Button>
            <Button type="link" htmlType="submit" className="!text-gray-500">Save</Button>
            <Button type="link" danger>Delete</Button>
          </div>
        )
      }
    },
  ];

  return (
    <Modal title="Category Transactions" footer={false} open={isEditModalOpen}  onCancel={() => setIsEditModalOpen(false)}>
      <Form onFinish={onFinish}>
        <Table bordered dataSource={categories} columns={columns} rowKey={"_id"} />
      </Form>
    </Modal>
  )
}
export default Edit