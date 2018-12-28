import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Error from './Error';

const CHECK_ANSWER = gql`
  mutation CHECKANSWER(
          $germanAnswer: String!) {
            checkAnswer(germanAnswer:$germanAnswer)
  }
`;

class LanguageCardCheckAnswer extends Component {
  state = {
    germanAnswer: '',
  }

  saveToState = (e) => {
    this.setState({ germanAnswer: e.target.value})
  }

  render() {
  return (
    <Mutation mutation={CHECK_ANSWER} variables={this.state}>
      {(checkAnswer, {loading, error, data }) => {    
        return (<form method='post' onSubmit={async (e) => {
          e.preventDefault();
          const data = checkAnswer();
          console.log('data from the mutation is', data)

        }}>
        <fieldset disabled={loading} aria-busy={loading}>
          <h2>What is the English word for this German word?</h2>
          <Error error={error} />
          <label htmlFor="wordGuess">
            
          </label>
          <input 
          type='text' 
          name='wordGuess' 
          placeholder='English word is...' 
          onChange={this.saveToState}
           />
           <br />

           <button type='submit'>Am I right?</button>
        </fieldset></form>)
      }}
    </Mutation>
  );
}
}

export default LanguageCardCheckAnswer;