import Conditions from '../components/Conditions';
import Demarche from '../components/Demarche';
import Domaine from '../components/Domaine/Domaine';
import Expertise from '../components/Expertise';
import Header from '../components/Header';
import ImgComarison from '../components/ImgComarison';

import Slides from '../components/Slides';
export default function Home() {
  return (
    <div>
      <Header />
      <Slides />
      <Conditions />
      <Expertise />
      <Demarche />
      <Domaine />
      <ImgComarison />
    </div>
  );
}
