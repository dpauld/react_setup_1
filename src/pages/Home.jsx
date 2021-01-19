import React from 'react'
import 'App.css'
import fHF from '../images/fHF.jpg'

//Import Components
import Nav from '.././Nav'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Nav />
      <h1 className='wow'>Hello React!!!!!</h1>
      <img src={fHF} alt='' />
      <h1>See how link works here, same problem once again</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat autem
        fugiat nihil veniam a hic eaque sint nulla iste cum, consectetur itaque
        alias sapiente unde cupiditate dicta quae delectus in.
      </p>
      <div style={{ background: 'grey', textAlign: 'center' }}>
        <Link to='/about'>About(Link)</Link>
        <br></br>
        <NavLink to='/about'>About(Navlink)</NavLink>
      </div>
    </div>
  )
}

export default Home
