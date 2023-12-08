import React from 'react'
import './Home.css'
import profile from '../../assets/profile1.1.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

function Home() {
  return (
    <section className="home section grid">
      <img src={profile} alt="" className='home_img' />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I AM THARUKA</span><br/>WEB DEVELOPER
          </h1>
          <p className="home_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At est voluptatum vel praesentium quibusdam veniam minus minima incidunt. Ducimus, perspiciatis ut commodi odio enim illo reiciendis dignissimos beatae quis itaque.
          </p>
          <Link className="button" to='/about'>More About Me <span className="button_icon"><FaArrowRight/></span></Link>
        </div>
      </div>
      <div className="color_block"></div>
    </section>
  )
}

export default Home
