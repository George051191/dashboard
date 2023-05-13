import React, { Fragment } from 'react';
import { Row, Card, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';

import JavascriptMode from '../../../Editor/AceCodeEditor/JavascriptMode';

import CommonModal from './CommonModal';
import { Btn } from '../../../../AbstractElements';
import Basic from '../../../../CommonElements/DropDown';

const BasicFormControlClass = () => {
    const [modal, setModal] = React.useState(false);
    const [togglePassword, setTogglePassword] = React.useState(false);
    const toggle = (e) => { e.stopPropagation(); setModal(!modal) }
    const validateValue = (e) => {

        if (e.target.value.includes('-') || e.target.value.includes('+')) {
            e.target.value = ''
            return
        }
    }
    return (
        <Fragment>
            <CommonModal adv='Идет генерация' buttonName='Выполнить' isOpen={modal} title={'Подтвердить действие'} toggler={toggle} size='sm' >....</CommonModal>
            <Form className="col">
                <Card className='p-20'>
                    <CardBody>
                        <Row>
                            <div className="col-xs-12 col-md-6 col-xl-4">
                                <FormGroup className="col "  >
                                    <Label htmlFor="exampleFormControlInput1">{'Ссылка на правила игры'}</Label>
                                    <Input className="form-control" type="text" placeholder="https://..." />
                                </FormGroup>
                                <FormGroup className="col " >
                                    <Label htmlFor="exampleFormControlInput1">{'Ссылка на инструкцию'}</Label>
                                    <Input className="form-control" type="text" placeholder="https://..." />
                                </FormGroup>
                                <FormGroup className="col " >
                                    <Label htmlFor="exampleFormControlInput1">{'Google ID WEB приложения'}</Label>
                                    <Input className="form-control" type="text" placeholder="id" />
                                </FormGroup>

                                <FormGroup className="col " >
                                    <Label>{'Время обновления логов Loguru'}</Label>
                                    <Input onChange={validateValue} type="tel" className="form-control" placeholder="3" />
                                </FormGroup>
                                <FormGroup className="col  ">
                                    <Label htmlFor="exampleFormControlInput1">{'Макс.количество запросов в секунду'}</Label>
                                    <Input onChange={validateValue} type="tel" className="form-control" placeholder="14" />
                                </FormGroup>
                                {/*     <FormGroup className="col  d-xl-none position-relative " >
                                    <Label >{'Ключ авторизации'}</Label>
                                    <div className="input-group mb-3 position-relative">
                                        <input type={togglePassword ? 'text' : 'password'} name='login[password]' className="form-control p-t-9" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <div style={{ top: '18px', right: '83px' }} className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                                            <i className={togglePassword ? 'icon-unlock' : 'icon-lock'}></i>
                                        </div>
                                        <Btn style={{ height: '38px' }} attrBtn={{ height: '38px', color: 'primary', size: 'sm', onClick: (e) => toggle(e) }} ><i className="icon-key"></i></Btn>

                                    </div>
                                </FormGroup> */}
                                {/*      <FormGroup className="col position-relative " >
                                    <Label >{'Максимум боёв'}</Label>
                                    <div className="input-group mb-3 position-relative">
                                        <input onChange={validateValue} type="tel" className="form-control p-t-9" placeholder="50" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />

                                        <Basic />

                                    </div>
                                </FormGroup> */}
                            </div>

                            <div className="col-xs-12 col-md-6 col-xl-4">

                                <FormGroup className="col " >
                                    <Label htmlFor="exampleFormControlInput1">{'SMTP логин'}</Label>
                                    <Input className="form-control" type="text" placeholder="example@login" />
                                </FormGroup>

                                <FormGroup className="col   position-relative " >
                                    <Label >{'SMTP пароль'}</Label>
                                    <div className="input-group mb-3 position-relative">
                                        <input type={togglePassword ? 'text' : 'password'} name='login[password]' className="form-control p-t-9" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <div style={{ top: '18px', right: '20px' }} className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                                            <i className={togglePassword ? 'icon-unlock' : 'icon-lock'}></i>
                                        </div>

                                    </div>
                                </FormGroup>
                                <FormGroup className="col ">
                                    <Label htmlFor="exampleFormControlInput1">{'SMTP домен'}</Label>
                                    <Input className="form-control" type="text" placeholder="example@com" />
                                </FormGroup>

                                {/* invis */}
                                <FormGroup className="	  col " >
                                    <Label>{'Версия приложения'}</Label>
                                    <Input onChange={validateValue} type="tel" className="form-control" placeholder="2.13" />
                                </FormGroup>
                                {/*      <FormGroup className="col  d-xl-none position-relative " >
                                    <Label >{'Ключ телеграмм-приложения'}</Label>
                                    <div className="input-group mb-3 position-relative">
                                        <input type={togglePassword ? 'text' : 'password'} name='login[password]' className="form-control p-t-9" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <div style={{ top: '18px', right: '83px' }} className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                                            <i className={togglePassword ? 'icon-unlock' : 'icon-lock'}></i>
                                        </div>
                                        <Btn style={{ height: '38px' }} attrBtn={{ height: '38px', color: 'secondary', size: 'sm', onClick: (e) => toggle(e) }} ><i className="fa fa-floppy-o"></i></Btn>

                                    </div>
                                </FormGroup> */}
                                <FormGroup className="col  ">
                                    <Label htmlFor="exampleFormControlInput1">{'Макс.количество запросов в секунду'}</Label>
                                    <Input className="form-control" onChange={validateValue} type="tel" placeholder="14" />
                                </FormGroup>

                            </div>





                            {/*         <FormGroup className="col position-relative " >
                                    <Label >{'Ключ авторизации'}</Label>
                                    <div className="input-group mb-3 position-relative">
                                        <input type={togglePassword ? 'text' : 'password'} name='login[password]' className="form-control p-t-9" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <div style={{ top: '18px', right: '83px' }} className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                                            <i className={togglePassword ? 'icon-unlock' : 'icon-lock'}></i>
                                        </div>
                                        <Btn style={{ height: '38px' }} attrBtn={{ height: '38px', color: 'primary', size: 'sm', onClick: (e) => toggle(e) }} ><i className="icon-key"></i></Btn>

                                    </div>
                                </FormGroup> */}

                            {/*     <FormGroup className="col position-relative " >
                                    <Label >{'Ключ телеграмм-приложения'}</Label>
                                    <div className="input-group mb-3 position-relative">
                                        <input type={togglePassword ? 'text' : 'password'} name='login[password]' className="form-control p-t-9" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <div style={{ top: '18px', right: '83px' }} className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                                            <i className={togglePassword ? 'icon-unlock' : 'icon-lock'}></i>
                                        </div>
                                        <Btn style={{ height: '38px' }} attrBtn={{ height: '38px', color: 'secondary', size: 'sm', onClick: (e) => toggle(e) }} ><i className="fa fa-floppy-o"></i></Btn>

                                    </div>
                                </FormGroup> */}





                        </Row>
                        <Row>
                            <JavascriptMode title='Лог генерации покемонов' />
                            <JavascriptMode title='Лог генерации боёв' />
                        </Row>
                    </CardBody>
                </Card>

            </Form >
        </Fragment >
    );
};

export default BasicFormControlClass;
