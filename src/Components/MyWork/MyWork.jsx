import React from 'react';
import './MyWork.scss';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
const MyWork = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
     initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        viewport={{ amount: 0.5}}
    id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>{t('mywork.title')}</h1>
      </div>
      <div className='mywork-container'>
        {mywork_data.map((work, index) => (
          <div className='mywork-item' key={index}>
            <a href={work.href} target='_blank' rel='noopener noreferrer'>
              <img className='img' src={work.w_img} alt={`Work ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
      <div className='mywork-showmore'>
        <a
          href='https://github.com/Amircka07'
          target='_blank'
          rel='noopener noreferrer'
          style={{ textDecoration: 'none', color: 'white', display: 'flex', gap: '10px', alignItems: 'center' }}
        >
          {t('mywork.showMore')}
          <img className='arrow-icon' src={arrow_icon} alt='' />
        </a>
      </div>
    </motion.div>
  );
};

export default MyWork;
