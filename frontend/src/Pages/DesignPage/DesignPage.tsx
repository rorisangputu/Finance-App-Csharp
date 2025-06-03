import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'


const DesignPage = () => {
  return (
    <>
        <h1 className='font-medium text-xl'>FinShark Design Page</h1>
        <h2 className='py-3 font-light'>
            This is FinShark's design page. This is where we will
            house various design aspects of the app.
        </h2>
        <RatioList/>
        <Table/>
        <h3>
            Table - Table takes in a configuration object and company data as params.
            Use the config to style your table
        </h3>
    </>
  )
}

export default DesignPage