import React from 'react'

function Card(props) {
  return (
    <div>
      <a href={props.elem.url} target='_blank'>
            <div className='h-50 w-44 overflow-hidden rounded-2xl'>
            <img className='h-full w-full object-cover 'src={props.elem.download_url} alt="No photo" />
          </div>
          <h2>{props.elem.author}</h2>
      </a>
    </div>
  )
}

export default Card
