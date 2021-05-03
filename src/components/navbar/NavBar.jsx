import React, {useState} from 'react'
import './navbar.scss'
import {useLocation} from "react-router-dom"
import {Nav, Navbar, Form, Button, FormControl} from "react-bootstrap"


export default function NavBar() {
    const location = useLocation()
    const [effectHome, setEffectHome] = useState(false)
    const [effectFeatures, setEffectFeatures] = useState(false)
    const [effectPricing, setEffectPricing] = useState(false)
    const effectHomeHandler = () => {
        effectHome ? setEffectHome(false) : setEffectHome(true)
    }
    const effectFeaturesHandler = () => {
        effectFeatures ? setEffectFeatures(false) : setEffectFeatures(true)
    }
    const effectPricingHandler = () => {
        effectPricing ? setEffectPricing(false) : setEffectPricing(true)
    }
    return (
        <div>

            <Navbar bg="light" variant="light" className="p-0 bg-transparent my-nav">
                <Navbar.Brand href="#home" className="name text-light py-3 px-3 font-weight-bold mr-2 d-flex justify-content-center">K. Isakov</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="">
                        <div className={`${location.hash === '#home' ? "my-active" : ""} pl-3 m-0 `} onClick={()=> effectHomeHandler()} >Home</div>
                    </Nav.Link>
                    <Nav.Link href="#features" >
                        <div className={`${location.hash === '#features' ? "my-active" : ""} pl-3 m-0` } onClick={()=> effectFeaturesHandler()}>Features</div>
                    </Nav.Link>
                    <Nav.Link href="#pricing">
                        <div className={`${location.hash === '#pricing' ? "my-active" : ""} pl-3 m-0` } onClick={()=> effectPricingHandler()}>Pricing</div>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
