import React, { useState } from 'react'

type Props = {

}

const Search = (props: Props) => {
    const [search, setSearch] = useState<string>("");

    const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
       setSearch(e.target.value)
       console.log(e)
    }
  return (
    <div>
        <form action="">
            <input type="text" value={search} onChange={(e) => onClick(e)} />
        </form>
    </div>
  )
};

export default Search