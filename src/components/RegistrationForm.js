import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './Error';
import Router from 'next/router';
import ButtonComp from './Button';


const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($firstname: String!, 
          $lastname: String!, 
          $email: String!,
          $password: String!) {
    signup(email: $email, password: $password, 
      first: $firstname, last: $lastname ) 
  }
`
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
  input[type="password"],
  input[type="text"] {
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
  input[type="password"]:focus,
  input[type="text"]:focus {
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
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}
        update={(cache, {data: {signup}}) => {
          Router.push('/login');
        }
      }>
        {(signup, {error, loading}) => {
          if(error) return <Error error={error} />;
       
      return (
        <form method='post' onSubmit={(e) => {
          console.log('form submit');
          e.preventDefault();
          signup();
        }}>
        <fieldset disabled={loading} aria-busy={loading}>
          <legend>Sign up for an account</legend>
          <Error error={error} />
          {/* <label htmlFor="firstname">
            First Name
          </label> */}
          <input 
            type='text' 
            name='firstname' 
            placeholder='First name' 
            value={this.state.firstname}
            onChange={this.saveToState} />
          {/* <label htmlFor="lastname">
            Last Name
          </label> */}
          <input 
            type='text' 
            name='lastname' 
            placeholder='Last name' 
            value={this.state.lastname}
            onChange={this.saveToState} />
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
          <button>Sign up!</button>
          {/* <ButtonComp buttonText={'Sign Up!'} buttonLink={'/learn-german'} className='button' /> */}
        </fieldset>
        {style}
      </form>)
         
        }}
      </Mutation>
    );
  }
}

export default RegistrationForm;