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
                <div class="col-4 d-inline-flex align-content-center">
                 <form>
                    <label for='username'>Enter your user name</label>
                    <Button variant= "contained"><input type="text" placeholder="username" /></Button><br/>
                    <label for='password'>Enter your password</label>
                    <Button variant= "contained"><input type="password" placeholder="password" /></Button><br/>
                    <Button variant= "contained"> <input className='login-btn' type="submit" value="Login"></input></Button>
                   
                </form>
                </div>
                
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