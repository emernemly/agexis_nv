import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Offcanvas } from 'react-bootstrap';
import LogoBlue from '../../public/img/logo_agexis.webp';
import phone from '../../public/img/phone.webp';
import mail from '../../public/img/mail.webp';
import facebook from '../../public/img/facebook.webp';
import twiter from '../../public/img/twiter.webp';
import youtube from '../../public/img/youtube.webp';
import linkid from '../../public/img/linkid.webp';
import search from '../../public/img/search.webp';
import { BsList } from 'react-icons/bs';
import LogoWhite from '../../public/img/logo_agexis_blanc.webp';
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='header'>
      <div className='header-top'>
        {/* <div className='background'></div> */}
        <Link href='/'>
          <a>
            <Image
              className='logo-original'
              src={LogoBlue}
              alt='Logo agexis bureau etude france'
            />
          </a>
        </Link>
        <div className='contact'>
          <div className='contact-icon phone'>
            <Image src={phone} alt='phone' />
            <p>01 84 03 98 29</p>
          </div>
          <div className='contact-icon mail'>
            <Image src={mail} alt='mail' />
            <p>CONTACT@AGEXIS.COM</p>
          </div>
          <div className='contact-icon social'>
            <Image src={facebook} alt='facebook' />
            <Image src={twiter} alt='twiter' />
            <Image src={youtube} alt='youtube' />
            <Image src={linkid} alt='linkid' />
            <Image src={search} alt='search' className='search' />
          </div>
        </div>
      </div>
      <>
        <Offcanvas
          style={{ backgroundColor: '#1c2c4e' }}
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ color: 'white' }}>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className=' sidebar-items'>
              <Link href='/' onClick={handleClose}>
                Accueil
              </Link>
              <Link href='/qsn' onClick={handleClose}>
                Qui sommes-nous
              </Link>
              <Link href='/activite' onClick={handleClose}>
                Activité
              </Link>
              <Link href='/marche' onClick={handleClose}>
                Marché
              </Link>
              <Link href='/acualite' onClick={handleClose}>
                Actualité
              </Link>
              <Link href='/carriere' onClick={handleClose}>
                Carriére
              </Link>
              <Link href='/contact' onClick={handleClose}>
                Démarche
              </Link>
              <Link href='/demarche' onClick={handleClose}>
                Contact
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
      <div className='header-nav'>
        <div className='navbar-items'>
          <Link href='/'>Accueil</Link>
          <Link href='/qsn'>Qui sommes-nous</Link>
          <Link href='/activite'>Activité</Link>
          <Link href='/marche'>Marché</Link>
          <Link href='/acualite'>Actualité</Link>
          <Link href='/carriere'>Carriére</Link>
          <Link href='/contact'>Démarche</Link>
          <Link href='/demarche'>Contact</Link>
        </div>
        <div className='responsive'>
          <Image
            width={124}
            height={50}
            className='logo'
            src={LogoWhite}
            alt='Logo agexis bureau etude france'
          />
          <BsList onClick={handleShow} />
        </div>
      </div>
    </div>
  );
};

export default Header;
