import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios'
import Nav from './nav';
import {Navigate} from 'react-router-dom';


export default function Sendemail() {

   // const [email,setEmail]=
  
   const [name,setName]= useState('');
   const [email,setEmail]= useState('');
   const [text,setText]= useState('');
   const [ticketDetails,setTicketDetails]= useState('');

const onSubmitHandler = (e) => {
    e.preventDefault();
    const data={
        name:name, email:email,text:text, ticketDetails:ticketDetails
    }
    console.log(name,email,text); 
    axios.post("http://localhost:8080/submit", data)

        .then( res=>{
            console.log(res);
        }
        )
        .catch( err=>{
            console.log("error");
        }) 
    
}

const childs = <div>
                  <Nav value="1"  ></Nav>
                  <Nav value="3" key={2}></Nav>
                  <Nav value="2" key={3}></Nav> 
              </div>


  return (
    <div >
    
    <Form onSubmit={(e)=>onSubmitHandler(e)}>

      <fieldset>
        <Form.Group className="mb-3" class="text-center" >
          <Form.Label htmlFor="disabledTextInput" ><b>Name</b></Form.Label>
          <Form.Control id="disabledTextInput" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput"><b> Email</b> </Form.Label>
          <Form.Control id="disabledTextInput" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><b> Message-Ticket Heading</b> </Form.Label>
          <Form.Control id="disabledTextInput" 
                        placeholder="Ticket Heading" 
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
        </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label> <b>Ticket Details</b>
        </Form.Label>
        <FloatingLabel  >
        <Form.Control
          as="textarea"
          placeholder="Leave a here"
          style={{ height: '30vh'}}
          value={ticketDetails}
          onChange={(e) => setTicketDetails(e.target.value)}
        />
        </FloatingLabel>
      </Form.Group>
      

        <Button  type="submit">Submit</Button>
      </fieldset>
    </Form>
    </div>

  )
}
