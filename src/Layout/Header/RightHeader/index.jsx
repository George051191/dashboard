import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Notificationbar from './Notificationbar';

import { UL } from '../../../AbstractElements';
import { Col } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { toast } from 'react-toastify';
const RightHeader = () => {
  const history = useNavigate()
  const Logout = () => {
    localStorage.removeItem('profileURL');
    localStorage.removeItem('token');
    localStorage.removeItem('auth0_profile');
    localStorage.removeItem('Name');
    localStorage.setItem('authenticated', false);
    history(`${process.env.PUBLIC_URL}/login`);
  };
  return (
    <Fragment>
      <Col xxl='7' xl='7' md='7' className='nav-right pull-right right-header col-8 p-0 ms-auto col-md-8 col-xl-7 col-xxl-7'>
        {/* <Col md="8"> */}
        <UL attrUL={{ className: 'simple-list nav-menus flex-row' }}>

          <Notificationbar />
          <div style={{ flexBasis: 'fit-content' }} className='col-9 d-flex justify-content-end' >

            <Btn onClick={() => toast.success('Удаление')} attrBtn={{ color: 'danger', className: 'm-r-15 ', type: 'submit' }}>{'Очистить базу данных'}</Btn>

            <Btn onClick={() => toast.success('Идет сохранение')} attrBtn={{ color: "primary", className: "m-r-15 ", type: "submit" }} >{'Сохранить'}</Btn>
            <Btn attrBtn={{ color: "secondary", className: " ", type: "button", onClick: Logout }} >{'Выйти'}</Btn>


          </div>

        </UL>
        {/* </Col> */}
      </Col>
    </Fragment>
  );
};

export default RightHeader;