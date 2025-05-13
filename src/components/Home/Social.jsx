import React from 'react'
import VisitorCounter from './VisitorCounter';

function Social() {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/sabir-badami-3121021b7" className="home__social-icon" target="_blank">
        <i className="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://github.com/sabirbm" className="home__social-icon" target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>
        <a href="https://www.instagram.com/sabirraza___q" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"></i>
        </a>
        <div className="visits">
           {/* <VisitorCounter /> */}
        </div>    
       
        
    </div>
  )
}

export default Social
