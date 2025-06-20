import React from 'react';
import './Hero.scss';
import profile_img from '../../assets/my-icon .jpg';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt='' />
      <h1>
        <span>{t('hero.greeting')}</span> {t('hero.position')}
      </h1>
      <div className='hero-action'>
        <div className='hero-connect'>
          <a
            className='anchor-link'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none', color: 'white' }}
            href='https://wa.me/996505312120?text=Здравствуйте,%20хочу%20связаться%20по%20работе'
          >
            {t('hero.connect')}
          </a>
        </div>
        <a
          href='Resume.pdf'
          download
          target='_blank'
          style={{ textDecoration: 'none', color: 'white' }}
          className='hero-resume'
        >
          {t('hero.resume')}
        </a>
      </div>
    </div>
  );
};

export default Hero; 