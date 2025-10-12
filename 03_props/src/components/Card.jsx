import React from 'react'

function App(props) {
  return (
    <div className='parent'>
      <div className='card'>
        <img src="https://images.unsplash.com/photo-1756745679447-73e51d7afe4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" alt="" />
        <h1>{props.user}</h1>
        <p>He is a good Boy. but He is soo soo soo sweet.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default App
