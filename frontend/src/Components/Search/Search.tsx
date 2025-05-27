import {  type ChangeEvent, type SyntheticEvent } from 'react'

interface searchProps {
    onClick: (e: SyntheticEvent) => void,
    handleChange:(e: ChangeEvent<HTMLInputElement>) => void,
    search: string
}
const Search = ({onClick, handleChange, search}:searchProps) => {
    
  return (
    <div className='border py-5'>
        <h1>Search:</h1>
        <form action="">
            <input 
                type="text" 
                value={search} 
                onChange={(e) => handleChange(e)} 
                className='border rounded-md p-2'
            />
            <button onClick={(e) => onClick(e)} className='bg-blue-700 text-white p-2'>Submit</button>
        </form>
    </div>
  )
};

export default Search