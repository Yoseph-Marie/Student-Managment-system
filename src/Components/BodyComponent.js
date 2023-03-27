import React, { Component } from 'react';
import Button from '@mui/material/Button';

class BodyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bodyheight  bodyfont">
                <form action='' method='get' encType="multipart/form-data">
                    <input type='file' name="joy"></input><br/>
                    <input type='submit' action="upload" name='upload'></input>
                </form>
                <h2>Body  <i className=' fa fa-pencil fa-2x'></i><i className=' fa fa-file fa-2x'></i></h2>
            </div>
            
        );
    }
}

export default BodyComponent;