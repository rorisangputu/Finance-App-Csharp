import { type SyntheticEvent } from 'react'

interface Props {
    onPortfolioCreate: (e:SyntheticEvent) => void;
    symbol: string;
}

function AddPortfolio({onPortfolioCreate, symbol}: Props) {
  return (
    <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol}/>
        <button type='submit' className='py-1 px-3 bg-gray-500 text-white'>Add To Portfolio</button>
    </form>
  )
}

export default AddPortfolio