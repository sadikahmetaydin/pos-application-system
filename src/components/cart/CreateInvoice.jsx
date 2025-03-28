import { Button, Card, Form, Input, Modal, Select } from "antd"

const CreateInvoice = ({isModalOpen, setIsModalOpen}) => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Modal title="Create Invoice" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)}>
        <Form layout={"vertical"}  onFinish={onFinish}>
          <Form.Item label="Customer Name" name={"Customer Name"} rules={[{required: true}]}>
            <Input placeholder="Customer Name" />
          </Form.Item>

          <Form.Item label="Phone" name={"Phone Number"} rules={[{required: true}]}>
            <Input placeholder="Phone Number" maxLength={11} />
          </Form.Item>

          <Form.Item label="Payment Method" name={"Payment Method"} rules={[{required: true}]}>
            <Select placeholder="Choose Payment Method">
              <Select.Option value="Cash">Cash</Select.Option>
              <Select.Option value="Credit Card">Credit Card</Select.Option>
            </Select>
          </Form.Item>

          <Card>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>549.00₺</span>
            </div>

            <div className="flex justify-between my-2">
              <span>TAX Total %8</span>
              <span className="text-red-600">+43.92₺</span>
            </div>

            <div className="flex justify-between">
              <b>Total</b>
              <b>592.92₺</b>
            </div>

            <div className="flex justify-end">
             <Button className="mt-4" type="primary" onClick={() => setIsModalOpen(true)} htmlType="submit">Create Order</Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </>
  )
}
export default CreateInvoice