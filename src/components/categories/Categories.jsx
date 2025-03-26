const Categories = () => {
  return (
    <ul className="flex md:flex-col gap-4 text-center">
      <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all ease-in rounded-[7px] min-w-[145px]">
        <span>All</span>
      </li>

      <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all ease-in rounded-[7px] min-w-[145px]">
        <span>Foods</span>
      </li>

      <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all ease-in rounded-[7px] min-w-[145px]">
        <span>Drinks</span>
      </li>

      <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all ease-in rounded-[7px] min-w-[145px]">
        <span>Fruits</span>
      </li>

      <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all ease-in rounded-[7px] min-w-[145px]">
        <span>Vegetables</span>
      </li>

      <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all ease-in rounded-[7px] min-w-[145px]">
        <span>Clothes</span>
      </li>

      <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all ease-in rounded-[7px] min-w-[145px]">
        <span>Electronics</span>
      </li>
    </ul>
  )
}
export default Categories