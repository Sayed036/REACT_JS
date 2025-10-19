import React, { useState } from 'react'

function App() {
  
  // const [num, setNum] = useState({user:"Sayed", age:20})
  const [num, setNum] = useState(20)


  const btnClicked = async () => {
    // 1. 1st method  
    // const newNum = {...num} // destructuring
    // newNum.user = 'Hossain'
    // setNum(newNum)
    // console.log(num);
    
    // 2. second method
    // setNum(prev=> ({...prev, user:'Hossain', age:23}) )   // destructuring & changing the value

// _____________________________________________________________________________________________________

    setNum(prev => ( prev + 1 ))
    setNum(prev => ( prev + 1 ))
    setNum(prev => ( prev + 1 ))
  }

  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1> */}
      <h1>val : {num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
