import React from 'react'
import {Bookmark} from 'lucide-react' 


function Card(props) {    

  return (
    <div>
      
    <div className="card">

        <div>

          <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={12}/></button>
        </div>

        <div className="centre">
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>

          <div className='tag'>
            <h4>{props.time}</h4>
            <h4>{props.level}</h4>
          </div>

        </div>

        </div>

        <div className="bottom">

            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>

          <button>Apply Now</button>
        </div>

      </div>

    </div>
  )
}

export default Card
