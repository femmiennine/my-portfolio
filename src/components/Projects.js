import React from 'react'
import Project from "../components/Project"
import "../styles/Projects.css"
import PropTypes from 'prop-types'

const Projects = (props) => {
  const { projects } = props

  const project = projects.map(project => {
    return (
      <Project
          key={project.id}
          {...project}
          project={project}
      />
    )
  })

  return (
    <div className="projects__container">
      <section className="section__title">
          <h2>My Projects</h2>
          <p>Projects I have built over the past 3 years and pushed to my GitHub repository.</p>
      </section>

      <section className="project__container">
          {project}
      </section>
    </div>
  )
}

Projects.propTypes = {
  project: PropTypes.object
}

export default Projects
