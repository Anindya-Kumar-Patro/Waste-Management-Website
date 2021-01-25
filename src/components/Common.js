import React from 'react'
import { NavLink } from 'react-router-dom'
import './Common.css'

const Common = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-5 mx-auto waste">
                    <img src={props.imagename} alt="..."/>
                    <h1>{props.wastename}</h1>
                    <p>{props.wastedescription}</p>
                    <h5>{props.subsub}</h5>
                    <NavLink to="/waste-management">
                        <button className="btn btn-primary">Back to Waste Management</button>
                    </NavLink>
                </div>
                <div className="col-7 total-form">
                    <div className="col-7 mx-auto">
                        <h1>Fill out this form and we will pick up the wastes</h1>
                    <form>
                        <div className="row">
                            <div className="col">
                            <input type="text" className="form-control" placeholder="First name" required/>
                            </div>
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Last name"/>
                            </div>
                        </div><br/>
                        <div>
                            <input type="email" className="form-control" placeholder="Email Id" required/>
                        </div><br/>
                        <div>
                            <input type="text" className="form-control" placeholder="Address" required/>
                        </div><br/>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="State" required/>
                            </div>
                           
                            <div className="col">
                                <input type="text" className="form-control" placeholder="City" required/>
                            </div>
                            <div className="col">
                                <input type="number" className="form-control" placeholder="Pincode" required/>
                            </div>
                            
                        </div><br/>
                        <div>
                            <input type="number" className="form-control" placeholder="Phone Number" required/>
                        </div><br/>
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input chkbox-styling" id="customCheckDisabled1" required/>
                        <label className="custom-control-label chktext" for="customCheckDisabled1">Organic</label>

                        <input type="checkbox" className="custom-control-input chkbox-styling" id="customCheckDisabled1" required/>
                        <label className="custom-control-label chktext" for="customCheckDisabled1">In-Organic</label>

                        <input type="checkbox" className="custom-control-input chkbox-styling" id="customCheckDisabled1" required/>
                        <label className="custom-control-label chktext" for="customCheckDisabled1">E-waste</label>

                        <input type="checkbox" className="custom-control-input chkbox-styling" id="customCheckDisabled1" required/>
                        <label className="custom-control-label chktext" for="customCheckDisabled1">Medical Waste</label>
                        </div><br/>
                        <button class="btn btn-primary" type="submit">Submit form</button>

                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Common
