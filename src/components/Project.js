import React from "react"
import PropTypes from "prop-types"
import "../styles/Project.css"
import { GoRepo } from "react-icons/go"
import { TbBrandJavascript, TbBrandReactNative } from "react-icons/tb"
import "../styles/Project.css"

function Projects(props) {
    const { title, description, techStack} = props

    let techStackIcon = ""
    if (techStack === "Javascript") {
        techStackIcon = <TbBrandJavascript className="javascript"/>
    } else 
    if (techStack === "React") {
        techStackIcon = <TbBrandReactNative className="react"/>
    }

    return (
        <section className="section__projects">
            <section className="repo__title">
                <GoRepo className="icon__repo"/>
                <h4>{title}</h4>
            </section>

            <section>
                <p className="description">{description}</p>
            </section>


            <section className="tech__icon">
                {techStackIcon}
                <p className="tech__stack">{techStack}</p>
            </section>

        </section>
    )
}

Projects.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.string,
}

export default Projects