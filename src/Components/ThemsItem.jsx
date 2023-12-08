import React from 'react'


function ThemsItem ({color,img, changeColor}) {
  return (
  <img src= {img} alt='' className='theme_img' onClick={()=>{changeColor(color)}}></img>   
  )
}

export default ThemsItem
