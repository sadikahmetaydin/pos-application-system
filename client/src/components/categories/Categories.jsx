import { useState } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import Add from "./Add";
import Edit from "./Edit";
import "./style.css";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  return (
    <ul className="flex md:flex-col gap-4 text-center">
     {
      categories.map((item) => (
        <li className="category-item" key={item._id}>
          <span>{item.title}</span>
        </li>
      ))
     }

      <li className="category-item !bg-purple-800 hover:opacity-90" onClick={() => setIsAddModalOpen(true)}>
        <PlusOutlined className="md:text-2xl" />
      </li>

      <li className="category-item !bg-orange-800 hover:opacity-90" onClick={() => setIsEditModalOpen(true)}>
        <EditOutlined className="md:text-2xl" />
      </li>

     <Add isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} categories={categories} setCategories={setCategories} />
     <Edit isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} categories={categories} setCategories={setCategories} />
    </ul>
  );
};
export default Categories;
