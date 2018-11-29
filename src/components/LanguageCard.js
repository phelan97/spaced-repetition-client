import React, { Component } from 'react';
import gql, { resetCaches } from 'graphql-tag';
import Error from './Errors';
// import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router'
import storageCheck from '../lib/storageCheck';
import { Query, Mutation } from 'react-apollo';
import LanguageCardCheckAnswer from './LanguageCardCheckAnswer';

const QUESTION_QUERY = gql`
  query {
    question {
      id
      englishWord
      germanWord
    }
  }
`;

const CHECK_ANSWER = gql`
  mutation CHECKANSWER(
          $germanAnswer: String!) {
            checkAnswer(germanAnswer:$germanAnswer)
  }
`;


class LanguageCard extends Component {
  state = {
    wordGuess: '',
    germanAnswer: '',
  }

  componentDidMount() {
    const token = storageCheck();
    
    if (!token) {
      return Router.push('/login');
    }

    
  }

  saveGuessToState = (e) => {
    this.setState({ wordGuess: e.target.value})
  }

  saveToState = (word) => {
    this.setState({ germanAnswer: word})
  }

  clearState = () => {
    this.setState({
      germanAnswer: '',
    })
  }
  render() {
    return (
      <div>
        <p>This is where the Language Card stuff is going to go.</p>
        <p>Should look like props.germanWord, then input field, then if button is clicked, 
          it shows the english word</p>
        <br />
        <Query query={QUESTION_QUERY}>
          {({error, loading, data, refetch}) => {
            console.log('Query is running', data)
            if(error) return <p>Error!</p>
            if(loading) return <p>Loading...</p>
            if(!data.question) return <p>No data found.</p>
            return (
              <React.Fragment>
                <p className='englishWord'>{data.question.englishWord}</p>
                <Mutation mutation={CHECK_ANSWER} onCompleted={data => {
                  refetch();
                  this.clearState();
                  this.setState({germanWord: 'test'});
                }}>
                {(checkAnswer, {error}) => {    
                  return (<form method='post' onSubmit={e => {
                    {/* console.log('the state is', this.state) */}
                    e.preventDefault();
                    checkAnswer({variables: {
                      germanWord: data.question.germanWord, 
                      englishWord:  data.question.englishWord,
                      germanAnswer: e.currentTarget.wordGuess.value
                    }});
                    {/* console.log('data from the mutation is', data) */}
                  }}>
                    <fieldset disabled={loading} aria-busy={loading}>
                      <h2>What is the English word for this German word?</h2>
                      <Error error={error} />
                      <label htmlFor="wordGuess"></label>
                      <input 
                      type='text' 
                      name='wordGuess' 
                      placeholder='English word is...' 
                      />
                      <br />
                      <button type='submit'>Am I right?</button>
                    </fieldset>
                  </form>)
                }}
                </Mutation>
              </React.Fragment>)
          }}
        </Query>      
      </div>
    );
  };
  
}

export default LanguageCard;



// import React, { Component } from 'react';
// import gql, { resetCaches } from 'graphql-tag';
// import Error from './Errors';
// // import { ApolloConsumer } from 'react-apollo';
// import Router from 'next/router'
// import storageCheck from '../lib/storageCheck';
// import { Query, Mutation } from 'react-apollo';
// import LanguageCardCheckAnswer from './LanguageCardCheckAnswer';

// const QUESTION_QUERY = gql`
//   query {
//     question {
//       id
//       englishWord
//       germanWord
//     }
//   }
// `;

// const CHECK_ANSWER = gql`
//   mutation CHECKANSWER(
//           $germanAnswer: String!) {
//             checkAnswer(germanAnswer:$germanAnswer)
//   }
// `;


// class LanguageCard extends Component {
//   state = {
//     wordGuess: '',
//     germanAnswer: '',
//   }

//   componentWillMount() {
//     try {
//       // The problem was here
//       const authToken = localStorage.getItem("Authorization")
//       console.log('AuthToken', authToken)
//       if (authToken !== null) {
//         console.log('AuthToken', authToken)
//       } else {
//         Router.push('/login');
//       }
//     } catch (e) {
//         // console.log('Login error', e.message);
//         return false;
//     }
//   }

//   saveGuessToState = (e) => {
//     this.setState({ wordGuess: e.target.value})
//   }

//   saveToState = (word) => {
//     this.setState({ germanAnswer: word})
//   }

//   clearState = () => {
//     this.setState({
//       germanAnswer: '',
//     })
//   }

//   loadQuery = (variables) => {
//     return (
//         <Query query={QUESTION_QUERY}>
//           {({error, loading, data, refetch}) => {
//             refetch();
//             console.log('Query is running', data)
//             if(error) return <p>Error!</p>
//             if(loading) return <p>Loading...</p>
//             if(!data.question) return <p>No data found.</p>
            
//             variables.germanWord = data.question.germanWord;
//             variables.englishWord = data.question.englishWord;
            
//             return (<React.Fragment>
//               <p className='englishWord'>{variables.englishWord}</p>

//             </React.Fragment>)
//           }}
//         </Query>
//     )
//   }

//   render() {
//     const variables = {
//       wordGuess: '',
//       germanAnswer: '',
//       englishWord: ''
//     }

//     return (
//       <div>
//         <p>This is where the Language Card stuff is going to go.</p>
//         <p>Should look like props.germanWord, then input field, then if button is clicked, 
//           it shows the english word</p>
//         <br />
//         <p>IS THIS CODE RUNNING?</p>
//         {this.loadQuery(variables)}
        
//         <Mutation mutation={CHECK_ANSWER} variables={variables}>
//       {(checkAnswer, {loading, error, data }) => {    
//         return (<form method='post' onSubmit={async (e) => {
          
//           {/* console.log('the state is', this.state) */}
//           e.preventDefault();
//           const data = await checkAnswer();
//           {/* console.log('data from the mutation is', data) */}
//           await this.clearState(data.data.checkAnswer);
//           this.forceUpdate();
//           this.setState({germanWord: 'test'})


//         }}>
//         <fieldset disabled={loading} aria-busy={loading}>
//           <h2>What is the English word for this German word?</h2>
//           <Error error={error} />
//           <label htmlFor="wordGuess">
            
//           </label>
//           <input 
//           type='text' 
//           name='wordGuess' 
//           placeholder='English word is...' 
//           onChange={(e) => variables.germanAnswer = e.target.value}
//            />
//            <br />

//            <button type='submit'>Am I right?</button>
//         </fieldset></form>)
//       }}
//     </Mutation>
        
//       </div>
//     );
//   };
  
// }

// export default LanguageCard;