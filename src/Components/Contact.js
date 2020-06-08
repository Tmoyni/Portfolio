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
            <form onSubmit={(e) => this.handleSubmit(e)}>
                First Name:<input type="text" onChange={(e) => this.handleChange(e)} label="firstName" placeholder="First Name" name="firstName" value={this.state.firstName}/>
                Last Name:<input type="text" onChange={(e) => this.handleChange(e)} label="lastName" placeholder="Last Name" name="lastName" value={this.state.lastName}/>
                Email Address:<input type="email" onChange={(e) => this.handleChange(e)} label="email" placeholder="Email Address" name="email" value={this.state.email}/>
                Message:<input  onChange={(e) => this.handleChange(e)} label="message" placeholder="Message" name="message" value={this.state.message}/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Contact;



       
       