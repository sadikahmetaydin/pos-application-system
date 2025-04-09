import Header from "../components/header/Header"
import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import PrintInvoice from "../components/invoices/PrintInvoice";

const InvoicesPage = () => {
     
const [isModalOpen, setIsModalOpen] = useState(false);
const [invoiceItems, setInvoiceItems] = useState([]);
const [customer, setCustomer] = useState();

useEffect(() => {
  const getInvoices = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/invoices/get-all");
      const data = await res.json();
      setInvoiceItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  getInvoices();
}, [])

const columns = [
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: 'Phone Numbers',
    dataIndex: 'customerPhoneNumber',
    key: 'customerPhoneNumber',
  },
  {
    title: 'Creation Date',
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => {
      return <span>{text.substring(0, 10)}</span>
    }
  },
  {
    title: "Payment Method",
    dataIndex: "paymentMode",
    key: "paymentMode",
  },
  {
    title: "Total Price",
    dataIndex: "totalAmount",
    key: "totalAmount",
    render: (text) => {
      return <span>{text}₺</span>
    } 
  },
  {
    title: "Actions",
    dataIndex: "action",
    key: "action",
    render: (_, record) => {
      return <Button type="link" className="pl-0" 
      onClick={() => {
        setIsModalOpen(true);
        setCustomer(record);
      }}
      >Print</Button>
    } 
  },
];

return (
  <>
    <Header />

    <div className="px-6">

      <h1 className="text-4xl font-bold text-center mb-4">Invoices</h1>

      <Table dataSource={invoiceItems} columns={columns} bordered pagination={false} />
    </div>

    <PrintInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} customer={customer} />
    </>
  )
}
export default InvoicesPage