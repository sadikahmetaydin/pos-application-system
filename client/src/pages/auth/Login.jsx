import { Button, Carousel, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/auth/AuthCarousel";

const Login = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            
            <Form.Item label="E-mail" name={"email"} rules={[{required: true, message: "Please Enter E-mail!"}]}>
              <Input />
            </Form.Item>

            <Form.Item label="Password" name={"password"} rules={[{required: true, message: "Please Enter Password!"}]}>
              <Input.Password />
            </Form.Item>

            <Form.Item name={"remember"}>
              <div className="flex justify-between items-center">
                <Checkbox>Remember me</Checkbox>
                <Link className="text-blue-600">Forgot Password?</Link>
              </div>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full" size="large">Login</Button>
            </Form.Item>
          </Form>

          <div className="flex justify-center absolute bottom-10 left-0 right-0">
            Do not you have an account? &nbsp; <Link to="/register" className="text-blue-600">Signup Now</Link>
          </div>
        </div>
        
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Carousel autoplay className="h-full px-6">
                <AuthCarousel img="/images/responsive.svg" title="Responsive" desc="Compatibility With All Device Sizes" />
                <AuthCarousel img="/images/statistic.svg" title="Statistics" desc="Expanded Statistics" />
                <AuthCarousel img="/images/customer.svg" title="Customer Satisfaction" desc="Satisfied Customers at the End of the Experience" />
                <AuthCarousel img="/images/admin.svg" title="Management Panel" desc="One Stop Management" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;