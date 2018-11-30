import React from 'react';
import ProgressCard from './ProgressCard';

const dummyData = [
  {
    numCorrect: 3,
    numIncorrect: 2
  },
  {
    numCorrect: 3,
    numIncorrect: 0,
  },
  {
    numCorrect: 1,
    numIncorrect: 1,
  }
];

class ProgressListing extends React.Component {
  render() {
    const cardElements = dummyData.map(answerInfo => {
      const numGuesses = answerInfo.numCorrect + answerInfo.numIncorrect;
      return <ProgressCard accuracy={answerInfo.numCorrect/numGuesses} />;
    })

    return (
      <ul>
        {cardElements}
      </ul>
    )
  }
}

export default ProgressListing;