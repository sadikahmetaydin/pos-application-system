import { Button, message } from "antd";
import { ClearOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart, increase, decrase, reset } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartTotals = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-white text-center py-4 font-bold tracking-wide">Products in Cart</h2>

      <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        {
          cart.cartItems.length > 0 ? cart.cartItems.map((item) => (
            <li className="cart-item flex justify-between" key={item._id}>
              <div className="flex items-center">
                <img src={item.img} alt="" className="w-16 h-16 object-cover pt-2 cursor-pointer" 
                  onClick={() => {
                    dispatch(deleteCart(item));
                    message.success("Product deleted in the cart.");
                  }} />

                <div className="flex flex-col ml-2">
                  <b>{item.title}</b>
                  <span>{item.price}₺ x {item.quantity}</span>
                </div>
              </div>

              <div className="flex items-center">
                <Button className="w-full flex items-center justify-center !rounded-full" type="primary" size="small" icon={<PlusCircleOutlined />} onClick={() => dispatch(increase(item))} />
                <span className="font-bold w-6 inline-block text-center">{item.quantity}</span>
                <Button className="w-full flex items-center justify-center !rounded-full" type="primary" size="small" icon={<MinusCircleOutlined />} 
                  onClick={() => {
                    if (item.quantity === 1) {
                      if (window.confirm("Are you sure ?")) {
                        dispatch(decrase(item));
                        message.success("Product deleted in the cart.");
                      }
                    }

                    if (item.quantity > 1) {
                      dispatch(decrase(item));
                    }
                  }} />
              </div>
          </li>
          )).reverse() : "Your cart is empty..."
        }
      </ul>

      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Subtotal</b>
            <span>{cart.total > 0 ? (cart.total).toFixed(2) : 0}₺</span>
          </div>

          <div className="flex justify-between p-2">
            <b>TAX %{cart.tax}</b>
            <span className="text-red-700">{ (cart.total * cart.tax) / 100 > 0 ? "+" + ((cart.total * cart.tax) / 100).toFixed(2) : 0}₺</span>
          </div>
        </div>
      </div>

      
      <div className="border-b mt-4">
        <div className="flex justify-between p-2">
          <b className="text-xl text-green-500">General Total</b>
          <span className="text-xl">{cart.total + (cart.total * cart.tax) / 100 > 0 ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2) : 0}₺</span>
        </div>
      </div>

      <div className="py-4 px-2">
        <Button className="w-full" type="primary" size="large"
        disabled={cart.cartItems.length === 0}
        onClick={() => navigate("/cart")}
        >Create Order</Button>
        
        <Button className="w-full mt-2 flex items-center justify-center" type="primary" size="large" icon={<ClearOutlined />} danger
         disabled={cart.cartItems.length === 0}
         onClick={() => {
          if (window.confirm("Are you sure?")) {
            dispatch(reset());
            message.success("Cart is success cleaned.")
          }
         }} >Clean</Button>
      </div>
    </div>
  )
}
export default CartTotals