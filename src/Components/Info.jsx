import React from 'react'
import {personalInfo} from '../data'


function Info() {
  return (
    <div>
     {personalInfo.map(({title,descripyion},index)=>{
      return(
        <li className="inifo_item" key={index}>
          <span className="info_title">{title}</span>
          <span className="info_description">{descripyion}</span>
        </li>
      )
     })}
    </div>
  )
}

export default Info
