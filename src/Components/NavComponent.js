import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button';
class NavComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='navn'> 
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" ><Button variant="contained"><img src='http://localhost:3000/img2.png' height={50} width={50} ></img></Button></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                    <a class="nav-link active" href="Home">Home<span class="visually-hidden">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="Body">Body<span class="visually-hidden"></span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="History">History<span class="visually-hidden"></span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="About">About<span class="visually-hidden"></span></a>
                    </li> 
                    <li class="nav-item">
                    <a class="nav-link" href="login">LogIn<span class="visually-hidden"></span></a>
                    </li>                      
                    
                </ul>   
                <form class="d-flex">
                        <input class="form-control me-2" type="text" placeholder="Search"></input>
                        <button class="btn btn-primary" type="button" > <i className='fa fa-search'></i></button>
                       
                      </form>             
                </div>
            </div>
            </nav>           
            </div>
            
        );
    }
}

export default NavComponent;