import { Button, Form, Input, message, Modal, Select, Table } from "antd"
import { useEffect, useState } from "react";

const Edit = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();
        data && setCategories(data.map((item) => {return {...item, value: item.title}}));
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, [])

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({ ...values, productId: editingItem._id }),
        headers: { "Content-type": "application/json; charset=UTF-8"},
      });
      message.success("Product updated successfully.");
      setProducts(
        products.map((item) => {
          if (item._id === editingItem._id) {
            return values;
          }
          return item;
        })
      );
    } catch (error) {
      message.error("Someting went wrong!")
      console.log(error);
    }
  };

  const deleteCategory = (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        fetch("http://localhost:5000/api/categories/delete-category", {
          method: "DELETE",
          body: JSON.stringify({ categoryId: id }),
          headers: { "Content-type": "application/json; charset=UTF-8"},
        });
        message.success("Category deleted successfully.");
        setCategories(categories.filter((item) => item._id !== id));
      } catch (error) {
        message.error("Something went wrong!");
        console.log(error);
      }
    }
  }

  const columns = [
    {
      title: "Product Name",
      dataIndex: "title",
      width: "8%",
      render: (_,record) => {
        return <p>{record.title}</p>
      }
    },
    {
      title: "Product Image",
      dataIndex: "img",
      width: "4%",
      render: (_,record) => {
        return <img src={record.img} className="w-full h-20 object-cover" alt="" />
      }
    },
    {
      title: "Product Price",
      dataIndex: "price",
      width: "8%",
    },
    {
      title: "Category",
      dataIndex: "category",
      width: "8%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (_, record) => {
        return (
          <div className="">
            <Button type="link" className="pl-0" onClick={() => {setIsEditModalOpen(true); setEditingItem(record);}}>Edit</Button>
            <Button type="link" danger onClick={() => deleteCategory(record._id)}>Delete</Button>
          </div>
        )
      }
    },
  ];

  return (
    <>
      <Table bordered dataSource={products} columns={columns} rowKey={"_id"} scroll={{ x: 1000, y: 600 }} />

      <Modal title="Add New Product" open={isEditModalOpen} onCancel={() => setIsEditModalOpen(false)} footer={false}>
        <Form layout="vertical" onFinish={onFinish} form={form} initialValues={editingItem}>
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
          <Button type="primary" htmlType="submit">Update</Button>
        </Form.Item>
      </Form>
  </Modal>
    </>
  )
}
export default Edit;