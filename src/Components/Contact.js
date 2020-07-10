import React from 'react';

class Contact extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.fetchContact()
  }

  fetchContact() {
    fetch('https://moynihan-portfolio-api.herokuapp.com/api/v1/contacts', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        message: this.state.message,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .then(this.clearState())
  }
  
  clearState() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    })
  }
    
  render() {
    return (
      <form className="contact__form" onSubmit={(e) => this.handleSubmit(e)}>
        <label className="contact__label" htmlFor="firstName">First Name:</label>
        <input type="text" className="contact__input" onChange={(e) => this.handleChange(e)} label="firstName" placeholder="First Name" name="firstName" id="firstName" value={this.state.firstName} required/>
        
        <label className="contact__label" htmlFor="lastName">Last Name:</label>
        <input type="text" className="contact__input" onChange={(e) => this.handleChange(e)} label="lastName" placeholder="Last Name" name="lastName" id="lastName" value={this.state.lastName} required/>

        <label className="contact__label" htmlFor="email">Email Address:</label>
        <input type="email" className="contact__input" onChange={(e) => this.handleChange(e)} label="email" placeholder="Email Address" name="email" id="email" value={this.state.email} required/>

        <label className="contact__label" htmlFor="message">Message:</label>
        <textarea  className="contact__input" onChange={(e) => this.handleChange(e)} label="message" placeholder="Message" name="message" id="message" value={this.state.message}  rows="4" required/>

        <input className="btn contact__btn" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Contact;      