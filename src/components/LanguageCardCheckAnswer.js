import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CHECK_ANSWER = gql`
  mutation CHECKANSWER(
          $germanAnswer: String!) {
            checkAnswer(germanAnswer:$germanAnswer)
  }
`;

const LanguageCardCheckAnswer = () => {
  const wordGuess = '';

  return (
    <Mutation mutation={CHECK_ANSWER} variables={{wordGuess}}>
      {(checkAnswer, {loading, error, data }) => {    
        return (<form method='post' onSubmit={async (e) => {
          e.preventDefault();
          const data = await checkAnswer();
          console.log(data)

        }}>
        <fieldset disabled={loading} aria-busy={loading}>
          <h2>What is the English word for this German word?</h2>
          <div error={error} />
          <label htmlFor="wordGuess">
            
          </label>
          <input 
          type='text' 
          name='wordGuess' 
          placeholder='English word is...' 
          
           />
           <br />

           <button type='submit'>Login!</button>
        </fieldset></form>)
      }}
    </Mutation>
  );
}

export default LanguageCardCheckAnswer;