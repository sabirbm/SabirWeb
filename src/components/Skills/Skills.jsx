import React from 'react'
import './Skills.css'
import BackEnd from './BackEnd'
import FrontEnd from './FrontEnd'
import Technology from './Technology'

function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container grid">
            <FrontEnd />
            <BackEnd />
            <Technology />
        </div>
    </section>
  )
}

export default Skills
