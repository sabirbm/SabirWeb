import React, { useState } from "react";
import "./Services.css";

function Services() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab=(index)=>{
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Full Stack Development &<br/>Agile Delivery
            </h3>
          </div>
          <span className="services__button" onClick={()=>{
            toggleTab(1)}}>
            View More
            <i className="uil uil-arrow-right 
                services__button-icon"></i>
          </span>

          <div className= {toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab(0)}}></i>
              <h3 className="services__modal-title">Full Stack Development & Agile Delivery</h3>
              <p className="services__modal-description">
                Service with more than 2.5 years of experiance. Providing Quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                  Design and development of scalable backend systems using Java, Spring Boot, and REST/SOAP APIs.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">Frontend development using ReactJS, JavaScript, HTML, and CSS for responsive and dynamic UIs.</p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                  Integration with databases like MySQL, PostgreSQL, Oracle, and Cassandra.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                  Working in Agile/Scrum environments, participating in sprints, reviews, and retrospectives.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                  Cross-functional collaboration with DevOps, QA, and business teams.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">PEGA PRPC &<br/> Decisioning Services</h3>
          </div>
          <span className="services__button" onClick={()=>{
            toggleTab(2)}}>
            View More
            <i
              className="uil uil-arrow-right 
                services__button-icon"
            ></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab(0)}}></i>
              <h3 className="services__modal-title">PEGA PRPC & Decisioning Services</h3>
              <p className="services__modal-description">
                Service with more than 2.5 years of experiance. Providing Quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                  Development of end-to-end Pega applications using PRPC, CDH, and Decisioning.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">Creation of reusable components: Flows, Data Transforms, Decision Tables, Activities, SLAs, Data Page, Report Definition and DSS.</p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                  Integrated REST/SOAP APIs with external systems in Pega using Connectors, Services, and tested them using Postman for seamless data exchange.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info"> 
                  System debugging and issue resolution using Clipboard, Tracer, and Live UI.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                  Implemented real-time decisioning using Pega CDH and configured SLAs to ensure timely case resolution and enhance customer experience.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">API Integration, Automation &<br/>Cloud Engineering</h3>
          </div>
          <span className="services__button" onClick={()=>{
            toggleTab(3)}}>
            View More
            <i
              className="uil uil-arrow-right .
                services__button-icon"
            ></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab()}}></i>
              <h3 className="services__modal-title">API Integration, Automation & AWS Cloud Engineering</h3>
              <p className="services__modal-description">
                Service with more than 2.5 years of experiance in PEGA. Providing Quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                  Deployment and management of applications on AWS using EC2, S3, IAM, Lambda, CloudWatch, and VPC
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                  Implemented Infrastructure as Code (IaC) using AWS CloudFormation and optimized system performance through monitoring with CloudWatch.</p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                  Automated deployments and release management using Git, Jenkins, and CI/CD pipelines.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I develop Applications using PEGA, CassandraDB, Kafka, and PostMan. 
                  </p>
                </li>

                <li className="services__modal-service">
                  <i
                    className="uil uil-check-circle 
                                services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                  Building and consuming REST/SOAP APIs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Services;
