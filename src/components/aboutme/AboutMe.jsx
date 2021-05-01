import React from 'react'
import './aboutme.scss'
import AboutMeInfo from './AboutMeInfo'
import AboutMeContacts from './AboutMeContacts'
import AboutMeImg from './AboutMeImg'

export default function AboutMe() {
    return (
        <div className="d-flex alig-items-center parent-div justify-content-between border-bottom">
            <AboutMeInfo />
            <AboutMeImg />
            <AboutMeContacts />
        </div>
    )
}
