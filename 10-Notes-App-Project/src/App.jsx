import React, { useState } from "react";
import { X } from 'lucide-react'
 
function App() {
  const [heading, setHeading] = useState(""); // for notes heading
  const [details, setDetails] = useState(""); // for notes description

  // to store the all task/Notes
  const [task, setTask] = useState([])

  const deleteNote = (index)=>{
    const copyTask = [...task]

    copyTask.splice(index, 1) // 1 element ko delete krdo, jo v index pe click ho
    setTask(copyTask)
    
  }


  const submitHandler = (e) => {
    e.preventDefault();

    // store the heading & details in task
    const copyTask = [...task]
    copyTask.push({heading, details})

    setTask(copyTask)
    console.log(copyTask);
  };

  return (
    <div className="h-screen bg-black text-white lg:flex ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="  p-10  items-start  gap-4  flex flex-col lg:w-1/2"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* HEADING INPUT  */}
        <input
          className="px-5 w-full py-2 border-2 rounded outline-none font-medium"
          type="text"
          placeholder="Enter Notes Heading"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        />

        {/* TEXT INPUT  */}
        <textarea
          className="px-5 py-2 h-35   border-2 rounded w-full outline-none "
          type="text"
          placeholder="Enter details"
          value={details}
          onChange={ (e)=> { setDetails(e.target.value) } }
        />

        <button className="bg-white text-black active:scale-95 px-5 py-2 rounded outline-none w-full">
          Add Notes
        </button>

        {/* <img
          className="h-60"
          src="https://imgs.search.brave.com/_FnfZnKD8vxRgfaNPF3ShqABJ9mZuwUV8U_3MV1AEZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvTm90/ZXBhZC1QTkctSW1h/Z2VzLUhELnBuZw"
          alt=""
        /> */}
      </form>

      <div className="p-10 lg:w-1/2 bg-black lg:border-l-2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto">

          {task.map( function(elem, index){
            return <div key={index} className="flex justify-between flex-col items-start relative h-52 w-40  rounded-2xl bg-[url('https://imgs.search.brave.com/B-VzAXYC0R1aMtzq2gFBcdpF5s7mC0zeT-SRC6mZO-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHUXNZ/SVEzNGcvMS8wLzEx/MzF3L2NhbnZhLWdy/ZWVuLWFlc3RoZXRp/Yy1wb3N0ZXItcG9y/dHJhaXQtWEppZDFw/U2FIRDAuanBn')] text-black p-4">
              <div>
                <h2 className="absolute top-1 right-1 bg-red-500 p-1 rounded-full"> <X/> </h2>
                <h3 className="leading-tight text-xl font-bold"> {elem.heading} </h3>
                <p className="mt-2 leading-tight text-xs text-gray-600"> {elem.details} </p>
              </div>
              <button onClick={ ()=> {
                deleteNote(index)
              } } className="w-full cursor-pointer active:scale-95 bg-red-600 text-white text-xs rounded-full font-bold">Delete</button>
            </div>
          } )}

        </div>
      </div>
    </div>
  );
}

export default App;
