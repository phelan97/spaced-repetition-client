import React from 'react';

const style = <style jsx>{`
  .progress-card {
    text-align: center;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 2px 2px #ccc;
    padding: 0px;
  }
  .question-info {
    padding: 3px;
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.25);
    display: block;
    min-width: 200px;
  }
  .question-accuracy {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 3px;
  }
`}</style>;

function ProgressCard(props) {
  // TODO: manage color state from here
  if(props.accuracy > .80) {

  } else if(props.accuracy > .60) {

  } else {

  }

  const accuracyText = `Word accuracy: ${Math.round(props.accuracy*100)}%`;
  return (
    <div className="progress-card">
      <span className="question-info">{props.englishWord + ' / ' + props.germanWord}</span>
      <span className="question-accuracy">{accuracyText}</span>
      {style}
    </div>
  );
}

export default ProgressCard;