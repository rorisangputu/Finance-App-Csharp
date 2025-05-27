import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
}

const ListPortfolio = ({portfolioValues}: Props) => {
  return (
    <div className='flex flex-col p-2 my-2 border-gray-400 border rounded-md'>
        <h3>My Portfolio</h3>
        <ul>
            {portfolioValues &&
                portfolioValues.map((value) => {
                    return <CardPortfolio portfolioValue={value}/>
                })
            }

        </ul>
    </div>
  )
}

export default ListPortfolio