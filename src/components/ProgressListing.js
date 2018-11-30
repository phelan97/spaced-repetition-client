import React from 'react';
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
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
  }
  @media only screen and (max-width: 500px) {
    .card-container {
      color: red;
      grid-template-columns: 1fr;
    }
  }
`}</style>
class ProgressListing extends React.Component {
  render() {
    const cardElements = dummyData.map(answerInfo => {
      const numGuesses = answerInfo.numCorrect + answerInfo.numIncorrect;
      return (<ProgressCard accuracy={answerInfo.numCorrect/numGuesses}
        englishWord = {answerInfo.englishWord}
        germanWord = {answerInfo.germanWord}
      />);
    })

    return (
      <div className="card-container">
        {cardElements}
        {style}
      </div>
    )
  }
}

export default ProgressListing;