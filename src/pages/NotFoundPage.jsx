import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        <h1>Page not found</h1>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default NotFoundPage