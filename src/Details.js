import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Details = ({ match }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
          .then((res) => {
            setUser(res.data);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      }, [match.params.id]);
      if (loading){
        return <Spinner animation="border" variant="primary" />
    }
    return (
        <div>
           <h3>{user.username}</h3>
           
           <div className='info'>
           <div className='address'>
           <h4 class="menu-items">
            Adresse
            </h4>
            <ul class="drop-menu">
              <li class="drop-menu-items">street : {user.address.street}</li>
              <li class="drop-menu-items">suite : {user.address.suite}</li>
              <li class="drop-menu-items">city : {user.address.city}</li>
              <li class="drop-menu-items">zipcode : {user.address.zipcode}</li>
              <h4>geo</h4>
              <li>lat : {user.address.geo.lat}</li>
              <li>lng : {user.address.geo.lng}</li>
            </ul>
          
          </div>
          

          </div>
          <Link to='/'> <Button variant="outline-primary">Back</Button></Link>

        </div>
    )
}

export default Details
