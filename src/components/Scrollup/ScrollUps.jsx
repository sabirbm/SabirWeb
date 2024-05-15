import React from 'react'
import './ScrollUps.css'

function ScrollUps() {
    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup");
        //when the scroll is higher than 5560 viewport add the show-scroll class to a tag with the scroll
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    })
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUps
