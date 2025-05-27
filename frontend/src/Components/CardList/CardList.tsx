import Card from '../Card/Card'


const CardList = () => {
  return (
    <div className='flex flex-col gap-2'>
        {companies.map((co) => (
            <Card key={co.name}
                companyName={co.name} 
                ticker={co.ticker} 
                price={co.price}
            />
        ))}
    </div>
  )
}

export default CardList

const companies = [
    {
        name: "APPLE",
        ticker: "AAPL",
        price: 150
    },
    {
        name: "MICROSOFT",
        ticker: "MSFT",
        price: 280
    },
    {
        name: "TESLA",
        ticker: "TSLA",
        price: 700
    }
]