import React from "react";
import './Contact.css';
import emailjs from 'emailjs-com';


const Contact=() =>{

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_v841we6', e.target, 'user_l9WPNn9lyGFpNln4rkdO7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div id="contact">
        <h1 className="tc shadow-1">Contact</h1>
            <div className="">
            <div className=" pa2">
     <div className='dimensiune '>
         <img style={{paddingTop:'0px'}}alt='logo'src="https://scontent.fotp3-1.fna.fbcdn.net/v/t1.0-0/p180x540/92018223_122446059387365_6501843233532805120_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_ohc=q0j7tVgmYFgAX9lpUSa&_nc_ht=scontent.fotp3-1.fna&tp=6&oh=dabf3c53f415acbbd285b72b0cad7975&oe=5FB14585"/>
       <div className="tc">
       <div>
       <a href="tel:0729 129 751"><h5 class="fas fa-phone pa2 text-white">0766129751</h5></a>
       </div>
       <div>
       <h5 class="fas fa-map-marker-alt pl2"> Strada intrarea saturn</h5>
       </div>
       <div>  <h6 class="far fa-clock pl2">Program: Luni-Vineri 9:00-18:00</h6>

       </div>
       </div>
        </div>
            <form onSubmit={sendEmail}>
                    <div className="pa2">
                    <h2 className="tc">Formular de contact</h2>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="Name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email" name="Email"/>
                        </div>
                         <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="phone" name="Phone"/>
                        </div>
                           <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="5" placeholder="Message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
            </div>
         
        </div>

    )
}
export default Contact;