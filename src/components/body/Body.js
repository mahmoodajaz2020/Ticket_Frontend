import React from 'react'
import Sendemail from './sendemail/Sendemail'
import Sidenav from './sidenav/Sidenav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewEmail from './viewemail/ViewEmail';
import ViewTicket from './viewemail/ViewTicket';

export default function Body() {
  const sendEmailView=<div><title>Ticket APP Home Page</title>
                        <div className="row" style={{height:'60vh'}}>
                          <div className="col-3" style={{backgroundColor:'gray'}} >
                            <Sidenav/>  
                          </div>
                          <div className="col-9">
                            <Sendemail/>
                          </div>
                        </div>
                      </div>

  return (
    <Router className="container border border-secondary" style={{height:'60vh'}}> 
      <Routes>
        <Route exact path="/" element={sendEmailView} />
        <Route exact path="/messages" element={<ViewEmail/>} />
        <Route exact path="/view/:id" element={<ViewTicket/>} />
      </Routes>
    </Router>  
  )
}