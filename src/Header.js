import greenfusion from "./images/greensolutions.jpg"
import logo from "./images/vit1logo.jpg"
import "./Header.css";
import React from 'react'
import { Link } from 'react-router-dom';

import { Card, Avatar, Button } from 'react-rainbow-components';
const Header = () => {
    const avatarSmall = { width: 40, height: 40};
  return (
    <div>

     <div className="head">
          <Card className='card_bg'>
            <div className='vishnu'>
                <Avatar
                style={avatarSmall}
                src={logo}
                size='large'
                />
              </div>
            <h3 className='title'>Vishnu Institute Of Technology</h3>
            <div>
              <Link to='/Graph'>
            <Button className="graph">
            <i class="bi bi-graph-up-arrow"></i>
            </Button>
            </Link>
            <div className="green">
             
              <Avatar
              style={avatarSmall}
                  src={greenfusion}
                  //size="large"
              /> 
              <h3 className='cgf'> Green Fusion IoT Solutions</h3>
              

              </div>
          </div>
          <div>
          </div>
          </Card>
        </div>
    </div>
  )
}

export default Header
