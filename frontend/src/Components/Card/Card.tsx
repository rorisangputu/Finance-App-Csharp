import type { JSX, SyntheticEvent } from "react";
import type { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
   id: string;
   searchResult: CompanySearch;
   onPortfolioCreate: (e:SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props): JSX.Element => {
  return (
    <div key={id} id={id} className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg">
        <img 
          src="https://static.thenounproject.com/png/2629071-200.png" 
          alt="company logo" 
        />
        <div className='flex flex-col justify-center items-center'>
            <h1 className="text-center">{searchResult.name}</h1>
            <h2>({searchResult.symbol})</h2>
            <p>{searchResult.currency}</p>
            <h3>{searchResult.exchangeFullName}</h3>
        </div>
        <p className='text-center'>
          {searchResult.stockExchange}
        </p>
        <AddPortfolio 
          onPortfolioCreate={onPortfolioCreate} 
          symbol={searchResult.symbol}
        />
    </div>
  )
}

export default Card