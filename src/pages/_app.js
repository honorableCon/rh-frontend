import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import DashboardLayout from '../dashboard/layout';
import { ApolloProvider } from '@apollo/client';
import { client } from '../service/graphql';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ressource humaine</title>
      </Head>
      <ApolloProvider client={client}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
