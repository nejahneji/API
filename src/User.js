import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div id="di">
      <Card calssName="card" style={{ width: '20rem'}}>
  <span className="username">{user.username[0]}</span>
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
      <p>{user.username}</p>
      <p>email : {user.email}</p>
      <p>phone : {user.phone}</p>
      
    </Card.Text>
<Link to={`/${user.id}`}>
    <Button variant="primary">DETAILS</Button>
  </Link>
  </Card.Body>
</Card>
      
      
    </div>
  );
};

export default User;
