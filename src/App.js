import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <Header />

      {/* Home Page */}
      <div className="home px-6 flex justify-between gap-10">
        {/* Categories */}
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)] pb-64">
          <Categories />
        </div>
        {/* Products */}
        <div className="products flex-[8]">
          <Products />
        </div>
        {/* Cart Totals */}
        <div className="">
          <div>cart totals</div>
        </div>
      </div>
    </>
  );
}

export default App;
