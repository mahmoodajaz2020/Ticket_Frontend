import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Header() {
  return (
    <Card className="text-center">
      <Card.Header>ACB Heater Company</Card.Header>
      <Card.Body>
        <Card.Title>Customer Ticket Dashboard</Card.Title>
      </Card.Body>
    </Card>
  )
}
