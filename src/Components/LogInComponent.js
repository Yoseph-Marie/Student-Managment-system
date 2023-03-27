import React, { Component } from 'react';
import Button from '@mui/material/Button';
class LogInComponent extends React.Component {
    constructor(props) {
        super(props);
    }

   
    render() {
        return (
            <div className='cover'>
                <h1>Login</h1>
                <form>
                    <label for='username'>Enter your user name</label>
                    <input type="text" placeholder="username" />
                    <label for='password'>Enter your password</label>
                    <input type="password" placeholder="password" />
                    <input className='login-btn' type="submit" value="Login"></input>
                   
                </form>
                

                

                <p className='text'>Or login using</p>

                <div className='alt-login'>
                    <div className='facebook'>facebook</div>
                    <div className='google'>google</div>
                </div>
                
            </div>
        );
    }
}

export default LogInComponent;