import React from 'react'
import './Videos.css'
import Demos from './Demos'


function Voids() {
  return (
    <section className="video section" id="video">
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">A Showcase of Projects and Technical Expertise</span>
        <div className="vidoe__container container grid">
          <Demos/>
        </div>
    </section>
  )
}

export default Voids
