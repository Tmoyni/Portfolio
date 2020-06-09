import React from 'react';

class Contact extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    }

    handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        console.log("submitting", this.state )
            fetch('http://localhost:3000/contacts', {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                message: this.state.message,
              }),
            })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            }).then(this.setState({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
              }))
      }
    
    render() {
        console.log(this.state)
        return (
            <div className="contact__form">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label className="contact__label" for="firstName">First Name:</label>
                        <input type="text" className="contact__input" onChange={(e) => this.handleChange(e)} label="firstName" placeholder="First Name" name="firstName" id="firstName" value={this.state.firstName}/>
                    <label className="contact__label" for="lastName">Last Name:</label>
                        <input type="text" className="contact__input" onChange={(e) => this.handleChange(e)} label="lastName" placeholder="Last Name" name="lastName" id="lastName" value={this.state.lastName}/>
                    <label className="contact__label" for="email">Email Address:</label>
                        <input type="email" className="contact__input" onChange={(e) => this.handleChange(e)} label="email" placeholder="Email Address" name="email" id="email" value={this.state.email}/>
                    <label className="contact__label" for="message">Message:</label>
                        <input  className="contact__input" onChange={(e) => this.handleChange(e)} label="message" placeholder="Message" name="message" id="message" value={this.state.message}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Contact;



       
       