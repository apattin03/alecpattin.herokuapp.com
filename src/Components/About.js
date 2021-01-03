import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Alec Pattin's Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Hello There!</h2>
            <p> Welcome to my digital space where I experiment, learn, and create! </p>
            
           <p></p>


    <h2>{}</h2>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Me</h2>
                  <p className="address">
                     <span><a href="mailto:apattin03@gmail.com">{email}</a></span>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
