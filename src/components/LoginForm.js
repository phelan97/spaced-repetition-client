import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './Error';
import Router from 'next/router';
import ButtonComp from './Button';


const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION(
          $email: String!,
          $password: String!) {
    login(email: $email, password: $password )
  }
`
// TODO: Refactor this into Login or Signup! 

const style = <style jsx>{`
  form {
    display: inline-block;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  form legend {
    text-align: center;
  }
  input[type="email"],
  input[type="password"] {
    outline: none;
    width: 100%;
    display: block;
    padding: 3px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: 2px solid gray;
    margin-bottom: 10px;
  }
  input[type="email"]:focus,
  input[type="password"]:focus {
    border-bottom: 2px solid blue;
    transition: 1s;
  }

  .btnDiv {
    display: flex;
    justify-content: center;
    margin-right: 6px;
    margin-bottom: 10px;
  }
`}</style>

class LoginForm extends Component {
  state = {
    loggedIn: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    errMsg: ''
  }
  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value})
    
  }
  render() {
  return (
    <Mutation mutation={LOGIN_MUTATION} variables={{email: this.state.email, password: this.state.password}}
      update={(cache, {data: {login}}) => {
        localStorage.setItem("Authorization", login);
        this.setState({loggedIn: true});
        Router.push('/learn-german');
      }
    }>
      {(login, {loading, error}) => {    
        return (
          <form method='post' onSubmit={(e) => {
            console.log('login mutation triggered');
            e.preventDefault();
            login();
          }}>
            <fieldset disabled={loading} aria-busy={loading}>
              <legend>Log in to your account</legend>
              <Error error={error} />
            
              {/* <label htmlFor="email">
                Email
              </label> */}
              <input 
              type='email' 
              name='email' 
              placeholder='Email' 
              value={this.state.email}
              onChange={this.saveToState} />
              {/* <label htmlFor="password">
                Password
              </label> */}
              <input 
              type='password' 
              name='password' 
              placeholder='Password' 
              value={this.state.password}
              onChange={this.saveToState} />
              <button type="submit">Log in</button>
              {/* <ButtonComp buttonText={'Log In!'} buttonLink={'/learn-german'} /> */}
            </fieldset>
            {style}
        </form>
      )
      }}
      </Mutation>
    );
  }

}

export default LoginForm;