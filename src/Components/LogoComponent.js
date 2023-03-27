import React, { Component } from 'react';
import Button from '@mui/material/Button';
class LogoComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='logo'>
                <Button variant="contained"><img src='http://localhost:3000/img1.png'></img></Button>
                <h2>Logo</h2>
                <hr></hr>
               
            </div>
            
        );
    }
}

export default LogoComponent;