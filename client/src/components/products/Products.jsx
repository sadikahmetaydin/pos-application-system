import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import Add from "./Add";
import { useNavigate } from "react-router-dom";

const Products = ({ categories, filtered, products, setProducts }) => {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate();

 

  return (
    <div className="products-wrapper grid grid-cols-card gap-4">
      {
        filtered.map((item) => (
         <ProductItem item={item} key={item._id} />
        ))
      }

      <div className="product-item border hover:shadow-lg cursor-pointer transition-all rounded-md select-none bg-purple-800 flex justify-center items-center hover:opacity-90 min-h-[180px]"
      onClick={() => setIsAddModalOpen(true)}>
        <PlusOutlined className="text-white md:text-2xl" />
      </div>

      <div className="product-item border hover:shadow-lg cursor-pointer transition-all rounded-md select-none bg-orange-800 flex justify-center items-center hover:opacity-90 min-h-[180px]"
        onClick={() => navigate("/products")}>
        <EditOutlined className="text-white md:text-2xl" />
      </div>

      <Add isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} categories={categories} products={products} setProducts={setProducts} />
    </div>
  )
}

export default Products;