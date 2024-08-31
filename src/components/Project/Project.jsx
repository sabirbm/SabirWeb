import React from 'react'
import './Project.css'
import Rapids from './Rapids'
import AllProjects from './AllProjects'


function Project() {
  return (
    <section className="video section" id="video">
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">A Showcase of Projects and Technical Expertise</span>
        <dev className="container">
        <AllProjects/>
        </dev>
       
    </section>
  )
}

export default Project
