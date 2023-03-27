import React, { Component } from 'react';
import Button from '@mui/material/Button';

class HistoryComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bodyheight nav">
                
                <h2>I am yoseph Marie From Dan Energy</h2>
                <Button variant="contained"><img src='http://localhost:3000/joy.jpg'height={250} width={200} ></img></Button>
            </div>
        );
    }
}

export default HistoryComponent;