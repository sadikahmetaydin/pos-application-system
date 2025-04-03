import { Form, Modal, Table } from "antd"

const Edit = ({ isEditModalOpen, setIsEditModalOpen }) => {
  return (
    <Modal title="Category Transactions" footer={false} open={isEditModalOpen}  onCancel={() => setIsEditModalOpen(false)}>
      <Form>
        <Table bordered />
      </Form>
    </Modal>
  )
}
export default Edit