import React, { Component } from 'react';
// import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
// import Error from './Errors';
// import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router'
import storageCheck from '../lib/storageCheck';
import { Query } from 'react-apollo';

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
  componentDidMount() {
    const token = storageCheck();
    
    if (!token) {
      return Router.push('/login');
    }
  }

  render() {
    return (
      <div>
        <p>This is where the Language Card stuff is going to go.</p>
        <p>Should look like props.germanWord, then input field, then if button is clicked, 
          it shows the english word</p>
          <Query query={QUESTION_QUERY}>
            {({error, loading, data}) => {
              if(error) return <p>Error!</p>
              if(loading) return <p>Loading...</p>
              if (!error) return <p>Single Item Component!!</p>
            }}
          </Query>
        
      </div>
    );
  };
  
}

export default LanguageCard;