import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <p>This is the login form</p>
        <form 
          className='login-form'
        >
        <label htmlFor='name'>First Name</label>
        <input type='text' name='name'></input>
        <br />
        <label htmlFor='username'>Username</label>
        <input type='text' name='username'></input>
        <br />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password'></input>
        <br />
        <button
          type="submit">
          Register
        </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

// type Query { test: String! }

// type Mutation { signup(email: String!, password: String!, first: String!, last: String!): String! login(email: String!, password: String!): String! }