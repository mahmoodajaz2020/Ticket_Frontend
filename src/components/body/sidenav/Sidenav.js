import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Sidenav() {
  return (
    <div style={{height:"575px"}}>
      <div className='h3'>Other Links</div>
      <div className="d-grid gap-2">
      <a href='/messages'><Button variant="primary" size="lg">
        See Old Querry
      </Button>
      </a>
      <Button variant="secondary" size="lg">
        Admin log-in
      </Button>
    </div>
     
      </div>
  )
}
