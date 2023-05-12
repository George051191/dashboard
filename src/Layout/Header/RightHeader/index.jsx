import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '../../../Components/Common/Component/SvgIcon';
import Notificationbar from './Notificationbar';
import CommonModal from '../../../Components/Forms/FormControl/BaseInput/CommonModal';
import { UL } from '../../../AbstractElements';
import { Col, ButtonGroup } from 'reactstrap';
import { Btn } from '../../../AbstractElements';

const RightHeader = () => {
  const [modal, setModal] = React.useState(false);
  const toggle = (e) => { e.stopPropagation(); setModal(!modal) }
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
      <CommonModal adv='В процессе...' buttonName='Выполнить' isOpen={modal} title={'Подтвердить действие'} toggler={toggle} size='sm' >....</CommonModal>
      <Col xxl='7' xl='7' md='7' className='nav-right pull-right right-header col-9 col-sm-8 p-0 ms-auto col-md-8 col-xl-7 col-xxl-7'>
        {/* <Col md="8"> */}
        <UL attrUL={{ className: 'simple-list nav-menus flex-row' }}>

          <Notificationbar />
          <div style={{ flexBasis: 'fit-content' }} className='col-9 d-none d-sm-none d-md-block d-flex justify-content-end' >

            <Btn attrBtn={{ color: 'danger', className: 'm-r-15 ', type: 'button', onClick: (e) => toggle(e) }}>{'Очистить базу данных'}</Btn>

            <Btn attrBtn={{ color: "primary", className: "m-r-15 ", type: "button", onClick: (e) => toggle(e) }} >{'Сохранить'}</Btn>
            <Btn attrBtn={{ color: "secondary", className: " ", type: "button", onClick: Logout }} >{'Выйти'}</Btn>


          </div>
          <div className='col-xs-12 d-md-none d-lg-none d-xl-none d-xxl-none' >
            <div className="">
              <ButtonGroup>
                <Btn attrBtn={{ color: 'danger', onClick: (e) => toggle(e) }} ><i className="fa fa-trash-o"></i></Btn>
                <Btn attrBtn={{ color: 'primary', onClick: (e) => toggle(e) }} ><i className="fa fa-save"></i></Btn>

                <Btn attrBtn={{ color: 'secondary', onClick: Logout }} ><i className="fa fa-sign-out"></i></Btn>
              </ButtonGroup>
            </div>
            {/*    <div className='col'>
              <span className='header-search'>
                <SvgIcon iconId='search' />
              </span>
            </div>
            <div className='col'>
              <span className='header-search'>
                <SvgIcon iconId='search' />
              </span>
            </div>
            <div className='col'>
              <span className='header-search'>
                <SvgIcon iconId='search' />
              </span>
            </div> */}
            {/*  <div className='col-12'>
              <Btn attrBtn={{ color: 'danger', className: 'w-100 m-r-15 ', type: 'button', onClick: (e) => toggle(e) }}>{'Очистить базу данных'}</Btn>
              <div style={{ marginTop: '10px' }} className='col-12'>
                <Btn attrBtn={{ color: "primary", className: "m-r-15 ", type: "button", onClick: (e) => toggle(e) }} >{'Сохранить'}</Btn>
                <Btn attrBtn={{ color: "secondary", className: " ", type: "button", onClick: Logout }} >{'Выйти'}</Btn>
              </div>
            </div> */}
          </div>

        </UL>
        {/* </Col> */}
      </Col>
    </Fragment>
  );
};

export default RightHeader;