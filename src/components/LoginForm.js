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
  form {
    display: inline-block;
    text-align: left;
    margin-left: auto;
    margin-right: auto;

  }
  input[type="email"],
  input[type="password"] {
    width: 100%;
    display: block;
    padding: 3px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: 2px solid gray;
  }
  input
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

      {/* <Mutation mutation={LOGIN_MUTATION} variables={this.state} onCompleted={data => {
  localStorage.setItem("Authorization", data.data.login)
  this.setState({login: data.data.login})
  Router.push('/learn-german')
}}> 
{(login) => {
  return (<form method='post' onSubmit={e => {
      e.preventDefault();
      login()
      }}>
 */}

    return (
      <Mutation mutation={LOGIN_MUTATION} variables={this.state} onCompleted={async data => {
        console.log(data)
        await localStorage.setItem("Authorization", data.login)
        await this.setState({login: data.login})
        Router.push('/learn-german')
      }}> 
        {(login, { loading, error }) => {    

      return (
        <form method='post' onSubmit={async (e) => {
          e.preventDefault();
          login();
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
            {style}
          </form>
          
        )
        }}
        </Mutation>
    );
  }

}

export default LoginForm;