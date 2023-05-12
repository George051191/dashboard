import React from 'react';
import { Link } from 'react-router-dom';
import { H6, Image } from '../../../AbstractElements';
import fireImage from '../../../assets/images/giftools.gif';
import Slider from 'react-slick';
import { notificationSliderOption } from './NotificationSliderOption';

const NotificationSlider = () => {
  return (
    <div style={{ width: '300px' }} className='notification-slider w-300 overflow-hidden d-sm-none d-md-none d-lg-none d-xl-block '>
      <Slider className='m-0' {...notificationSliderOption}>
        <div className='d-flex w-300 h-100'>
          <Image attrImage={{ src: fireImage, alt: 'gif' }} />
          <H6 attrH6={{ className: 'mb-0 f-w-400' }}>
            <span className='font-primary'>Создан новый тренер! </span>
            {/*   <span className='f-light'>Out new update has been release.</span> */}
          </H6>
          <i className='icon-arrow-top-right f-light' />
        </div>
        <div className='d-flex w-300 h-100'>
          <Image attrImage={{ src: fireImage, alt: 'gif' }} />
          <H6 attrH6={{ className: 'mb-0 f-w-400' }}>
            <span className='font-primary'>Создан новый покемон! </span>
          </H6>

        </div>
      </Slider>
    </div>
  );
};

export default NotificationSlider;
