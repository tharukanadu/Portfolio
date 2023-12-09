import React from 'react'
import './Home.css'
import profile from '../../assets/profile1.1.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import shape1 from '../../assets/shape/shape-1.png'
import shape2 from '../../assets/shape/shape-2.png'


function Home() {
  return (
    <section className="home section grid">
      
      <img src={profile} alt="" className='home_img' />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I AM THARUKA</span><br/> <Typewriter 
             words={['Frontend Developer', 'Web Developer', 'Graphic Disgner', 'Repeat!']}
             loop={5}
             cursor
             cursorStyle='_'
             typeSpeed={70}
             deleteSpeed={50}
             delaySpeed={1000}
            />
          </h1>
          <p className="home_description">
           Talking seamiess key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.Objectively innovate empowered manufactured products whereas parallel platforms.
          </p>
          <Link className="button" to='/about'>More About Me <span className="button_icon"><FaArrowRight/></span></Link>
        </div>
      </div>
      <div className="color_block"></div>
      <div className="shape">
      <img src={shape1} alt=""  className='shape_one'/>
      <img src={shape2} alt="" className='shape_two'/>
      </div>
    </section>
  )
}

export default Home
