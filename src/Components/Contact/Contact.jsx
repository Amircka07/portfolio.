import React, { useState } from 'react';
import './Contact.scss';
import mail_icon from '../../assets/mail_icon.svg';
import location_pattern from '../../assets/location_icon.svg';
import call from '../../assets/call_icon.svg';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();
  const [namePlaceholder, setNamePlaceholder] = useState(t('contact.name'));

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');

    if (!/^[A-Za-zА-Яа-яЁё\s]+$/.test(name)) {
      toast.error(t('contact.nameValidationMessage'));
      return;
    }

    formData.append('access_key', '51793f2f-3c8d-43c4-b95d-fbef5d5fef4d');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success(t('contact.success'));
      event.target.reset();
    } else {
      console.log('Error', data);
      toast.error(data.message);
    }
  };

  const handleNameInput = (e) => {
    const value = e.target.value;
    const onlyLetters = value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');

    if (value !== onlyLetters) {
      setNamePlaceholder(t('contact.onlyLettersPlaceholder'));
    } else {
      setNamePlaceholder(t('contact.name'));
    }

    e.target.value = onlyLetters;
  };

  return (
    <motion.div 
    initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }} // animation fix
        transition={{ duration: 1 }}
        viewport={{ amount: 0.5}}
    id='contact' className='contact'>
      <div className='contact-title'>
        <h1>{t('contact.title')}</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>{t('contact.leftTitle')}</h1>
          <p>{t('contact.leftDesc')}</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' />
              <p>arulinamit676@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call} alt='' />
              <a
                href='https://wa.me/996505312120?text=Здравствуйте,%20хочу%20связаться%20по%20работе'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                WA +996505312120
              </a>
            </div>
            <div className='contact-detail'>
              <img src={location_pattern} alt='' />
              <p>{t('contact.location')}</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor='name'>{t('contact.name')}</label>
          <input
            type='text'
            name='name'
            placeholder={namePlaceholder}
            pattern='[A-Za-zА-Яа-яЁё\s]+'
            title={t('contact.nameValidationMessage')}
            onInput={handleNameInput}
            required
          />

          <label htmlFor='email'>{t('contact.email')}</label>
          <input
            type='email'
            name='email'
            placeholder={t('contact.email')}
            required
          />

          <label htmlFor='message'>{t('contact.message')}</label>
          <textarea
            name='message'
            rows='8'
            placeholder={t('contact.message')}
            required
          ></textarea>

          <button type='submit' className='contact-submit'>
            {t('contact.submit')}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
