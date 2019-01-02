import React from 'react';
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
  allQuestions {
    id
    englishWord
    germanWord,
    numCorrect,
    numIncorrect
  }
}
`;

class ProgressListing extends React.Component {
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

    let cardElements = null;
    return (
      <Query query={ALL_QUESTIONS_ACCURACY} onCompleted={data => {
          // this.setState({allQuestions: data.allQuestions});
          console.log('onCompleted data', data);
      }}>
        {({data, error, loading}) => {
          let cardElements = null;
          if(data.allQuestions) {
            console.log('DATA', data);
            cardElements = data.allQuestions.map(question => {
              return (
                <ProgressCard key={question.id}
                  numCorrect={question.numCorrect}
                  numIncorrect={question.numIncorrect}
                  englishWord = {question.englishWord}
                  germanWord = {question.germanWord}
                />
              );
            });
          }
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