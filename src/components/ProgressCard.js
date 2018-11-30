import React from 'react';

const style = <style jsx>{`

`}</style>;

function ProgressCard(props) {
  if(props.accuracy > .80) {

  } else if(props.accuracy > .60) {

  } else {

  }

  return (
    <li className="progress-card">
      {answerInfo.numCorrect/numGuesses}
    </li>
    {style}
  );
}

export default ProgressCard;