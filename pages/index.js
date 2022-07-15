import Actualités from '../components/HomeComponent/Actualités/Actualités';
import Devis from '../components/HomeComponent/Devis';
import Domaine from '../components/HomeComponent/Domaine/Domaine';
import Expertise from '../components/HomeComponent/Expertise';
import Slides from '../components/HomeComponent/Slides';
import Demarche from '../components/HomeComponent/Demarche';
import ImgComarison from '../components/HomeComponent/ImgComarison';
import Partner from '../components/HomeComponent/Partner';
import Information from '../components/HomeComponent/Information';
import Introduction from '../components/HomeComponent/Introduction.js';
import Head from 'next/head';
export default function Home() {
  return (
    <div className='_home'>
      {' '}
      <Head>
        <title>Agexis</title>
      </Head>
      <Slides />
      {/* <Information /> */}
      {/* <Conditions /> */}
      <Introduction />
      <Expertise />
      <Demarche />
      <Domaine />
      <ImgComarison />
      <Actualités />
      <Devis />
      <Partner />
    </div>
  );
}
