import { Button, Input, message, Popconfirm, Space, Table } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import Header from "../components/header/Header";
import { Card } from 'antd';
import { useRef, useState } from "react";
import CreateInvoice from "../components/cart/CreateInvoice";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrase, deleteCart } from "../redux/cartSlice";
import Highlighter from 'react-highlight-words';

const CartPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
      ...getColumnSearchProps("title"),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      ...getColumnSearchProps("category"),
    },
    {
      title: 'Product Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => {
        return (
          <span>{text.toFixed(2)}₺</span>
        )
      },
      sorter: (a, b) => a.price - b.price, 
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
        <Table dataSource={cart.cartItems} columns={columns} bordered pagination={false} scroll={{x: 1200, y: 300}} />

        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{cart.total > 0 ? (cart.total).toFixed(2) : 0}₺</span>
            </div>

            <div className="flex justify-between my-2">
              <span>TAX %{cart.tax}</span>
              <span className="text-red-600">{(cart.total * cart.tax) / 100 > 0 ? "+" + ((cart.total * cart.tax) / 100).toFixed(2) : 0}₺</span>
            </div>

            <div className="flex justify-between">
              <b>Total</b>
              <b>{cart.total + (cart.total * cart.tax) / 100 > 0 ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2) : 0}₺</b>
            </div>

            <Button className="mt-4 w-full" type="primary" size="large" onClick={() => setIsModalOpen(true)}
              disabled={cart.cartItems.length === 0}
              >Create Order</Button>
          </Card>
        </div>
      </div>

      <CreateInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}
export default CartPage;