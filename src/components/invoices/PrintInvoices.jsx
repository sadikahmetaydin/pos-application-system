import { Button, Card, Form, Input, Modal, Select } from "antd"

const PrintInvoices = ({isModalOpen, setIsModalOpen}) => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Modal title="Print Invoice" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)}>
        Invoices
      </Modal>
    </>
  )
}
export default PrintInvoices