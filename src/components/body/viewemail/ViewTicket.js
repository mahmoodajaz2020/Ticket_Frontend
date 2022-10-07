import { useSearchParams,useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function ViewTicket(props) {
    const params=useParams();
    const [returnedId,setReturnedId]=useState();
    const [returnedName,setReturnedName]=useState();
    const [returnedEmail,setReturnedEmail]=useState();
    const [returnedText,setReturnedText]=useState();
    const [returnedStatus,setReturnedStatus]=useState();
    const [returnedTicketDetails,setReturnedTicketDetails]=useState();
    const [returnedComment,setReturnedComment]=useState();
    const [comment,setComment]= useState('');

    const [messages,setMessages]= useState();
        axios.get(`http://localhost:8080/ticket/${params.id}`)
        .then(res => {
            const msg = res.data;
            setReturnedId(msg.id);
            setReturnedName(msg.name);
            setReturnedEmail(msg.email);
            setReturnedText(msg.text);
            setReturnedStatus(msg.status);
            setReturnedTicketDetails(msg.ticketDetails);
            setReturnedComment(msg.comment);
        })
        .catch(err =>{
            console.log(err);
        })

  const searchTicketHandler = (e) => {
    e.preventDefault();

    console.log("search");
  }

 
  const onSubmitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    const data={
      comment:comment
  }
    axios.put(`http://localhost:8080/addcomment/${returnedId}`, data)
        .then( res=>{
            console.log(res);
        }
        )
        .catch( err=>{
            console.log("error");
        }) 
    
}
    
  return (
    <div>
      <div className='mb-3'>
      
            <Navbar bg="light" expand="lg">
            <Container className='m-auto w-75'>      
                <Form className="d-flex m-auto" style={{width:'30%'}} onSubmit={(e) => searchTicketHandler(e)}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-3 text-center"
                    aria-label="Search"
                  />
                  <Button variant="outline-primary" >Search</Button>
                </Form>
            </Container>
          </Navbar>

      </div>
      

    <Container>
        <Card>
        <Card.Header>
        <h2 className= 'headline'>Ticket id: {returnedId}</h2><h5> Ticket by>> Name: {returnedName} // Email: {returnedEmail} </h5><h5> Ticket Status: {returnedStatus}</h5>
        <h3>
        <Button variant="outline-success">Edit</Button>{'  '}
        <Button variant="outline-success">Assign</Button>{'  '}

        <Dropdown className="d-inline mx-2" autoClose={false}>
            <Dropdown.Toggle id="dropdown-autoclose-false">
            Workflow
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#">Close (Resolve)</Dropdown.Item>
            <Dropdown.Item href="#">Re-Open (Unresolve)</Dropdown.Item>
            <Dropdown.Item href="#">Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </h3>

        </Card.Header>
            <Card.Body>
                <Card.Title><h3>Ticket Headline :    {returnedText}</h3>  </Card.Title>
                <Card.Text>
                </Card.Text>
                <Card.Title>Ticket Description</Card.Title>
                <Card.Text>
                  {returnedTicketDetails}<br></br>
                  <h5>Comment :</h5> {returnedComment}
                </Card.Text>
                <Card.Text>
                  <Form onSubmit={(e)=>onSubmitHandler(e)}>
                      <Form.Group  className="mb-3">

                          <Form.Label htmlFor="disabledTextInput"> <b>Add new Comment</b>
                          </Form.Label>
                          <FloatingLabel controlId="floatingTextarea2" label=""   >
                          <Form.Control
                          as="textarea"
                          placeholder="Leave a here"
                          style={{ height: '10vh'}}
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          />
                          </FloatingLabel>
                          <Button type="submit" variant="outline-success">Submit Comment</Button>{'  '}
                      </Form.Group>
                    </Form>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
            <h3>

        </h3>
            </Card.Footer>
        </Card>

      </Container>


    </div>
  )
}
