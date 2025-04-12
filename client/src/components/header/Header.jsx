import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
// import { BarChartOutlined} from '@ant-design/icons';
import { Badge, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./index.css"

const Header = ({ setSearch }) => {

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const logOut = () => {
    if (window.confirm("Are you sure you want to exix?")) {
      localStorage.removeItem("posUser");
      navigate("/login");
      message.success("The exit process is successful.");
    }
  }

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
         <Input className="rounded-full max-w-[800px]" onChange={(e) => setSearch(e.target.value.toLowerCase())} size="large" placeholder="Search Product..." prefix={<SearchOutlined />} />
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

          <div onClick={logOut}>
            <Link className="menu-link">
              <LogoutOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Logout</span>
            </Link>
          </div>
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
