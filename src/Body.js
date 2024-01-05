import React from 'react'
import { Card } from 'react-rainbow-components'
import "./Body.css"
import { Button } from 'react-rainbow-components';
import { Input } from 'react-rainbow-components';
import { Link } from 'react-router-dom';
import { ProgressCircular } from 'react-rainbow-components';
import { useState, useEffect } from "react";
const Body = () => {
  const inputStyles = {
    width: 100,
    
};
const outStyles={
    width:100,
};
const [current,setCurrent] =useState();
const [power,setPower] =useState();
const [energy,setEnergy] =useState();
useEffect(() => {
    setInterval(() => {
        fetch("https://energy-xgjh.onrender.com/api/sensordata")
            .then(async result => {
                const data = await result.json();
                setCurrent(data.current);
                setPower(data.power);
                setEnergy(data.energy);
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, 2000);
}, []);

  return (
    <div className='abc'>
        <div>
      <h2 className='head'> VISHNU ENERGY MANAGEMENT SYSTEM</h2>
      </div>
      <div className='def'>
       
      
        <Card className='pcc'>
        <img src="https://art.pixilart.com/e4c4e29906724a1.png"className='line'></img>
        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className='arrow' ></img>
        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className='ar1'></img>
        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className='ar2'></img>
        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className='ar3'></img>
            
            <Link to="/pcc-1">
                <Button
            type='link'
             
            shaded
            variant="success"
           // variant="border-filled"
            className="button"
        >
           PCC-1</Button>
         
        </Link>

        <Link to="/pcc-2">
         <Button 
         type='link'
         className='button2'
         variant="success"
         //variant="border-filled"
          >PCC-2</Button>
          </Link>
          <Link to="/pcc-3">
           <Button 
         type='link'
         className='button3'
         variant="success"
         //variant="border-filled"
          >PCC-3</Button>
          </Link>
          <Link to="/pcc-4">
           <Button 
         type='link'
         className='button4'
        // variant="border-filled"
        variant="success"
          >PCC-4</Button>
          </Link>
           <Input
            className="rainbow-p-around_medium "
            style={inputStyles}
            label="Current(A)"
            placeholder=""
            
            valueAlignment="center"
            //disabled
            value={current}
        />
         <Input
            className="rainbow-p-around_medium1"
            style={inputStyles}
            label="Current(A)"
            placeholder=""
            valueAlignment="center"
            disabled
            
        />
        <Input
            className="rainbow-p-around_medium2"
            style={inputStyles}
            label="Current(A)"
            placeholder=""
            valueAlignment="center"
            disabled
        />
        <Input
            className="rainbow-p-around_medium3"
            style={inputStyles}
            label="Current(A)"
            placeholder=""
            valueAlignment="center"
            disabled
        />
         <Input
            className="rainbow-p-around_medium11"
            style={inputStyles}
            label="Power(W)"
            placeholder=""
            valueAlignment="center"
            //disabled
            value={power}
        />
        <Input
            className="rainbow-p-around_medium22"
            style={inputStyles}
            label="Power(W)"
            placeholder=""
            valueAlignment="center"
            disabled
        />
        <Input
            className="rainbow-p-around_medium33"
            style={inputStyles}
            label="Power(W)"
            placeholder=""
            valueAlignment="center"
            disabled
        />
         <Input
            className="rainbow-p-around_medium44"
            style={inputStyles}
            label="Power(W)"
            placeholder=""
            valueAlignment="center"
            disabled
        />
        <Input
            className="rainbow-p-around_medium111"
            style={inputStyles}
            label="Energy(Kwh)"
            placeholder=""
            valueAlignment="center"
            //disabled
            value={energy}
        />
        <Input
            className="rainbow-p-around_medium222"
            style={inputStyles}
            label="Energy(Kwh)"
            placeholder=""
            valueAlignment="center"
            disabled
        />
         <Input
            className="rainbow-p-around_medium333"
            style={inputStyles}
            label="Energy(Kwh)"
            
            valueAlignment="center"
            disabled
        />
        <Input
            className="rainbow-p-around_medium444"
            style={inputStyles}
            label="Energy(Kwh)"
            placeholder=""
            valueAlignment="center"
            disabled
        />
       
        </Card>
       <div>
        <Card className='card2'>
            <h3 className='trust'>Vishnu Trust</h3>
            <h4 className='pow1'>Power</h4>
        <div className="bar">
            <ProgressCircular value={45} className="circular-progress" variant="success" />
            
        </div>
       <Input
            className="xyz1"
            style={outStyles}
            label="Total Energy"
            placeholder=""
            valueAlignment="center"
            disabled
        />
        
         <Input
            className="xyz1"
            style={outStyles}
            label="Power Factor"
            placeholder=""
            valueAlignment="center"
            disabled
        />
         <Input
            className="xyz1"
            style={outStyles}
            label="Reactive Power"
            placeholder=""
            valueAlignment="center"
            disabled
        />
        <Input
            className="xyz1"
            style={outStyles}
            label="Active Power"
            placeholder=""
            valueAlignment="center"
            disabled
        />
        

        </Card> 
       </div>
       <div>
        <Card className='card3'>
        <h3 className='trust'>Vishnu Society</h3>

        <h4 className='pow1'>Power</h4>
        <div className="bar">
  <ProgressCircular className="circular-progress" value={45} variant="success" />
</div>

       <Input
            className="xyz2"
            style={outStyles}
            label="Total Energy"
            placeholder=""
            valueAlignment="center"
            disabled
        />
    
         <Input
            className="xyz2"
            style={outStyles}
            label="Power Factor"
            placeholder=""
            valueAlignment="center"
            disabled
        />
         <Input
            className="xyz2"
            style={outStyles}
            label="Reactive Power"
            placeholder=""
            valueAlignment="center"
            disabled
        />
        <Input
            className="xyz2"
            style={outStyles}
            label="Active Power"
            placeholder=""
            valueAlignment="center"
            disabled
        />
        

        </Card> 
       </div>
          </div>
    </div>
  )
}

export default Body
