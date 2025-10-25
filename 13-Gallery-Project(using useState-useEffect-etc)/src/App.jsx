import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../10-Notes-App-Project/src/components/Card';

function App() {

  
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)
  
  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
    console.log(userData);
    
  }
  
  useEffect( function(){
    getData()
  },[index] )

  let printUserData = <h3 className='text-gray-400 text-xs absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading......</h3>
  if(userData.length > 0)
  {
    printUserData = userData.map( (elem, idx)=> {
      return <div key={idx}>
        <Card elem={elem} key={idx}/>
      </div>
    } )
  }


  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white'>

      <div className='flex flex-wrap gap-4'>{printUserData}</div>

      <div className='flex justify-center items-center p-4 gap-4'>
        <button onClick={ ()=> {  if(index>1){
           setIndex(index - 1)
           setUserData([])
           } } } className='bg-amber-500 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold'>prev</button>

           <h4>Page {index}</h4>

        <button onClick={ ()=> {
           setIndex(index + 1) 
           setUserData([])
           } } className='bg-amber-500 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold'>next</button>
      </div>

    </div>
  )
}

export default App
