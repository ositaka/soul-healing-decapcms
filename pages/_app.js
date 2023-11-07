import Head from "next/head";
import { DefaultSeo } from 'next-seo';

import '../styles/globals.css'
import '../styles/scroll-timeline-animation.css'
import '../styles/sections.css'

import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from '../next-seo.config';
import { AnimatePresence } from 'framer-motion'

function App({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <script defer src='https://thegoldenhealing.online/scroll-timeline-polyfill.js'></script>
    </Head>
    <DefaultSeo {...SEO} />
    <Header />
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
