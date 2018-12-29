import React, { Component } from 'react';
import gql, { resetCaches } from 'graphql-tag';
import Error from './Error';
// import { ApolloConsumer } from 'react-apollo';
import Router from 'next/router'
import storageCheck from '../lib/storageCheck';
import { Query, Mutation } from 'react-apollo';
import Link from 'next/link';
import LanguageCardCheckAnswer from './LanguageCardCheckAnswer';

const ShowComponent = (props) => {
  return (
    <div>
      <p>
        {props.correctAnswer ? 'You were right!' : 'You were wrong!'}
      </p>
      <style jsx>{`
          p {
            color: #021647;
            margin-top: 20px;
          }

          `}</style>
    </div>
  );
};

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
    feedbackState: false
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
        
        <Query query={QUESTION_QUERY}>
          {({error, loading, data, refetch}) => {
            {/* console.log('Query is running', data) */}
            if(error) {
              {/* this.clearState(); */}
              setTimeout(() => refetch(), 1000);
              return <p>Error!</p>
            }
            {/* if(loading) return <p> </p> */}
            if(!data.question) return <p></p>
            if(this.state.germanWord !== data.question.germanWord) {
              this.setState({germanWord: data.question.germanWord});
            }
            return (
              <React.Fragment>
                <section className="wordContainer">
                  <Link href="/stats"><button className='statsButton'>Show stats</button></Link>
                  <h2 className='englishWordLabel'>English</h2>
                  <div className='englishWord container'>
                    <h2 className='englishWord word'>{data.question.englishWord}</h2>
                  </div> 
                  <Mutation mutation={CHECK_ANSWER} onCompleted={data => {
                    refetch();
                    this.clearState();
                    {/* this.setState({germanWord: ''}); */}
                    this.setState({feedbackState: true})
                  }}>
                  {(checkAnswer, {error}) => {    
                    return (<form id='germanForm' method='post' onSubmit={async e => {
                      {/* console.log('the state is', this.state) */}
                      e.preventDefault();
                      let wordGuess;

                      if (e.currentTarget.wordGuess) {
                        wordGuess = e.currentTarget.wordGuess.value;
                      } 
                      
                      document.getElementById("germanForm").reset();
                      if (this.state.feedbackState === true) {
                        console.log('firing mutation')
                        this.setState({feedbackState: !this.state.feedbackState})
                        await checkAnswer({variables: {
                          germanAnswer: this.state.germanAnswer
                        }});
                        
                      } else {
                        if (wordGuess === this.state.germanWord) {
                          this.setState({
                            germanAnswer: wordGuess,
                            correctAnswer: true
                          });
                        } else {
                          this.setState({germanAnswer: wordGuess,
                            correctAnswer: false});
                        }
                        

                      }

                      this.setState({feedbackState: !this.state.feedbackState})
                    }}>

                      <h2>German</h2>
                      <div className='germanWord container'>
                        <h2 className='germanWord word'>{this.state.feedbackState ? this.state.germanWord : null}</h2>
                      </div>

                      <Error error={error} />

                      {this.state.feedbackState ? <ShowComponent correctAnswer={this.state.correctAnswer}/> : <input 
                        type='text' 
                        name='wordGuess' 
                        placeholder='German word is...' 
                      />}
                      <br />
                      <button type='submit'>{this.state.feedbackState ? "Got It!" : "Am I Right?"}</button>
                        
                    </form>)
                  }}
                
                  </Mutation> 


                  </section>
              </React.Fragment>)
          }}
        </Query>  

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Text+Me+One');

          h1, p, h2 {
            color: #021647;
            font-family: 'Text Me One', sans-serif;

          }

          .wordContainer {
            display: flex;
            flex: 4;
            text-align: center;
            flex-direction: column;
            align-items: center;
            background-color: white;
            width: 60vw;
            height: auto;
            padding-bottom: 20px;
            box-shadow: 1px 1px #ccc;
            border-radius: 2px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 30px;
            position: relative;
          }
          .statsButton {
            position: absolute;
            top: 0;
            right: 0;
            margin: 10px;
          }
          form {
            width: 100%;
            display: flex;
            align-self: center;
            flex-direction: column;
            align-items: center;
          }

          h1 {
            font-size: 48px;
            line-height: 55px;
            margin: 0px;
            margin-top: 40px;
          }

          h2 {
            font-size: 32px;
            line-height: 44px;
            margin-bottom: 10px;
            margin-top: 35px;
          }

          button {
            background-color: #2E65DC;
            font-family: avertaBold;
            color: #F7EDE3 !important;
            font-size: 16px;
            padding: 6px 18px;
            box-shadow: 0px 4px 0 0 #DCD4CC;
            border: 3px solid #2E65DC;
            cursor: pointer;
            display: inline-block;
            text-decoration: none;
            width: 120px;
            height: 3rem;
          }

          input {
            outline: none;
            width: 40%;
            height: 2.5em;
            display: block;
            padding: 3px;
            border: none;
            margin-top: 23px;
            background-color: rgba(0,0,0,0);
            border-bottom: 2px solid gray;
            margin-bottom: 10px;
            background-color: rgb(250,255,189);
            background-image: none;
            color: rgb(0,0,0);
            text-align: center;
            font-size: 1.2em;
          }

          input:focus {
            border-bottom: 2px solid blue;
            transition: 1s;
          }

          .word {
            color: white;
          }

          .container {
            background-color: #121C37;
            width: 50%;
            height: 120px;
          }

          @media only screen and (max-width: 600px) {
            .wordContainer {
              width: 90%;
            }

            body {
              padding-left: 0;
              padding-right: 0;
            }
          }
        `}</style>
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