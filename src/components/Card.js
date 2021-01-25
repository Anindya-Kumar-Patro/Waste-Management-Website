import React from 'react'
import './Card.css'
import 'tachyons'
import {NavLink} from 'react-router-dom'


const Card = (props) => {
    return (
        <>
        
            <div className="card col-4 card-styling dib ">
                <img className="card-img-top" src={props.cardimage} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.cardtitle}</h5>
                        <p className="card-text">{props.cardbody}</p>
                        <NavLink to={props.cardlink} className="btn btn-primary">Click Here</NavLink>
                    </div>
            </div>
        </>
    )
}

export default Card
