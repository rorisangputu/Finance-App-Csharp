import { testIncomeStatementData } from './TestData'
const data = testIncomeStatementData;


type Company = (typeof data)[0];
const configs = [
    {
        label: "Year",
        render: (company: Company) => company.acceptedDate
    },
    {
        label: "Cost of Revenue",
        render: (company: Company) => company.costOfRevenue
    }
]
const Table = () => {
  return (
    <div>Table</div>
  )
}

export default Table