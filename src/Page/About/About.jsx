import React from 'react'
import './About.css'
import Info from '../../Components/Info';
import Status from '../../Components/Status';
import { FaDownload } from "react-icons/fa";
import cv from '../../assets/cv/kawya gimhan cv.pdf';
import Skills from '../../Components/Skills'

function About() {
  return (
   <main className="section container">
    <section className="about">
      <h2 className="section_title">
        About<span> Me</span>
      </h2>

      <div className="about_container">
        <div className="about_info">
          <h3 className='section_subtitle '>Personal Info</h3>
          <ul className='info_list grid'>
            <Info/>
            <a href={cv} download='' className="button" >Download CV <span className="button_icon"><FaDownload /></span></a>
          </ul>
        </div>
        <div className="status grid">
          <Status/>
        </div>
      </div>
    </section>  <br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <div className="separator"></div>
    <section className="skills">
      <h3 className="section_subtitle subtitle_center">My Skils</h3>
      <div className="skills_container grid">
        <Skills/> 
      </div>
    </section>
   </main>
  )
}

export default About
