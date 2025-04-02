import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import InvoicesPage from "./pages/InvoicesPage";
import CustomersPage from "./pages/CustomersPage";
import Register from "./pages/auth/Register";
// import StatisticPage from "./pages/StatisticPage";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        {/* <Route path="/statistic" element={<StatisticPage />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
