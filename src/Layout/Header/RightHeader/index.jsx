import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '../../../Components/Common/Component/SvgIcon';
import Notificationbar from './Notificationbar';
import CommonModal from '../../../Components/Forms/FormControl/BaseInput/CommonModal';
import CommonModal1 from './CommonModal1';
import { UL } from '../../../AbstractElements';
import { Col, ButtonGroup } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import Files from 'react-files';
import GalleryContext from '../../../_helper/Gallery';
import { toast } from 'react-toastify';
const RightHeader = () => {
  /* const [smallImages, setSmallImages] = React.useContext(GalleryContext) */
  const [modal, setModal] = React.useState(false);
  const [avaModal, setAvaModal] = React.useState(false)
  const toggle = (e) => { e.stopPropagation(); setModal(!modal) }
  const toggleAva = (e) => { e.stopPropagation(); setAvaModal(!avaModal) }
  const history = useNavigate()
  const Logout = () => {
    localStorage.removeItem('profileURL');
    localStorage.removeItem('token');
    localStorage.removeItem('auth0_profile');
    localStorage.removeItem('Name');
    localStorage.setItem('authenticated', false);
    history(`${process.env.PUBLIC_URL}/login`);
  };
  /*   const onFilesChange = (files) => {
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        let uniqId = Math.floor(Math.random() * 100) + Math.floor(Math.random());
  
  
        setSmallImages([...smallImages, { id: uniqId, image: reader.result, name: name }]);
        toast.success('Загрузка...')
      
      }
    } */
  return (
    <Fragment>
      <CommonModal adv='В процессе...' buttonName='Выполнить' isOpen={modal} title={'Подтвердить действие'} toggler={toggle} size='sm' >....</CommonModal>
      <CommonModal1 adv='В процессе...' buttonName='Выбрать изображение' isOpen={avaModal} title={'Загрузка изображений'} toggler={toggleAva} size='sm' >....</CommonModal1>
      <Col xxl='7' xl='7' md='7' className='nav-right pull-right right-header col-9 col-sm-8 p-0 ms-auto col-md-8 col-xl-7 col-xxl-7'>
        {/* <Col md="8"> */}
        <UL attrUL={{ className: 'simple-list nav-menus flex-row' }}>

          <Notificationbar />
          <div style={{ flexBasis: 'fit-content' }} className='col-9 d-none d-sm-none d-md-block d-flex justify-content-end' >
            {/*  <Files
              className='files-dropzone fileContainer'
              onChange={onFilesChange}


              multiple={false}
              maxFileSize={10000000}
              minFileSize={0}
              clickable
            >
              <Btn attrBtn={{ className: "mt-2 ml-50", type: "button", color: 'primary' }} >Загрузить</Btn>
            </Files> */}

            <Btn attrBtn={{ color: 'secondary', className: 'm-r-15 ', type: 'button', onClick: (e) => toggle(e) }}>{'Очистить базу данных'}</Btn>
            {window.location.pathname.includes('shop') || window.location.pathname.includes('pokemons') ?
              <Btn attrBtn={{ color: "primary", className: "m-r-15 ", type: "button", onClick: (e) => toggleAva(e) }} >{'Загрузить'}</Btn> :
              <Btn attrBtn={{ color: "primary", className: "m-r-15 ", type: "button", onClick: (e) => toggle(e) }} >{'Сохранить'}</Btn>}

            <Btn attrBtn={{ color: "secondary", className: " ", type: "button", onClick: Logout }} >{'Выйти'}</Btn>


          </div>
          <div className='col-xs-12 d-md-none d-lg-none d-xl-none d-xxl-none' >
            <div className="">
              <ButtonGroup>
                <Btn attrBtn={{ color: 'secondary', onClick: (e) => toggle(e) }} ><i className="fa fa-trash-o"></i></Btn>
                {window.location.pathname.includes('shop') || window.location.pathname.includes('pokemons') ?
                  <Btn attrBtn={{ color: 'primary', onClick: (e) => toggleAva(e) }} ><i className="fa fa-upload"></i></Btn> :
                  <Btn attrBtn={{ color: 'primary', onClick: (e) => toggle(e) }} ><i className="fa fa-save"></i></Btn>
                }


                <Btn attrBtn={{ color: 'secondary', onClick: Logout }} ><i className="fa fa-sign-out"></i></Btn>
              </ButtonGroup>
            </div>

          </div>

        </UL>

      </Col>
    </Fragment>
  );
};

export default RightHeader;