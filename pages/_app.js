import Layout from '../components/Layout'
import { useEffect } from 'react';
import Prism from "prismjs";
// styles
import '../styles/nprogress.css'
import '../styles/prism.css'
import '../styles/index.css'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
