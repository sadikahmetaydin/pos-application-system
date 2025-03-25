import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />

      {/* Home Page */}
      <div className="home px-6 flex justify-between">
        {/* Categories */}
        <div className="categories">
          <div>categories</div>
        </div>
        {/* Products */}
        <div className="products">
          <div className="">products</div>
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
