import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import { Breadcrumbs, Btn } from '../../AbstractElements';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import CommonModal from '../../Components/Forms/FormControl/BaseInput/CommonModal';
import Basic from '../../CommonElements/DropDown';
const Ecommerce1 = () => {
    const [togglePassword, setTogglePassword] = React.useState(false);
    const [modal, setModal] = React.useState(false);
    const toggle = (e) => { e.stopPropagation(); setModal(!modal) }
    const validateValue = (e) => {

        if (e.target.value.includes('-') || e.target.value.includes('+')) {
            e.target.value = ''
            return
        }
    }
    return (
        <Fragment>
            <Breadcrumbs parent='Apps' title='File Manager' mainTitle='Ключи' />
            <CommonModal adv='Идет генерация' buttonName='Выполнить' isOpen={modal} title={'Подтвердить действие'} toggler={toggle} size='sm' >....</CommonModal>
            <Form style={{ paddingInline: '10px' }} className="col">
                <Card className='p-20'>
                    <CardBody>
                        <Row>





                            <div className='col-xs-12 col-md-6 col-xl-4  '>



                                <FormGroup className="col position-relative " >
                                    <Label >{'Ключ авторизации'}</Label>
                                    <div className="input-group mb-3 position-relative">
                                        <input type={togglePassword ? 'text' : 'password'} name='login[password]' className="form-control p-t-9" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <div style={{ top: '18px', right: '83px' }} className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                                            <i className={togglePassword ? 'icon-unlock' : 'icon-lock'}></i>
                                        </div>
                                        <Btn style={{ height: '38px' }} attrBtn={{ height: '38px', color: 'primary', size: 'sm', onClick: (e) => toggle(e) }} ><i className="icon-key"></i></Btn>

                                    </div>
                                </FormGroup>

                                <FormGroup className="col position-relative " >
                                    <Label >{'Ключ телеграмм-приложения'}</Label>
                                    <div className="input-group mb-3 position-relative">
                                        <input type={togglePassword ? 'text' : 'password'} name='login[password]' className="form-control p-t-9" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <div style={{ top: '18px', right: '83px' }} className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                                            <i className={togglePassword ? 'icon-unlock' : 'icon-lock'}></i>
                                        </div>
                                        <Btn style={{ height: '38px' }} attrBtn={{ height: '38px', color: 'secondary', size: 'sm', onClick: (e) => toggle(e) }} ><i className="fa fa-floppy-o"></i></Btn>

                                    </div>
                                </FormGroup>
                                <FormGroup className="col position-relative " >
                                    <Label >{'Максимум боёв'}</Label>
                                    <div className="input-group mb-3 position-relative">
                                        <input onChange={validateValue} type="tel" className="form-control p-t-9" placeholder="50" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />

                                        <Basic />

                                    </div>
                                </FormGroup>



                            </div>
                        </Row>

                    </CardBody>
                </Card>

            </Form >
        </Fragment >)
};

export default Ecommerce1;