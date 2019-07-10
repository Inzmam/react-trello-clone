import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) { this.setState({ email: event.target.value }); }
  handlePasswordChange(event) { this.setState({ password: event.target.value }); }

  handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: "http://localhost:3000/api/v1/login",
      headers: {}, 
      data: {
        "email": this.state.email,
        "password": this.state.password
      }
    }).then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({
        email: '',
        password: ''
      });
    });

    /*axios.post("http://localhost:3000/api/v1/login", { user }).then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({
        email: '',
        password: ''
      });
    });*/
  }

  render() {
    return (
      <div className="container-fluid main-container">
        <div className="col-md-4 offset-md-4">
          <h3>Log in to Trello</h3>
          <p>or create an account</p>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="user_email">Email</label>
              <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control" id="user_email" aria-describedby="emailHelp" placeholder="hermoine@spew.org.uk" />
              <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" id="password" placeholder="*********" />
            </div>
            <button type="submit" className="btn btn-lg btn-success login-btn">Log In</button>
          </form>

        </div>
      </div>
    );
  }
}

export default Login;
