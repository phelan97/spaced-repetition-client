import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($firstname: String!, 
          $lastname: String!, 
          $email: String!,
          $password: String!) {
    signup(email: $email, password: $password, 
      first: $firstname, last: $lastname ) 
  }
`

// type Mutation { 
  // signup(email: String!, 
  // password: String!, 
  // first: String!, 
  // last: String!): String! 
  
  // login(email: String!, password: String!): String! }

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }
  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
    render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, {error, loading}) => {
       
      return (<form method='post' onSubmit={(e) => {
          e.preventDefault();
          signup();
        }}>
        <fieldset disabled={loading} aria-busy={loading}>
          <h2>Signup for an Account</h2>
          <p>Error: {error}</p>
          <label htmlFor="firstname">
            First Name
          </label>
          <input 
            type='text' 
            name='firstname' 
            placeholder='firstname' 
            value={this.state.firstname}
            onChange={this.saveToState} />
          <br />
          <label htmlFor="lastname">
            Last Name
          </label>
          <input 
            type='text' 
            name='lastname' 
            placeholder='lastname' 
            value={this.state.lastname}
            onChange={this.saveToState} />
          <br />
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
          <button type='submit'>Sign Up!</button>
        </fieldset>

        
      </form>)
         
        }}
      </Mutation>
    );
  }
}

export default RegistrationForm;