import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const params = useParams()
    console.log(params.id)
  return (
    <h1>{params.id} Course Details</h1>
  )
}

export default CourseDetail