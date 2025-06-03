import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { formatLargeNonMonetaryNumber } from '../../Helpers/NumberFormatting'
import type { CompanyKeyMetrics } from '../../company'
import { testIncomeStatementData } from '../../Components/Table/testData';

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCapTTM),
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignGuide = () => {
  return (
    <>
        <h1 className='font-medium text-xl'>FinShark Design Page</h1>
        <h2 className='py-3 font-light'>
            This is FinShark's design page. This is where we will
            house various design aspects of the app.
        </h2>
        <RatioList data={testIncomeStatementData} config={tableConfig}/>
        <Table/>
        <h3>
            Table - Table takes in a configuration object and company data as params.
            Use the config to style your table
        </h3>
    </>
  )
}

export default DesignGuide