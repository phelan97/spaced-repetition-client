import React, { Component } from 'react';
import gql, { resetCaches } from 'graphql-tag';
// import Error from './Errors';
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


class LanguageCard extends Component {
  state = {
    wordGuess: ''
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

  render() {
    const variables = {
      wordGuess: '',
      germanWord: '',
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
            console.log('Query is running')
            if(error) return <p>Error!</p>
            if(loading) return <p>Loading...</p>
            if(!data.question) return <p>No data found.</p>
            
            variables.germanWord = data.question.germanWord;
            variables.englishWord = data.question.englishWord;

            return (<React.Fragment>
              <p className='germanWord'>{variables.germanWord}</p>

            </React.Fragment>)
          }}
        </Query>
        <LanguageCardCheckAnswer />
        
      </div>
    );
  };
  
}

export default LanguageCard;