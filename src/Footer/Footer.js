import React from 'react';
import './Footer.css';
const Footer =() =>{
  
    return (
        <div className="bg-dark text-white  " >
         <a href="google.ro"><h3 class=" text-white tc shadow-5 ">www.Oro-Detailing.ro</h3></a>
            <div className="footerSize">
             <div className=''>
           
            <img style={{paddingTop:'0px'}}alt='logo'src="https://scontent.fotp3-1.fna.fbcdn.net/v/t1.0-0/p180x540/92018223_122446059387365_6501843233532805120_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_ohc=q0j7tVgmYFgAX9lpUSa&_nc_ht=scontent.fotp3-1.fna&tp=6&oh=dabf3c53f415acbbd285b72b0cad7975&oe=5FB14585"/>
       </div>
       <div className="tc">
        <div>
       <a href="https://www.facebook.com/pages/category/Automotive--Aircraft---Boat/Oro-Detailing-Auto-108868777411760/"> 
       <i class="fab fa-facebook text-white pr2 fa-3x " ></i></a>
        <a href="https://www.instagram.com/oro.detailing.auto/">
        <i class="fab fa-instagram text-white fa-3x"></i></a>
        </div>
       <div>
       <a href="tel:0729 129 751"><h5 class="fas fa-phone pa2 text-white">0766129751</h5></a>
       </div>
       <div>
       <h5 class="fas fa-map-marker-alt pl2"> Strada intrarea saturn</h5>
       </div>
       </div>
                
                    
            </div>
              <h6 className="tc ma0">Developed by Alexandru Hutupasu</h6>
            </div>
         
       
      
       
    )
  }


export default Footer;