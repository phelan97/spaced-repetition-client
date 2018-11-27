import React from 'react';

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => (
      <div key={i}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </div>
      
      
    ));
    
  }
  return (
    <div>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </div>
  );
  <style jsx>{`
      p {
        color: "red";
      }

      ul {
        padding: 0;
      }

      
    `}</style>
};

// DisplayError.defaultProps = {
//   error: {},
// };

// DisplayError.propTypes = {
//   error: PropTypes.object,
// };

export default DisplayError;