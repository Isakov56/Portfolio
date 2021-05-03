import React from 'react'
import './aboutme.scss'
import AboutMeInfo from './AboutMeInfo'
import AboutMeContacts from './AboutMeContacts'
import AboutMeImg from './AboutMeImg'

export default function AboutMe() {
    return (
        <div className="d-flex container-fluid p-0 pb-5 m-0 alig-items-center parent-div justify-content-between border-bottom">
            <div className="row my-row justify-content-md-center align-items-center">
                <div className="aboutme-left-container col-xl-4 col-lg-4 col-md-7 col-sm-12 col-xs-12 mb-5">
                    <AboutMeInfo />
                </div>
                {/* <div class="w-100"></div> */}
                <div className="aboutme-img-container col col-xl-6 col-lg-4 col-md-7 col-sm-12 col-xs-12 ml-5">
                    <AboutMeImg />
                </div>
            </div>
            <div className="">
                <AboutMeContacts />
            </div>
        </div>
    )
}
