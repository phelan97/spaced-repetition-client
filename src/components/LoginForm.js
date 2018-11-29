import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './Errors';
import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router'


const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION(
          $email: String!,
          $password: String!) {
    login(email: $email, password: $password ) 
  }
`
// TODO: Refactor this into Login or Signup! 

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
      <Mutation mutation={LOGIN_MUTATION} variables={this.state} onCompleted={data => {
        localStorage.setItem("Authorization", data.data.login)
        this.setState({login: data.data.login})
        Router.push('/learn-german')
      }}> 
        {(login) => {    

      return (<form method='post' onSubmit={async (e) => {
          e.preventDefault();
          login();
        }}>

        <fieldset disabled={loading} aria-busy={loading}>
          <h2>Login to Your Account</h2>
          <Error error={error} />
         
          <label htmlFor="email">
            Email
          </label>
          <input 
          type='email' 
          name='email' 
          placeholder='email' 
          value={this.state.email}
          onChange={this.saveToState} />
          <br />
          <label htmlFor="password">
            Password
          </label>
          <input 
          type='password' 
          name='password' 
          placeholder='password' 
          value={this.state.password}
          onChange={this.saveToState} />
          <br />
          <button type='submit'>Login!</button>
        </fieldset>

        
      </form>)
         
        }}
      </Mutation>
    );
  }

}

export default LoginForm;