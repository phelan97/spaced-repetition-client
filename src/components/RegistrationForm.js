import React, { Component } from 'react';

class RegistrationForm extends Component {
  render() {
    return (
      <div>
        <p>This is the registration from</p>
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

export default RegistrationForm;