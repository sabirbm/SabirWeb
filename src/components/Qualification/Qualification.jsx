import React, {useState} from 'react'
import './Qualification.css'


function Qualification() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab=(index)=>{
        setToggleState(index);
    }

  return (
    <section className="qualification section" id="portfolio">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? 
                    "qualification__button qualification__active button--flex" 
                    : "qualification__button  button--flex"}
                    onClick={()=>{toggleTab(1)}}>
                    <i className="uil uil-graduation-cap 
                    qualification__iconz"></i>Education
                </div>
                <div className={toggleState === 2 ? 
                    "qualification__button qualification__active button--flex" 
                    : "qualification__button  button--flex"}
                    onClick={()=>{toggleTab(2)}}>
                    <i className="uil uil-briefcase-alt 
                    qualification__icon"></i>Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Science</h3>
                            <span className="qualification__subtitle">Bachelor Of Engineering <br/>SDMCET - India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2020 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Computer Science</h3>
                            <span className="qualification__subtitle">Diploma<br/> BVVS Polytechnic - India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2016 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">SSLC</h3>
                            <span className="qualification__subtitle">SS High School - India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2015 - 2016
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                : "qualification__content"}>
                    
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Programmer Analyst</h3>
                            <span className="qualification__subtitle">Cognizant - India </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2023 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Full Stack Developer</h3>
                            <span className="qualification__subtitle">Elgocart Pvt.Ltd - India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2022 - 2023
                            </div>
                        </div>
                    </div>

                    

                    

                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">SDMCET - India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2018 - 2019
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
