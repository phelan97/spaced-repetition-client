import React, {Component} from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import storageCheck from '../lib/storageCheck';
import ProgressCard from './ProgressCard';

const dummyData = [
  {
    englishWord: 'english word',
    germanWord: 'german word',
    numCorrect: 3,
    numIncorrect: 2
  },
  {
    englishWord: 'english word',
    germanWord: 'german word',
    numCorrect: 3,
    numIncorrect: 0,
  },
  {
    englishWord: 'english word',
    germanWord: 'german word',
    numCorrect: 1,
    numIncorrect: 1,
  }
];

 const style = <style jsx>{`
  .card-container {
    display: grid;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  @media only screen and (max-width: 600px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }
`}</style>

const ALL_QUESTIONS_ACCURACY = gql`
query {
  question {
    id
    englishWord
    germanWord,
    numCorrect,
    numIncorrect
  }
}
`;

class ProgressListing extends Component {
  componentDidMount() {
    const token = storageCheck();
    if (!token) {
      return Router.push('/login');
    }
  }

  render() {
    // const cardElements = dummyData.map(question => {
    //   const numGuesses = question.numCorrect + question.numIncorrect;
    //   return (<ProgressCard accuracy={question.numCorrect/numGuesses}
    //     englishWord = {question.englishWord}
    //     germanWord = {question.germanWord}
    //   />);
    // })

    let cardElements = <p>temp</p>;
    return (
      <Query query={ALL_QUESTIONS_ACCURACY} onCompleted={data => {
        console.log(data);
        cardElements = data.map(question => {
          const numGuesses = question.numCorrect + question.numIncorrect;
          return (<ProgressCard accuracy={question.numCorrect/numGuesses}
            englishWord = {question.englishWord}
            germanWord = {question.germanWord}
          />);
        })
      }}>
        {({error, loading, data, refetch}) => {
          return (
            <div className="card-container">
              {cardElements}
              {style}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default ProgressListing;