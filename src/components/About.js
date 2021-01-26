import React from 'react'
import AboutusCommon from './AboutusCommon'
import welcome from '../images/Welcome.png'
import './About.css'
import know from '../images/Know.png'
import { NavLink } from 'react-router-dom'
import AboutUscommon2 from './AboutUscommon2'


const About = () => {
    return (
        <>
           <img src={welcome} alt="Welcome" className="imgwelcome"/>
           <AboutusCommon/>
           <NavLink to="/contact-us">
           <img src={know} alt="Welcome" className="imgwelcome1"/>
           </NavLink>
           <AboutUscommon2/>
        </>
    )
}

export default About
