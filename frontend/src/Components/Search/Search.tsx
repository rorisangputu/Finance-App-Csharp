import React, { useState, type SyntheticEvent } from 'react'


const Search = () => {
    const [search, setSearch] = useState<string>("");

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
       setSearch(e.target.value)
       //console.log(e, search)
    }
    const onClick = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(e, search)
    }
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