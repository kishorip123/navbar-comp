import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='nav'>
    <div className='img'>
        <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="" />
    </div>
    <div>
        <Link to="/">HOME</Link>
        <Link to="/about">About</Link>
        <Link to="/education">EDUCATION</Link>
    </div>
    </section>
  )
}

export default Navbar