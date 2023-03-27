import React, { Component } from 'react';
import Button from '@mui/material/Button';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bodyheight"> 
            <div class="row d-flex justify-content-lg-around mt-4">
        <div class="row align-baseline">
            <div class="col-md">
                <div class="card text-center">
                <Button variant="contained"><img src='http://localhost:3000/images/mechanical.jpg' class="card-img " /></Button>
                    <div class="card-body">
                        <h5 class="card-title">Mechanical Engineering</h5>
                        <a href="#" class="card-link">View detail</a>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <div class="card text-center">
                <Button variant="contained"><img src='http://localhost:3000/images/electrical.jpg' class="card-img " /></Button>
                    <div class="card-body">
                        <h5 class="card-title">Electrical Engineering</h5>
                        <a href="#" class="card-link">View detail</a>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <div class="card text-center">
                <Button variant="contained"><img src='http://localhost:3000/images/civil.jpg' class="card-img " /></Button>
                    <div class="card-body">
                        <h5 class="card-title">Civil Engineering</h5>
                        <a href="#" class="card-link">View detail</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="row d-flex justify-content-md-around ">
        <div class="row align-baseline">
            <div class="col-md">
                <div class="card text-center">
                <Button variant="contained"><img src='http://localhost:3000/images/computer.jpg'class="card-img " /></Button>
                    <div class="card-body">
                        <h5 class="card-title">Computer Engineering</h5>
                        <a href="#" class="card-link">View detail</a>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <div class="card text-center">
                <Button variant="contained"><img src='http://localhost:3000/images/software.jpg'class="card-img " /></Button>
                    <div class="card-body">
                        <h5 class="card-title">Software Engineering</h5>
                        <a href="#" class="card-link">View detail</a>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <div class="card text-center">                    
                <Button variant="contained"><img src='http://localhost:3000/images/autojpg.jpg' class="card-img " /></Button>
                    <div class="card-body">
                        <h5 class="card-title">Automotive Engineering</h5>
                        <a href="#" class="card-link">View detail</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
            
        );
    }
}

export default HomeComponent;