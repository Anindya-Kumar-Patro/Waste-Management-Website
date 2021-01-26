import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="container contact"> 
	<div className="row">
		<div className="col-md-3">
			<div className="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<h2>Contact Us</h2>
				<h4>We would love to hear from you !</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
               <div className="form-group">
				  
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
				  </div><br/>
				</div>
				<div className="form-group">
				 
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
				  </div>
				</div><br/>
				<div className="form-group">
				  
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
				  </div>
				</div>
                <br/>
				<div className="form-group">
				  
				  <div className="col-sm-10">
					<textarea className="form-control" placeholder="Enter Message" rows="5" id="comment"></textarea>
				  </div>
				</div>
                <br/>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-default">Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    )
}

export default Contact
