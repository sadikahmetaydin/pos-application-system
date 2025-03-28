import { Button, Modal } from "antd"

const PrintInvoices = ({isModalOpen, setIsModalOpen}) => {

  return (
    <>
      <Modal title="Print Invoice" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)} width={800}>
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
              <div className="logo my-6">
                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
              </div>

              <div className="invoice-details">
                <div className="grid grid-cols-4 gap-12">
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Invoice Detail:</p>
                    <p>Unwrapped</p>
                    <p>Fake Street 123</p>
                    <p>San Javier</p>
                    <p>CA 1234</p>
                  </div>

                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Invoice:</p>
                    <p>The Boring Company</p>
                    <p>Tesla Street 007</p>
                    <p>Frisco</p>
                    <p>CA 0000</p>
                  </div>

                  <div className="text-md text-slate-500">
                    <div>
                      <p className="font-bold text-slate-700">Invoice Number:</p>
                      <p>00041</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-700">Date of Issue:</p>
                      <p>2025-03-29</p>
                    </div>
                  </div>

                  <div className="text-md text-slate-500">
                    <div>
                      <p className="font-bold text-slate-700">Terms:</p>
                      <p>0 Days</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-700">Due:</p>
                      <p>2025-04-04</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="invoice-table-area mt-8">
                <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th scope="col" className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden">Image</th>
                      <th scope="col" className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden">Title</th>
                      <th scope="col" className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden">Price</th>
                      <th scope="col" className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden">Amount</th>
                      <th scope="col" className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-t border-slate-200">
                      <td className="py-4">
                        <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" 
                          className="w-12 h-12 object-cover"
                        />
                      </td>

                      <td className="py-4">
                        <span>Apple</span>
                      </td>

                      <td className="py-4 text-center">
                        <span>5₺</span>
                      </td>

                      <td className="py-4 text-center">
                        <span>1</span>
                      </td>

                      <td className="py-4  text-end">
                        <span>5.00₺</span>
                      </td>
                    </tr>
                  </tbody>

                  <tfoot>
                    <tr>
                      <th className="text-right pt-6 pr-12" colSpan="4" scope="row">
                        <span className="font-normal text-slate-700">Subtotal</span>
                      </th>
                      <th className="text-right pt-6"scope="row">
                        <span className="font-normal text-slate-700">36₺</span>
                      </th>
                    </tr>

                    <tr>
                      <th className="text-right pt-3 pr-12" colSpan="4" scope="row">
                        <span className="font-normal text-slate-700">Tax</span>
                      </th>
                      <th className="text-right pt-3"scope="row">
                        <span className="font-normal text-red-600">4.88₺</span>
                      </th>
                    </tr>

                    <tr>
                      <th className="text-right pt-3 pr-12" colSpan="4" scope="row">
                        <span className="font-normal text-slate-700">Total</span>
                      </th>
                      <th className="text-right pt-3"scope="row">
                        <span className="font-normal text-slate-700">40.88₺</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>

                <div className="py-9">
                  <div className="border-t pt-9 border-slate-200">
                    <p className="text-sm font-light text-slate-700">
                      Payment terms are 14 days. Please note that according to the Late Payment of Unpackaged Debts Act 0000, 
                      freelancers are entitled to charge a late payment fee of 00.00 if debts remain unpaid after this period, 
                      at which point a new invoice will be presented in addition to this fee. If the revised invoice is not paid within 14 days, 
                      additional interest will be applied to the overdue account plus 8% statutory rate plus 0.5% Bank of England floor for a total of 8.5%.
                      Parties may not enter into agreements other than the provisions of the Law.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <div className="flex justify-end mt-4">
          <Button type="primary" size="large">Print</Button>
        </div>
      </Modal>
    </>
  )
}
export default PrintInvoices