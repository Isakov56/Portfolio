import React from 'react'
import './navbar.scss'
import {useHistory} from "react-router-dom"
import {Nav, Navbar, Form, Button, FormControl} from "react-bootstrap"


export default function NavBar() {


    return (
        <div>

            <Navbar bg="light" variant="light" className="p-0 bg-transparent">
                <Navbar.Brand href="#home" className="name text-light p-2 px-3 font-weight-bold">N. Surname</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="">
                        <div className='bg-primary'>Home</div>
                    </Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            {/* <div className='d-flex align-items-center'>
                <h4 className="name m-0 text-light p-3 mr-4">N. Surname</h4>
                <div className='d-flex nav-items'>
                    <div className='mx-4'>home</div>
                    <div className='mx-4'>projects</div>
                    <div className='mx-4'>contact me</div>
                </div>
            </div> */}
        </div>
    )
}
