import Head from "next/head";
import { DefaultSeo } from 'next-seo';

import '../styles/globals.css'
import Footer from "../components/Footer";
import SEO from '../next-seo.config';
import { AnimatePresence } from 'framer-motion'


function App({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      <script defer src='https://thegoldenhealing.online/scroll-timeline-polyfill.js'></script>
    </Head>
    <DefaultSeo {...SEO} />
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} />
    </AnimatePresence>

    <Footer />
  </>)
}

export default App
