import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './Errors';

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION(
          $email: String!,
          $password: String!) {
    login(email: $email, password: $password ) 
  }
`

class LoginForm extends Component {
  state = {
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
      <Mutation mutation={LOGIN_MUTATION} variables={this.state}>
        {(login, {loading, error, data }) => {    

      return (<form method='post' onSubmit={async (e) => {
          e.preventDefault();
          const data = await login();
          localStorage.setItem('Authorization ', data.data.login)

          
          
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