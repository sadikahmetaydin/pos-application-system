import { Button, Form, message, Table } from "antd"
import { useEffect, useState } from "react";

const Edit = ({ isEditModalOpen, setIsEditModalOpen, categories, setCategories }) => {

  const [products, setProducts] = useState([]);

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

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/update-category", {
        method: "PUT",
        body: JSON.stringify({ ...values }),
        headers: { "Content-type": "application/json; charset=UTF-8"},
      });
      message.success("Category updated successfully.");
      setCategories(
        categories.map((item) => {
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
        return <img src={record.img} className="w-full h-20 object-cover" />
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
            <Button type="link" className="pl-0">Edit</Button>
            <Button type="link" htmlType="submit" className="!text-gray-500">Save</Button>
            <Button type="link" danger onClick={() => deleteCategory(record._id)}>Delete</Button>
          </div>
        )
      }
    },
  ];

  return (
      <Form onFinish={onFinish}>
        <Table bordered dataSource={products} columns={columns} rowKey={"_id"} scroll={{ x: 1000, y: 600 }} />
      </Form>
  )
}
export default Edit;