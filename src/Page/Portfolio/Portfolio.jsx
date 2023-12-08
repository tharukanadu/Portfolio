import React from 'react'
import './Portfolio.css'
import {portfolio1} from '../../data'
import PortfolioItem from '../../Components/PortfolioItem'

function Portfolio() {
  return (
    <section className='portfolio section'>
      <h2 className="section_title">My <span>Portfolio</span></h2>
      <div className="portfolio_container container grid">
     {portfolio1.map((item)=>{
      return <PortfolioItem key={item.id} {...item} />
     })}
      </div>
    </section>
  )
}

export default Portfolio
