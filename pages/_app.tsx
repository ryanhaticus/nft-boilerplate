import '../styles/global.css';
import { DefaultSeo } from 'next-seo';
import { LogoConfiguration, SEOConfiguration } from '../nft/nft.config';
import Head from 'next/head';
import FirebaseProvider from '../nft/client/providers/firebase';
import FirestoreProvider from '../nft/client/providers/firestore';
import AuthProvider from '../nft/client/providers/auth';
import UserProvider from '../nft/client/providers/user';

const NFTApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        title='No Title'
        titleTemplate={`%s - ${SEOConfiguration.name}`}
        description={SEOConfiguration.description}
        openGraph={{
          type: 'website',
          locale: SEOConfiguration.locale,
          url: SEOConfiguration.url,
          site_name: SEOConfiguration.name,
          description: SEOConfiguration.description
        }}
      />
      <Head>
        <link
          rel='icon'
          type={LogoConfiguration.favicon.type}
          href={LogoConfiguration.favicon.path}
        />
      </Head>
      <FirebaseProvider>
        <FirestoreProvider>
          <AuthProvider>
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </AuthProvider>
        </FirestoreProvider>
      </FirebaseProvider>
    </>
  );
};

export default NFTApp;
