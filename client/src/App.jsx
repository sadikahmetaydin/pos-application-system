import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import InvoicesPage from "./pages/InvoicesPage";
import CustomersPage from "./pages/CustomersPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProductPage from "./pages/ProductPage";
// import StatisticPage from "./pages/StatisticPage";
import "@ant-design/v5-patch-for-react-19";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteControl> <HomePage /> </RouteControl>} />
          <Route path="/cart" element={<RouteControl> <CartPage /> </RouteControl>} />
          <Route path="/invoices" element={<RouteControl> <InvoicesPage /> </RouteControl>} />
          <Route path="/customers" element={<RouteControl> <CustomersPage /> </RouteControl>} />
          {/* <Route path="/statistic" element={<StatisticPage />} /> */}
          <Route path="/products" element={<RouteControl> <ProductPage /> </RouteControl>} />
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

export const RouteControl = ({ children }) => {
  if (localStorage.getItem("posUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
