import React from "react"
import "../styles/Header.css"
import "../styles/MediaQueries.css"
import ProfilePhoto from "../images/femille.jpg"
import { FaLinkedin, FaGithub, FaMapPin } from "react-icons/fa"

const Header = () => {
  return (
    <div className="header__container">
      <img className="profile__photo" src={ProfilePhoto} alt="professional profile" />
      
      <section className="profile__section">
        <h1 className="name">Frances Fogarty</h1>
        <p className="role">Full-Stack Developer</p>
      </section>

      <section>
        <ul className="social__section">
          <li>
            <FaLinkedin className="icon"/>
            <a href="https://www.linkedin.com/in/femmiennine/" target="_blank" rel="noreferrer">@femmienniene</a>
          </li>

          <li>
            <FaGithub className="icon"/>
            <a href="https://github.com/femmiennine" target="_blank" rel="noreferrer">@femmienniene</a>
          </li>

          <li>
            <FaMapPin className="icon"/>
            <a href="https://goo.gl/maps/Z1oYgWcwxzucKSSYA" target="_blank" rel="noreferrer">Stockholm, Sweden</a>
          </li>
        </ul>
      </section>

    </div>
  )
}

export default Header
