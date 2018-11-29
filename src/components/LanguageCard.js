import React, { Component } from 'react';
import gql, { resetCaches } from 'graphql-tag';
import Error from './Errors';
// import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router'
import storageCheck from '../lib/storageCheck';
import { Query, Mutation } from 'react-apollo';
import LanguageCardCheckAnswer from './LanguageCardCheckAnswer';

const QUESTION_QUERY = gql`
  query {
    question {
      id
      englishWord
      germanWord
    }
  }
`;

const CHECK_ANSWER = gql`
  mutation CHECKANSWER(
          $germanAnswer: String!) {
            checkAnswer(germanAnswer:$germanAnswer)
  }
`;


class LanguageCard extends Component {
  state = {
    wordGuess: '',
    germanAnswer: '',
  }

  componentDidMount() {
    const token = storageCheck();
    
    if (!token) {
      return Router.push('/login');
    }

    
  }

  saveGuessToState = (e) => {
    this.setState({ wordGuess: e.target.value})
  }

  saveToState = (word) => {
    this.setState({ germanAnswer: word})
  }

  clearState = (input) => {
    this.setState({
      previousAnswer: input,
    })
  }

  render() {
    const variables = {
      wordGuess: '',
      germanAnswer: '',
      englishWord: ''
    }

    return (
      <div>
        <p>This is where the Language Card stuff is going to go.</p>
        <p>Should look like props.germanWord, then input field, then if button is clicked, 
          it shows the english word</p>
        <br />
        <Query query={QUESTION_QUERY}>
          {({error, loading, data}) => {
            console.log('Query is running', data)
            if(error) return <p>Error!</p>
            if(loading) return <p>Loading...</p>
            if(!data.question) return <p>No data found.</p>
            
            variables.germanWord = data.question.germanWord;
            variables.englishWord = data.question.englishWord;

            return (<React.Fragment>
              <p className='englishWord'>{variables.englishWord}</p>

            </React.Fragment>)
          }}
        </Query>
        
        <Mutation mutation={CHECK_ANSWER} variables={variables}>
      {(checkAnswer, {loading, error, data }) => {    
        return (<form method='post' onSubmit={async (e) => {
          
          console.log('the state is', this.state)
          e.preventDefault();
          const data = await checkAnswer();
          console.log('data from the mutation is', data)
          await this.clearState(data.data.checkAnswer);


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
          onChange={(e) => variables.germanAnswer = e.target.value}
           />
           <br />

           <button type='submit'>Am I right?</button>
        </fieldset></form>)
      }}
    </Mutation>
        {/* <LanguageCardCheckAnswer /> */}
        
      </div>
    );
  };
  
}

export default LanguageCard;