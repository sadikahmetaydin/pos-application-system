import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
// import { BarChartOutlined} from '@ant-design/icons';
import { Badge, Input } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./index.css"

const Header = () => {

  const cart = useSelector((state) => state.cart);

  return (
    <div className="border-b mb-6">

      {/* Logo */}
      <header className="py-4 px-6 flex justify-between items-center gap-7">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>

        {/* Search Input */}
        <div className="header-search flex-1 flex justify-center">
         <Input className="rounded-full max-w-[800px]" size="large" placeholder="Search Product..." prefix={<SearchOutlined />} />
        </div>

        {/* Menu Links */}
        <div className="menu-links">
          <Link to={"/"} className="menu-link">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </Link>

          <Badge count={cart.cartItems.length} offset={[0, 0]} className="md:flex hidden">
            <Link to={"/cart"} className="menu-link">
                <ShoppingCartOutlined className="md:text-2xl text-xl" />
                <span className="md:text-xs text-[10px]">Cart</span>
            </Link>
          </Badge>

          <Link to={"/invoices"} className="menu-link">
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Invoice</span>
          </Link>

          <Link to={"/customers"} className="menu-link">
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Customers</span>
          </Link>

          {/* <Link to={"/statistic"} className="menu-link">
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Statistic</span>
          </Link> */}

          <Link to={"/"} className="menu-link">
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Logout</span>
          </Link>
        </div>

        {/* For Responsive Screen */}
        <Badge count={cart.cartItems.length} offset={[0, 0]} className="md:hidden flex">
            <Link to={"/cart"} className="menu-link">
                <ShoppingCartOutlined className="text-2xl" />
                <span className="md:text-xs text-[10px]">Cart</span>
            </Link>
          </Badge>

      </header>
    </div>
  );
};
export default Header;
