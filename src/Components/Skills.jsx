import React from 'react'
import {skills} from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
  return (
    <div>
      {skills.map(({title,percentage},index)=>{
        return(
            <div className="progress_box" kry={index}>
                <div className="progress_circle">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                </div>
                <h3 className="skills_title">{title}</h3>
            </div>
        )
      })}
    </div>
  )
}

export default Skills
