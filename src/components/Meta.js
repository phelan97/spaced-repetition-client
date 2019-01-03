import Head from 'next/head';
import favicon from './static/favicon.ico';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="icon" type="image/png" href={favicon} />
    <title>Learn German Fast!</title>
  </Head>
);

export default Meta;