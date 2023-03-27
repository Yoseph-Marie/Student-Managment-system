import React, { Component } from 'react';

class FooterComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='footer'>
              Footer Copy right <sup>©</sup> 2015 E.C
            </div>
            
        );
    }
}

export default FooterComponent;