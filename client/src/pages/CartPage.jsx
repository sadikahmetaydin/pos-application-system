import { Button, message, Popconfirm, Table } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Header from "../components/header/Header";
import { Card } from 'antd';
import { useState } from "react";
import CreateInvoice from "../components/cart/CreateInvoice";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrase, deleteCart } from "../redux/cartSlice";

const CartPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Product Image',
      dataIndex: 'img',
      key: 'img',
      width: "150px",
      render: (text) => {
        return (<img src={text} alt="" className="w-full h-20 object-cover" />)
      }
    },
    {
      title: 'Product Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Product Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => {
        return (
          <span>{text.toFixed(2)}₺</span>
        )
      }
    },
    {
      title: 'Product Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text, record) => {
        return (
          <div className="flex items-center">
                <Button className="w-full flex items-center justify-center !rounded-full" type="primary" size="small" icon={<PlusCircleOutlined />} onClick={() => dispatch(increase(record))} />
                <span className="font-bold w-6 inline-block text-center">{record.quantity}</span>
                <Button className="w-full flex items-center justify-center !rounded-full" type="primary" size="small" icon={<MinusCircleOutlined />} 
                  onClick={() => {
                    if (record.quantity === 1) {
                      if (window.confirm("Are you sure ?")) {
                        dispatch(decrase(record));
                        message.success("Product deleted in the cart.");
                      }
                    }

                    if (record.quantity > 1) {
                      dispatch(decrase(record));
                    }
                  }} />
              </div>
        )
      }
    },
    {
      title: 'Total Price',
      render: (text, record) => {
        return (
          <span>{(record.quantity * record.price).toFixed(2)}₺</span>
        )
      }
    },
    {
      title: 'Actions',
      render: (_, record) => {
        return (
          <Popconfirm title="Are you sure to delete?" onText="Yes" cancelText="No"
          onConfirm={() => {
            dispatch(deleteCart(record));
            message.success("Product deleted in the cart.");
          }}>
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        )
      }
    },
  ];

  return (
    <>
      <Header />

      <div className="px-6">
        <Table dataSource={cart.cartItems} columns={columns} bordered pagination={false} />

        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>549.00₺</span>
            </div>

            <div className="flex justify-between my-2">
              <span>TAX Total %8</span>
              <span className="text-red-600">+43.92₺</span>
            </div>

            <div className="flex justify-between">
              <b>Total</b>
              <b>592.92₺</b>
            </div>

            <Button className="mt-4 w-full" type="primary" size="large" onClick={() => setIsModalOpen(true)}>Create Order</Button>
          </Card>
        </div>
      </div>

      <CreateInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}
export default CartPage;