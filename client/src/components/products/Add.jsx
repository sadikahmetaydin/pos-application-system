import { Button, Form, Input, message, Modal, Select } from "antd";

const Add = ({isAddModalOpen, setIsAddModalOpen, categories, products, setProducts}) => {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/add-product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      });
      message.success("Product added successfully.");
      form.resetFields();
      setProducts([...products, { ...values, _id: Math.random(), price: Number(values.price)}]);
      setIsAddModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal title="Add New Product" open={isAddModalOpen} onCancel={() => setIsAddModalOpen(false)} footer={false}>
    <Form layout="vertical" onFinish={onFinish} form={form}>
      <Form.Item name="title" label="Product Name" rules={[{ required: true, message: "Please enter product name!" }]}>
        <Input placeholder="Product name" />
      </Form.Item>

      <Form.Item name="img" label="Product Image" rules={[{ required: true, message: "Please enter product link!" }]}>
        <Input placeholder="Product image link"/>
      </Form.Item>

      <Form.Item name="price" label="Product Price" rules={[{ required: true, message: "Please enter product price!" }]}>
        <Input placeholder="Product price" />
      </Form.Item>

      <Form.Item name="category" label="Product Category" rules={[{ required: true, message: "Please choose product category!" }]}>
        <Select
          showSearch
          optionFilterProp="Choose Category"
          filterSort={(optionA, optionB) => {
            var _a, _b;
            return (
              (_a = optionA === null || optionA === void 0 ? void 0 : optionA.title) !== null &&
              _a !== void 0
                ? _a
                : ''
            )
              .toLowerCase()
              .localeCompare(
                ((_b = optionB === null || optionB === void 0 ? void 0 : optionB.title) !== null &&
                _b !== void 0
                  ? _b
                  : ''
                ).toLowerCase(),
              );
          }}
          options={categories}
        />
      </Form.Item>

      <Form.Item className="flex justify-end mb-0">
        <Button type="primary" htmlType="submit">Create</Button>
      </Form.Item>
    </Form>
  </Modal>
  )
}
export default Add