import {  type ChangeEvent, type SyntheticEvent } from 'react'

interface searchProps {
    onSearchSubmit: (e: SyntheticEvent) => void,
    handleSearchChange:(e: ChangeEvent<HTMLInputElement>) => void,
    search: string
}
const Search = ({onSearchSubmit, handleSearchChange, search}:searchProps) => {
    
  return (
    <div className='border py-5'>
      <h1>Search:</h1>
      <form onSubmit={onSearchSubmit}>
          <input value={search} onChange={handleSearchChange} />
      </form>
    </div>
  )
};

export default Search