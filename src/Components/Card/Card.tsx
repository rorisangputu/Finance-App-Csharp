import React from 'react'

type Props = {

}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fupward-trend&psig=AOvVaw07whuI5k3uBI5dpeoaJRJ4&ust=1748345762228000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIDL9dyFwY0DFQAAAAAdAAAAABAL" alt="image" />
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