import React, { useEffect, useState } from 'react'
import {themes} from '../data';
import { FaCog,FaSun ,FaMoon ,FaRegWindowClose  } from "react-icons/fa";
import Themesitem from '../Components/ThemsItem';
import './Themes.css'


const getStorageColor=()=>{
  let color = 'hsl(252,35%,51%)';
  if(localStorage.getItem('color')){
    color = localStorage.getItem('color');
  }
  return color;
}

const getStorageTheme=()=>{
  let theme = 'light-theme';
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
  return theme;
}

function Themes() {
  const [showSwitcher,setShowSwitcher]=useState(false);
  const [color,setColor]= useState(getStorageColor());
  const [theme,setTheme]=useState(getStorageTheme());

  const changeColor= (color)=>{
    setColor(color);
  };
  const toggleTheme =()=>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
    }else{
      setTheme('light-theme');
    }
  }
  useEffect(()=>{
    document.documentElement.style.setProperty('--first-color',color);
    localStorage.setItem('color',color);
  },[color])

  useEffect(()=>{
    document.documentElement.className=theme;
    localStorage.setItem('theme',theme);
  },[theme]);
  return (
    <div>
    <div className={`${showSwitcher ? 'show-switcher' : ''} style_switcher`}>
      <div className="style_swicher-toggler" onClick={()=>setShowSwitcher(!showSwitcher)}>
        <FaCog/>
      </div>

      <div className="them_toggler" onClick={toggleTheme}>
        {theme === 'light-theme' ? <FaMoon/> : <FaSun/>}
      </div>

      <h3 className="style_swicher-title">Style Seicher</h3>
      <div className="style_swicher-items">
        {themes.map((themes,index)=>{
          return(
            <Themesitem key={index} {...themes} changeColor={changeColor}/>
          )
        })}
      </div>

      <div className="style_swicher-close" onClick={()=>setShowSwitcher(!showSwitcher)} ><FaRegWindowClose /></div>
    </div>
    </div>
  )
}

export default Themes
