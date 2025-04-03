import { Button, Form, Input, message, Modal } from "antd";

const Add = ({isAddModalOpen, setIsAddModalOpen, categories, setCategories}) => {

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
      setCategories([...categories, {_id: Math.random(), title: values.title}]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
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
  )
}
export default Add