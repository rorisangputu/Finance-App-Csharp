import {  type ChangeEvent, type SyntheticEvent } from 'react'

interface searchProps {
    onSearchSubmit: (e: SyntheticEvent) => void,
    handleSearchChange:(e: ChangeEvent<HTMLInputElement>) => void,
    search: string
}
const Search = ({onSearchSubmit, handleSearchChange, search}:searchProps) => {
    
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-blue-800 rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3  rounded-lg bg-white  focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>
  )
};

export default Search