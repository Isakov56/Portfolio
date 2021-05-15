import React from 'react'
import './projectimg.scss';

export default function ProjectImg() {
    return (
        <div className="m-5">
            <div className="back-img bg-secondary">
                <div className="front-img bg-primary d-flex py-3 pl-3">
                    <div className='little-img mr-2'></div>
                    <div className='bigger-img ml-2'></div>
                </div>
            </div>
        </div>
    )
}
