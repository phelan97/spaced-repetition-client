// import styled from 'styled-components';
import React from 'react';

<link rel='stylesheet' type='text/css' href='./errors.css' />

// import PropTypes from 'prop-types';

// const ErrorStyles = styled.div`
//   padding: 2rem;
//   background: white;
//   margin: 2rem 0;
//   border: 1px solid rgba(0, 0, 0, 0.05);
//   border-left: 5px solid red;
//   p {
//     margin: 0;
//     font-weight: 100;
//   }
//   strong {
//     margin-right: 1rem;
//   }
// `;

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