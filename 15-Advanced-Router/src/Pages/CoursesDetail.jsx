import React from 'react'
import { useParams } from 'react-router-dom';

function CoursesDetail() {

  const params = useParams();

  return (
    <div>
      <h1>{params.coursesId} Courses Detail Page</h1>  
    </div>
  )
}

export default CoursesDetail
