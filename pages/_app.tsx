import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../state/store';

import Head from 'next/head';
import LogoHeader from '../components/LogoHeader/LogoHeader';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import PosterViewer from '@/components/PosterViewer/PosterViewer';

import './styles.css';

function MysterySkoolsApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Mystery Skools</title>
      </Head>
      <main className="app">
        <PosterViewer />
        <LogoHeader />
        <SocialLinks />
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default MysterySkoolsApp;
