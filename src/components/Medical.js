import React from 'react'
import Common from './Common'
import medical from '../images/medical.jpg'

const Medical = () => {
    return (
        <>
            <Common wastename="Medical Waste" imagename={medical} wastedescription="Organic waste is any material that is biodegradable and comes from either a plant or an animal. 
            Examples of organic waste include green waste, food waste, 
            food-soiled paper, non-hazardous wood waste, green waste,
            and landscape and pruning waste. We take these wastes from you and dump at farms to make biogas and 
            manuares" subsub="Be proud of yourself you are protecting your environment"/>
        </>
    )
}

export default Medical
