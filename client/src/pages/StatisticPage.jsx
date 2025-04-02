import Header from "../components/header/Header"
import StatisticCard from "../components/statistics/StatisticCard"

const StatisticPage = () => {
return (
  <>
    <Header />

    <div className="px-6">
      <h1 className="text-4xl font-bold text-center mb-4">Statistics</h1>

      <div className="statistic-section">
        <h2 className="text-xl">Welcome <span className="text-green-700 font-bold text-xl">Admin</span></h2>

        <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
          <StatisticCard title={"Total Customer"} amount={"10"} img={"images/user.png"} />
          <StatisticCard title={"Total Earnings"} amount={"660.96 ₺"} img={"images/money.png"} />
          <StatisticCard title={"Total Sales"} amount={"6"} img={"images/sale.png"} />
          <StatisticCard title={"Total Product"} amount={"36"} img={"images/product.png"} />
        </div>
      </div>
    </div>
    </>
  )
}
export default StatisticPage