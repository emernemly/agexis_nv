import '../styles/globals.css';
import '../styles/index.scss';
import '../styles/Header.scss';
import '../styles/slide.scss';
import '../styles/Condition.scss';
import '../styles/Expertise.scss';
import '../styles/Demarche.scss';
import '../styles/Domaine.scss';
import '../styles/CardDomaine.scss';
import '../styles/ImgComarison.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
