import React from "react"
import Aws from "../images/aws.png"
import Backend from "../images/backend.png"
import Devops from "../images/devops.png"
import Piano from "../images/piano.png"
import "../styles/Interest.css"

const Interest = () => {
  return (
    <div className="interest__container">
      <section>
        <h2>Interest</h2>
        <p>Topics that I want to learn more.</p>
      </section>

      <section className="section__interest">
        <div className="logo">
          <img src={Aws} alt="Aws" />
          <h5>AWS</h5>
        </div>

        <div className="logo">
          <img  src={Backend} alt="Backend" />
          <h5>Backend</h5>
        </div>

        <div className="logo">
          <img src={Devops} alt="Devops" />
          <h5>DevOps</h5>
        </div>

        <div className="logo">
          <img src={Piano} alt="Piano" />
          <h5>Piano</h5>
        </div>

      </section>

    </div>
  )
}

export default Interest