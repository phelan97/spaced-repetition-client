import App, { Container } from 'next/app';
import Page from '../src/components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../src/lib/withData'
import Head from 'next/head';
import favicon from '../src/components/static/favicon.ico';

class MyApp extends App {
  render() {
    const { Component, apollo } = this.props;

    return (
      <Container>
        <Head>
          <link rel="icon" type="image/png" href={favicon} />
        </Head>

        <ApolloProvider client={apollo}>
          <Page>
          <style jsx>{`
            body {
              margin: 0;
              padding: 0;
              font-family: sans-serif;
              background-color: black;
              color: green;
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