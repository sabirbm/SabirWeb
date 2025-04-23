import React from 'react'
import './Skills.css'
import AWS from './AWS'
import Pega from './Pega'
import Technologies from './Technologies'
import BackEnd from './BackEnd'


function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container grid">
          <BackEnd />
          <Technologies />
          <Pega />
          <AWS />
        </div>
    </section>
  )
}

export default Skills
