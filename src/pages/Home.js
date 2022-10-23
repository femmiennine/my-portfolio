import React from 'react'
import Header from "../components/Header"
import About from "../components/About"
import Projects from "../components/Projects"
import Interest from "../components/Interest"
import "../styles/Home.css"
import "../styles/MediaQueries.css"
import projects from "../data"

const Home = () => {
  return (
    <div className="app__container">
        <Header />
        <main className="main__container">
            <About />
            <Projects projects={projects}/>
            <Interest />
        </main>
    </div>
  )
}

export default Home