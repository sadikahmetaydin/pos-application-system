import { Button } from "antd";
import { ClearOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-white text-center py-4 font-bold tracking-wide">Products in Cart</h2>

      <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" 
            className="w-16 h-16 object-cover pt-2"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12₺ x 2</span>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <Button className="w-full flex items-center justify-center !rounded-full" type="primary" size="small" icon={<PlusCircleOutlined />} />
            <span>1</span>
            <Button className="w-full flex items-center justify-center !rounded-full" type="primary" size="small" icon={<MinusCircleOutlined />} />
          </div>
        </li>

        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" 
            className="w-16 h-16 object-cover pt-2"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12₺ x 2</span>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <Button className="w-full flex items-center justify-center !rounded-full" type="primary" size="small" icon={<PlusCircleOutlined />} />
            <span>1</span>
            <Button className="w-full flex items-center justify-center !rounded-full" type="primary" size="small" icon={<MinusCircleOutlined />} />
          </div>
        </li>

        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" 
            className="w-16 h-16 object-cover pt-2"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12₺ x 2</span>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <Button className="w-full flex items-center justify-center !rounded-full" type="primary" size="small" icon={<PlusCircleOutlined />} />
            <span>1</span>
            <Button className="w-full flex items-center justify-center !rounded-full" type="primary" size="small" icon={<MinusCircleOutlined />} />
          </div>
        </li>
      </ul>

      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Subtotal</b>
            <span>99₺</span>
          </div>

          <div className="flex justify-between p-2">
            <b>TAX %8</b>
            <span className="text-red-700">+7.92₺</span>
          </div>
        </div>
      </div>

      
      <div className="border-b mt-4">
        <div className="flex justify-between p-2">
          <b className="text-xl text-green-500">General Total</b>
          <span className="text-xl">99₺</span>
        </div>
      </div>

      <div className="py-4 px-2">
        <Button className="w-full" type="primary" size="large">Create Order</Button>
        <Button className="w-full mt-2 flex items-center justify-center" type="primary" size="large" icon={<ClearOutlined />} danger>Clean</Button>
      </div>
    </div>
  )
}
export default CartTotals