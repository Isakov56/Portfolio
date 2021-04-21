import React from 'react'
import './navbar.scss'

export default function NavBar() {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <h4 className="name m-0 text-light p-3 mr-4">N. Surname</h4>
                <div className='d-flex nav-items'>
                    <div className='mx-4'>home</div>
                    <div className='mx-4'>projects</div>
                    <div className='mx-4'>contact me</div>
                </div>
            </div>
        </div>
    )
}
