import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Language from './Language';
import Searchbar from './Searchbar';
import Notificationbar from './Notificationbar';
import MoonLight from './MoonLight';
import CartHeader from './CartHeader';
import BookmarkHeader from './BookmarkHeader';
import UserHeader from './UserHeader';
import { UL } from '../../../AbstractElements';
import { Col } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
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
      <Col xxl='7' xl='6' md='7' className='nav-right pull-right right-header col-8 p-0 ms-auto'>
        {/* <Col md="8"> */}
        <UL attrUL={{ className: 'simple-list nav-menus flex-row' }}>

          <Notificationbar />
          <UserHeader />
          <Btn attrBtn={{ color: "secondary", className: "m-r-15 m-l-15", type: "button", onClick: Logout }} >{'Выйти'}</Btn>
        </UL>
        {/* </Col> */}
      </Col>
    </Fragment>
  );
};

export default RightHeader;