import React from 'react';
import './Galerie.css';
const Galerie = () => {
	return(
		<div id="galerie">
		<h1 className='tc shadow-1'>Galerie Foto</h1>
		<div className='size '>

		<div className='ma3 grow shadow-5'>
		  <img style={{paddingTop:'0px'}}alt='logo'src="https://autotreviso.ro/wp-content/uploads/2019/11/1-9.jpg"/>
 		 </div>
 		 <div className='ma3 grow shadow-5'>
 		 <img style={{paddingTop:'0px'}}alt='logo'src="https://www.ziaruldemures.ro/wp-content/uploads/2019/11/detailing-auto-exterior2.jpg"/>
 		 </div>
 		 <div className='ma3 grow shadow-5'>
		  <img style={{paddingTop:'0px'}}alt='logo'src="https://frankfurt.apollo.olxcdn.com/v1/files/09liq3jr7go63-RO/image;s=1000x700"/>
 		 </div>
 		 <div className='ma3 grow shadow-5'>
 		 <img style={{paddingTop:'0px'}}alt='logo'src="https://www.detailingspalatorie.ro/images/item/big/Detailing-Auto-Pascani-Pascani-591.jpg"/>
 		 </div>
		</div>
		</div>
)
}

export default Galerie;