import  { type SyntheticEvent } from 'react'

type Props = {
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const DeletePortfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
  return (
    <div>
        <form onSubmit={onPortfolioDelete}>
            <input hidden={true} value={portfolioValue} />
            <button type='submit'>x</button>
        </form>
    </div>
  )
}

export default DeletePortfolio