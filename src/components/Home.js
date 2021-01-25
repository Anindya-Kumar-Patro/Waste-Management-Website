import React from 'react'
import web from '../images/homepage.jpeg'
import './Home.css'

const Home = () => {
    return (
        <>
                <div className="row">
        <div className="top-padding col-5">

            <img src={web} alt="HP" />
        </div>

        <div className="col-6 box-style">
            <h1 className="heading-styling-hp">Who are We?</h1>
            <p className="paragraph-styling-hp">We are a group who helps the cleaner to get their materials and keep their place clean
                We are a group who helps the cleaner to get their materials and keep their place clean 
                We are a group who helps the cleaner to get their materials and keep their place clean</p>
            <button className="btn-primary button">Click me</button>
        </div>
        </div>
        
        </>
    )
}

export default Home
