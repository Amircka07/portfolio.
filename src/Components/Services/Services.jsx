import React from 'react';
import './Services.scss';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const services = t('services.list', { returnObjects: true });

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1 className="text-texture">{t('services.title')}</h1>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
