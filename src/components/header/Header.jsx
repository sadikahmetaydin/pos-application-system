import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, UserOutlined, BarChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Badge, Input } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
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
        <div className="menu-links flex justify-between items-center gap-9 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-2">
          <Link to={"/"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </Link>

          <Badge count={5} offset={[0, 6]} className="md:flex hidden">
            <Link to={"/cart"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
                <ShoppingCartOutlined className="md:text-2xl text-xl" />
                <span className="md:text-xs text-[10px]">Cart</span>
            </Link>
          </Badge>

          <Link to={"/invoices"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Invoice</span>
          </Link>

          <Link to={"/"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Customers</span>
          </Link>

          <Link to={"/"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Statistic</span>
          </Link>

          <Link to={"/"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Logout</span>
          </Link>
        </div>

        {/* For Responsive Screen */}
        <Badge count={5} offset={[0, 6]} className="md:hidden flex">
            <Link to={"/cart"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
                <ShoppingCartOutlined className="text-2xl" />
                <span className="md:text-xs text-[10px]">Cart</span>
            </Link>
          </Badge>

      </header>
    </div>
  );
};
export default Header;
