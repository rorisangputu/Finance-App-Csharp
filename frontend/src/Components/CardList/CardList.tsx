import type { SyntheticEvent } from 'react';
import type { CompanySearch } from '../../company';
import Card from '../Card/Card'
import {v4 as uuid} from 'uuid'

interface Props{
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList = ({searchResults, onPortfolioCreate}:Props) => {
  return (
    <div className='flex flex-col gap-2'>
        {searchResults.length > 0 ? (
            searchResults.map((res) => {
               return (
                    <Card 
                        key={uuid()} 
                        id={res.symbol} 
                        searchResult={res}
                        onPortfolioCreate={onPortfolioCreate}
                    />
                )
            })
        ) : (
            <h1>No Results</h1>
        ) }
    </div>
  )
}

export default CardList
