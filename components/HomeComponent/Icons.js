import React from 'react';
import Image from 'next/image';
import chouf_froid_a from '../../public/img/icons/chaud_froid_a.svg';
import ingenieur from '../../public/img/icons/ingenieur.svg';
import energie_eco from '../../public/img/icons/energie_eco.svg';
import energie_solaire from '../../public/img/icons/energie_solaire.svg';
import energy from '../../public/img/icons/energy.png';
import fluid from '../../public/img/icons/fluide.png';
import froid from '../../public/img/icons/froid.svg';
import maitrise from '../../public/img/icons/Maitrise-1.png';
import route from '../../public/img/icons/route.svg';
import transport from '../../public/img/icons/transpor.svg';
import vrd from '../../public/img/icons/vrd.png';
import { Col, Row } from 'react-bootstrap';
function Icons() {
  return (
    <section className='_icons grey'>
      <div className='container'>
        <Row className='justify-content-center'>
          <Col className='icon' xs={12} sm={6} md={2}>
            <div className='icons-expertise'>
              <Image src={ingenieur} />
            </div>
            <h3>Gestion de Projet</h3>
          </Col>
          <Col className='icon' xs={12} sm={6} md={2}>
            <div className='icons-expertise'>
              <Image src={energie_eco} />
            </div>

            <h3>Électricité</h3>
          </Col>
          <Col className='icon' xs={12} sm={6} md={2}>
            <div className='icons-expertise'>
              <Image src={transport} />
            </div>
            <h3>Structure</h3>
          </Col>
          <Col className='icon' xs={12} sm={6} md={2}>
            <div className='icons-expertise'>
              <Image src={chouf_froid_a} />
            </div>
            <h3>Thermique et Fluide</h3>
          </Col>
          <Col className='icon' xs={12} sm={6} md={2}>
            <div className='icons-expertise'>
              <Image src={route} />
            </div>
            <h3>VRD</h3>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Icons;
