import React from 'react'

function RightCardContent(props) {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi modi alias error, reprehenderit delectus?</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-meduim px-8 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-meduim px-4 py-2 rounded-full'> <i className="ri-arrow-right-line"></i> </button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
