import React from 'react';
import axios from 'axios';

class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) { this.setState({ name: event.target.value }); }

  handleEmailChange(event) { this.setState({ email: event.target.value }); }

  handlePasswordChange(event) { this.setState({ password: event.target.value }); }

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    axios.post("http://localhost:3000/api/v1/sign_up", { user }).then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({
        name: '',
        email: '',
        password: ''
      });
    });
  }

  render() {
    return (
      <div className="container-fluid main-container">
        <div className="col-md-4 offset-md-4">
          <h3>Create a Trello Account</h3>
          <p>or sign in to your account</p>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="username">Name</label>
              <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-control" id="username" aria-describedby="emailHelp" placeholder="e.g, Turanga Leela" />
              <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="user_email">Email</label>
              <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control" id="user_email" aria-describedby="emailHelp" placeholder="leela@planetexpress.nnyc" />
              <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" id="password" placeholder="*********" />
            </div>
            <button type="submit" className="btn btn-lg btn-primary login-btn">Create New Account</button>
          </form>

        </div>
      </div>
    );
  }
}

export default Registration;
