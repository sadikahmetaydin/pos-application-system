import { useEffect, useState } from "react";
import Header from "../components/header/Header"
import { Table } from "antd";

const CustomersPage = () => {

const [invoiceItems, setInvoiceItems] = useState([]);

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
    title: 'Customer Phone Number',
    dataIndex: 'customerPhoneNumber',
    key: 'customerPhoneNumber',
  },
  {
    title: 'Transaction Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => {
      return <span>{text.substring(0, 10)}</span>
    }
  },
];

return (
  <>
    <Header />

    <div className="px-6">

      <h1 className="text-4xl font-bold text-center mb-4">Customers</h1>

      <Table dataSource={invoiceItems} columns={columns} bordered pagination={false} scroll={{x: 1000, y: 300}} />

    </div>
    </>
  )
}
export default CustomersPage