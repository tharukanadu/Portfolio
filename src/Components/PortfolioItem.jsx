import React from 'react'
import close from '../assets/close.png'
import { useState } from 'react'

function PortfolioItem({img,title,details}) {
  const [modal,setModal] = useState(false);

  const toggleModal = ()=>{
    setModal(!modal);
  };

  return (
    <div className='portfolio_item'>
      <img src={img} className="portfolio_image" />

      <div className="portfolio_hover" onClick={toggleModal}>
      <h3 className="portfolio_title">{title}</h3>
      </div>
   
    {modal && (
 <div className="portfolio_modal">
 <div className="portfolio_modal content">
   <img src={close} alt="" className='model_close' onClick={toggleModal}/>
   <h3 className="modal_title">{title}</h3>
   <ul className="modal_list grid">
     {details.map(({icon,title,desc}, index)=>{
       return(
         <li className="modal_item" key={index}>
           <span className="item_icon">{icon}</span>

           <div>
             <span className="item_title">{title}</span>
             <span className="item_details">{desc}</span>
           </div>
         </li>
       )
     })}
   </ul>
   <img src={img} alt="" className='model_image' />
 </div>
</div>
    )}
     
    </div>
  
  );
};

export default PortfolioItem
