import Header from "../components/header/Header"
import { Button, Input, Space, Spin, Table } from "antd";
import { useEffect, useRef, useState } from "react";
import PrintInvoice from "../components/invoices/PrintInvoice";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from 'react-highlight-words';

const InvoicesPage = () => {
     
const [isModalOpen, setIsModalOpen] = useState(false);
const [invoiceItems, setInvoiceItems] = useState();
const [customer, setCustomer] = useState();
const [searchText, setSearchText] = useState("");
const [searchedColumn, setSearchedColumn] = useState("");
const searchInput = useRef(null);

const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  setSearchText(selectedKeys[0]);
  setSearchedColumn(dataIndex);
};

const handleReset = (clearFilters) => {
  clearFilters();
  setSearchText("");
};

const getColumnSearchProps = dataIndex => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
    <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            confirm({ closeDropdown: false });
            setSearchText(selectedKeys[0]);
            setSearchedColumn(dataIndex);
          }}
        >
          Filter
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            close();
          }}
        >
          close
        </Button>
      </Space>
    </div>
  ),
  filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
  onFilter: (value, record) =>
    record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  filterDropdownProps: {
    onOpenChange(open) {
      if (open) {
        setTimeout(() => {
          var _a;
          return (_a = searchInput.current) === null || _a === void 0 ? void 0 : _a.select();
        }, 100);
      }
    },
  },
  render: text =>
    searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    ),
});

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
    ...getColumnSearchProps("customerName"),
  },
  {
    title: 'Phone Numbers',
    dataIndex: 'customerPhoneNumber',
    key: 'customerPhoneNumber',
    ...getColumnSearchProps("customerPhoneNumber"),
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
    ...getColumnSearchProps("paymentMode"),
  },
  {
    title: "Total Price",
    dataIndex: "totalAmount",
    key: "totalAmount",
    render: (text) => {
      return <span>{text}₺</span>
    },
    sorter: (a, b) => a.totalAmount - b.totalAmount,
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

    <h1 className="text-4xl font-bold text-center mb-4">Invoices</h1>
    {
      invoiceItems ? (
        <div className="px-6">
          <Table dataSource={invoiceItems} columns={columns} bordered pagination={false} scroll={{x: 1000, y: 300}} />
        </div>
      ) : <Spin size="large" className="absolute h-screen w-screen top-1/2 flex justify-center" />
    }

    <PrintInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} customer={customer} />
  </>
  )
}
export default InvoicesPage