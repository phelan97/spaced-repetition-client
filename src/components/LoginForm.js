import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './Errors';
import Router from 'next/router'


const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION(
          $email: String!,
          $password: String!) {
    login(email: $email, password: $password ) 
  }
`
// TODO: Refactor this into Login or Signup! 

const style = <style jsx>{`
  .login-container {
    margin-top: 45px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 80%;
  }

  form {
    display: inline-block;
    text-align: left;
    margin-left: auto;
    margin-right: auto;

  }
  input {
    display: block;
    padding: 3px;
    border: none;
  }
`}</style>

class LoginForm extends Component {
  state = {
    login: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    errMsg: ''
  }
  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value})
    
  }

  // {!login && (
  //   <input
  //     value={name}
  //     onChange={e => this.setState({ name: e.target.value })}
  //     type="text"
  //     placeholder="Your name"
  //   />
  // )}


    render() {

    return (
      <React.Fragment className="login-container">
        <Mutation mutation={LOGIN_MUTATION} variables={this.state}>
          {(login, {loading, error, data }) => {    

        return (
        <div className="login-container">
          <form method='post' onSubmit={async (e) => {
              e.preventDefault();
              const data = await login();
              localStorage.setItem("Authorization", data.data.login)
              this.setState({login: data.data.login})
              Router.push('/learn-german')

            }}>

            <fieldset disabled={loading} aria-busy={loading}>
              <legend>Log in to your account</legend>
              <Error error={error} />
            
              <label htmlFor="email">
                Email
              </label>
              <input 
              type='email' 
              name='email' 
              placeholder='Email' 
              value={this.state.email}
              onChange={this.saveToState} />
              <label htmlFor="password">
                Password
              </label>
              <input 
              type='password' 
              name='password' 
              placeholder='Password' 
              value={this.state.password}
              onChange={this.saveToState} />
              <button type='submit'>Log in!</button>
            </fieldset>
        </form>
        {style}
        </div>
        )
        }}
        </Mutation>
      </React.Fragment>
    );
  }

}

export default LoginForm;