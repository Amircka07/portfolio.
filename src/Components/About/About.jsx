import React from 'react';
import './About.scss';
import profile_img from '../../assets/my-icon .jpg';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>{t('about.title')}</h1>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={profile_img} alt='' />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>{t('about.desc1')}</p>
            <p>{t('about.desc2')}</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'>
              <p>{t('about.skills.htmlcss')}</p> <hr style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>{t('about.skills.react')}</p> <hr style={{ width: '70%' }} />
            </div>
            <div className='about-skill'>
              <p>{t('about.skills.js')}</p> <hr style={{ width: '60%' }} />
            </div>
            <div className='about-skill'>
              <p>{t('about.skills.ts')}</p> <hr style={{ width: '70%' }} />
            </div>
            <div className='about-skill'>
              <p>{t('about.skills.redux')}</p> <hr style={{ width: '60%' }} />
            </div>
            <div className='about-skill'>
              <p>{t('about.skills.zustand')}</p> <hr style={{ width: '70%' }} />
            </div>
            <div className='about-skill'>
              <p>{t('about.skills.rq')}</p> <hr style={{ width: '70%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
