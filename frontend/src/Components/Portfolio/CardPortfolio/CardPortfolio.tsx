
interface Props {
    portfolioValue: string
}

const CardPortfolio = ({portfolioValue}: Props) => {
  return (
    <div className="flex gap-2 justify-between">
        <h4>{portfolioValue}</h4>
        <button className="bg-red-700 text-white px-1">X</button>
    </div>
  )
}

export default CardPortfolio