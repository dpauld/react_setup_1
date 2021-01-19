import React from 'react'
import 'App.css'
import fromUK from '../images/fromUK.jpg'

//Import Components
import Nav from '../Nav'
import { Link, NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Nav />
      <div style={{ height: '200px', textAlign: 'center' }}>
        <h1 className='wow'>This is the about page!!!!!</h1>
      </div>
      <img src={fromUK} alt='' />
      <h1>Sned me some rod from Juktiorastro</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut aspernatur
        dignissimos laudantium inventore eligendi vel. Ut blanditiis voluptatem
        quae ab libero autem, est voluptatum impedit distinctio ullam. Maxime,
        enim quasi?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam
        dolorem numquam necessitatibus incidunt modi reprehenderit sint
        voluptatum dolore sapiente aliquam dolor, dolorum odio. Doloribus quae
        error praesentium enim laborum!
      </p>
      <div style={{ background: 'grey' }}>
        <Link to='/'>Home with Link</Link>
        <br></br>
        <NavLink to='/'>Home with Navlink</NavLink>
      </div>
      <p>
        AnotherLorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
        ipsum perspiciatis obcaecati quibusdam sunt provident voluptas error in,
        eum id cupiditate nihil nesciunt, necessitatibus inventore quisquam.
        Esse minima dolor fugit.
      </p>
    </div>
  )
}

export default About
