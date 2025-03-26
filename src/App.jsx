import CartTotals from "./components/cart/CartTotals";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <Header />

      {/* Home Page */}
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
        {/* Categories */}
        <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
          <Categories />
        </div>
        {/* Products */}
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
          <Products />
        </div>
        {/* Cart Totals */}
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </>
  );
}

export default App;
