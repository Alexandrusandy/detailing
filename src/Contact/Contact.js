import React from "react";
import './Contact.css';
import { Form,Row,Col } from 'react-bootstrap';


const Contact = () => {
  
  return (
  	<div className="flex pa2">
  	 <div className='dimensiune'>
 		 <img style={{paddingTop:'0px'}}alt='logo'src="https://scontent.fotp3-1.fna.fbcdn.net/v/t1.0-0/p180x540/92018223_122446059387365_6501843233532805120_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_ohc=q0j7tVgmYFgAX9lpUSa&_nc_ht=scontent.fotp3-1.fna&tp=6&oh=dabf3c53f415acbbd285b72b0cad7975&oe=5FB14585"/>
		</div>
  <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
    <Col>
      <Form.Control placeholder="Phone" />
    </Col>
  </Row>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Mesaj</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

</Form>
</div>
  );
};

export default Contact;

