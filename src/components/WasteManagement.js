import React from 'react'
import Card from './Card'
import ewaste from '../images/ewaste.png'
import organic from '../images/organic.jpg'
import inorganic from '../images/inorganic.jpg'
import medical from '../images/medical.jpg'


const WasteManagement = () => {
    return (
        <div>
            <Card cardimage={organic} cardtitle = "Organic Waste" cardbody="If you want us to collect this specific type of waste from your house please Click below" cardlink="/organic"/>
            <Card cardimage={inorganic} cardtitle = "InOrganic Waste" cardbody="If you want us to collect this specific type of waste from your house please Click below" cardlink="/inorganic"/>
            <Card cardimage={ewaste} cardtitle = "Electronic Waste" cardbody="If you want us to collect this specific type of waste from your house please Click below" cardlink="/ewaste"/>
            <Card cardimage={medical} cardtitle = "Medical Waste" cardbody="If you want us to collect this specific type of waste from your house please Click below" cardlink="/medical"/> 
        </div>
    )
}

export default WasteManagement
