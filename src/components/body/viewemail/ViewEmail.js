import axios from 'axios';
import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

export default function ViewEmail() {
  console.log("viewEmail");
    
    
    const [messages,setMessages]= useState();
    useEffect(() => {
        axios.get("http://localhost:8080/allmessages")
        .then(res => {
            const data = res.data;
            let tr = data.map(msg => {
                return <tr>
                            <td>{msg.id}</td>
                            <td>{msg.name}</td>
                            <td>{msg.email}</td>
                            <td>{msg.text}</td>
                            <td>{msg.status}</td>
                            <td>  <Button href={"/view/"+msg.id} variant="outline-primary">View</Button>{' '} </td>
                        </tr>
            })
            setMessages(tr);

        })
        .catch(err =>{
            console.log(err);
        })
      },[]);


  return (
    <div>
      <title>Queries View page</title>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Ticket id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {messages}
      </tbody>
    </Table>
  </div>
  )
}
