import React from 'react';

const style = <style jsx>{`
  .progress-card {
    text-align: center;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 2px;
    box-shadow: 2px 2px #ccc;
  }
  .question-info {
    background-color: rgba(0, 0, 0, 0.25);
    display: block;
    min-width: 200px; 
  }
  .question-accuracy {

  }
`}</style>;

function ProgressCard(props) {
  // TODO: manage color state from here
  if(props.accuracy > .80) {

  } else if(props.accuracy > .60) {

  } else {

  }

  return (
    <div className="progress-card">
      <span className="question-info">{props.englishWord + ' / ' + props.germanWord}</span>
      <span className="question-accuracy">{props.accuracy}</span>
      {style}
    </div>
  );
}

export default ProgressCard;