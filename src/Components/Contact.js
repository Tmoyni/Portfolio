import React from 'react';
import emailjs from 'emailjs-com';

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const EMAILJS_USERID = process.env.REACT_APP_EMAILJS_USERID


// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

class Contact extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    formErrors: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  }

  handleChange(e) {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'subject':
        formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }
      this.setState({ formErrors, [name]: value });
  }

  
  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { firstName, lastName, email, message } = this.state;

      // Set template params
      let templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      };
      
      // emailjs.send('emailjs_SERVICE_ID', 'emailjs_TEMPLATE_ID', templateParams, 'emailjs_userID')
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USERID)
      .then((result) => {
        console.log(`
        --SUBMITTING--
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Message: ${message}
      `);
      }, (error) => {
        console.log(error.text);
      });

      

      this.resetForm();
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  resetForm() {
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