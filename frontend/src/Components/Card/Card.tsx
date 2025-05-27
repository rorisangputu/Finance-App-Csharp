import type { JSX } from "react";

interface Props {
   companyName: string;
   ticker: string;
   price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row">
        <img 
          src="https://static.thenounproject.com/png/2629071-200.png" 
          alt="image" 
        />
        <div className='details'>
            <h1>{companyName}</h1>
            <h2>${ticker}</h2>
            <p>${price}</p>
        </div>
        <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae eius nesciunt, culpa accusantium rem molestias deserunt 
            dignissimos reprehenderit, neque soluta nam! Neque fugiat at delectus?
        </p>
    </div>
  )
}

export default Card