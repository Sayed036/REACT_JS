import React from 'react'

function App() {

  const getData = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const datas = await response.json()
    console.log(datas);

    // there is an another tool for API, which is 'axios'
  }


  return (
    <div>
      <button onClick={getData}>Fetch data</button>
    </div>
  )
}

export default App
