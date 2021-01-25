import React from 'react'
import Common from './Common'
import medical from '../images/medical.jpg'

const Medical = () => {
    return (
        <>
            <Common wastename="Medical Waste" imagename={medical} wastedescription="Waste generated during medical research, testing, diagnosis, immunization, 
            or treatment of either human beings or animals. Some examples are culture dishes, glassware, bandages, gloves, discarded sharps like needles or 
            scalpels, swabs, and tissue." subsub="Be proud of yourself you are protecting your environment"/>
        </>
    )
}

export default Medical
