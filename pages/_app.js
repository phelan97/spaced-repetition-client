import App, { Container } from 'next/app';
import Page from '../src/components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../src/lib/withData'

class MyApp extends App {
  render() {
    const { Component, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
          <style jsx>{`
            body {
              margin: 0;
              padding: 0;
              font-family: sans-serif;
            }
          `}</style>
            <Component />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(MyApp);