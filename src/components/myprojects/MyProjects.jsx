import React from 'react'
import Project1 from './project1/Project1'
import Project2 from './project2/Project2'
import Project3 from './project3/Project3'

export default function MyProjects() {
    return (
        <div className="myprojects" style={{marginLeft: "115.78px"}}>
            <h1>My Projects</h1>
            <div>
                <Project1 />
                <Project2 />
                <Project3 />
            </div>
        </div>
    )
}
