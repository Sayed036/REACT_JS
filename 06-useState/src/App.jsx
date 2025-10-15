// import React, { useState } from 'react'

// function App() {
//   const [value, setValue] = useState(20)
//   const [name, setName] = useState('Sayed')
//   // what if we have array
//   const [user, setUsers] = useState([10,20,30])

//   function changeNum(){
//     setValue(30)
//     setName('Hossain')
//     setUsers([30,50,10])
//   }

//   return (
//     <div>
//       <h1>Value is {value} <br />  users : {user} </h1>
//       <h1>Name is {name}</h1>

//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

function App() {

  const [val,  setVal] = useState(0)

  //  increase func.
  function IncreaseNum(){
    setVal(val+1)
  }

  // decraese func.
  function DecreaseNum(){
    setVal(val-1)
  }

  // increase value by 5
  function jumpBy5Num(){
    setVal(val+5)
  }

  // decrease value by 5
  function downBy5Num(){
    setVal(val-5)
  }

  return (
    <div>
      <h1>{val}</h1>
      <button onClick={IncreaseNum}>increase</button>
      <button onClick={DecreaseNum}>decrease</button>
      <button onClick={jumpBy5Num}>jump by 5</button>
      <button onClick={downBy5Num}>decrease by 5</button>

    </div>
  )
}

export default App
