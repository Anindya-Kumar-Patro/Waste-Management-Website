import React from 'react'
import web from '../images/wlcm.png'
import './Home.css'
import poster from '../images/poster.png'
import review from '../images/review.png'
import review2 from '../images/review2.png'
import u1 from '../images/u1.png'
import u2 from '../images/u2.png'
import u3 from '../images/u3.png'
import u4 from '../images/u4.png'
import u5 from '../images/u5.png'
import u6 from '../images/u6.png'
import u7 from '../images/u7.png'
import u8 from '../images/u8.png'

const Home = () => {
    return (
        <>
        <img src={web} alt ="wlcm" className="img1"/>

        <div className="row comp">
            <div className="col-5 heading">
                <h1>Who are we?</h1>
            </div>
            <div className="col-7 bodyofheading">
                <p>
                We are a group who helps to keep the environment clean, safe and green
                We are a group who helps to keep the environment clean, safe and green
                We are a group who helps to keep the environment clean, safe and green
                We are a group who helps to keep the environment clean, safe and green
                We are a group who helps to keep the environment clean, safe and green
                We are a group who helps to keep the environment clean, safe and green
                We are a group who helps to keep the environment clean, safe and green
                We are a group who helps to keep the environment clean, safe and green
                We are a group who helps to keep the environment clean, safe and green

                </p>
            </div>
        <img src={poster} alt="poster" className="poster"/>
        </div>
        <div className="gallery-body">
        <h1 className="mx-auto heading2">Gallery</h1>
        <div className="row">
            <div className="col-3">
                <img className="gallery start" src={u1} alt="gallery"/>
            </div>
            <div className="col-3">
                <img className="gallery" src={u2} alt="gallery"/>
            </div>
            <div className="col-3">
                <img className="gallery" src={u3} alt="gallery"/>
            </div>
            <div className="col-3">
                <img className="gallery last" src={u4} alt="gallery"/>
            </div>

        </div>
        <div className="row pad">
            <div className="col-3">
                <img className="gallery start" src={u5} alt="gallery"/>
            </div>
            <div className="col-3">
                <img className="gallery" src={u6} alt="gallery"/>
            </div>
            <div className="col-3">
                <img className="gallery" src={u7} alt="gallery"/>
            </div>
            <div className="col-3">
                <img className="gallery last" src={u8} alt="gallery"/>
            </div>

        </div>
        </div>
        <div className="reviews">
        <h1 className="mx-auto heading2">Thoughts by Developers</h1>
        <div className="row">
        <div className="col-6">
        <img src={review} alt="poster" className="poster1"/>
        </div>
        <div className="col-6">
        <img src={review2} alt="poster" className="poster1"/>
        </div>
        </div>
        </div>
        </>
    )
}

export default Home
