

const Card = () => {
  return (
    <div className='className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"'>
        <img 
          src="https://static.thenounproject.com/png/2629071-200.png" 
          alt="image" 
        />
        <div className='details'>
            <h2>$AAPL</h2>
            <p>$110</p>
        </div>
        <p className='info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae eius nesciunt, culpa accusantium rem molestias deserunt 
            dignissimos reprehenderit, neque soluta nam! Neque fugiat at delectus?
        </p>
    </div>
  )
}

export default Card