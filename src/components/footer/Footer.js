import React from 'react'
import Nav from '../body/sendemail/nav'
import { useState } from 'react';
import {Redirect} from 'react-router';


export default function Footer(props) {

  
  const childs = <div>
   <Nav value="1" key={1}></Nav>
   <Nav value="3" key={2}></Nav>
   <Nav value="2" key={3}></Nav>
{/* const [valueFromParent, setValueFromParent] = useState(props.value) ; */}
 </div>

  return (
    
    
    <div style={{height:'10vh'}}>contact@abcheater.com <br/> +91-992-3-4545 </div>
  )
}