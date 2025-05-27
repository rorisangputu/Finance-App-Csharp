import React, { useState } from 'react'

type Props = {

}

const Search = (props: Props) => {
    const [search, setSearch] = useState<string>("");

    const onClick: React.ChangeEventHandler<HTMLInputElement> = (e) => {
       setSearch(e.target.value)
       console.log(e, search)
    }
  return (
    <div className='border py-5'>
        <h1>Search:</h1>
        <form action="">
            <input 
                type="text" 
                value={search} 
                onChange={(e) => onClick(e)} 
                className='border rounded-md p-2'
            />
            <button className='bg-blue-700 text-white p-2'>Submit</button>
        </form>
    </div>
  )
};

export default Search