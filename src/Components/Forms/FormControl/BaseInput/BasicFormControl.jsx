import React, { Fragment } from 'react';
import { Row, Card, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';

import JavascriptMode from '../../../Editor/AceCodeEditor/JavascriptMode';

import CommonModal from './CommonModal';
import { Btn } from '../../../../AbstractElements';

const BasicFormControlClass = () => {
    const [modal, setModal] = React.useState(false);
    const toggle = (e) => { e.stopPropagation(); setModal(!modal) }
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
                                    <Input type="number" className="form-control" placeholder="3" />
                                </FormGroup>
                                <FormGroup className="col d-xl-none  ">
                                    <Label htmlFor="exampleFormControlInput1">{'Макс.количество запросов в секунду'}</Label>
                                    <Input className="form-control" type="number" placeholder="14" />
                                </FormGroup>
                                <FormGroup className="col d-xl-none" >
                                    <Label >{'Ключ авторизации'}</Label>
                                    <div className="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <Btn attrBtn={{ size: '38px', color: "primary", className: "input-group-text w-25 p-0", type: "button", onClick: (e) => toggle(e) }} >{'Создать'}</Btn>
                                    </div>
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-md-6 col-xl-4">

                                <FormGroup className="col " >
                                    <Label htmlFor="exampleFormControlInput1">{'SMTP логин'}</Label>
                                    <Input className="form-control" type="text" placeholder="example@login" />
                                </FormGroup>
                                <FormGroup className="col " >
                                    <Label >{'SMTP пароль'}</Label>

                                    <Input className="form-control" type="password" placeholder="****" />

                                </FormGroup>
                                <FormGroup className="col ">
                                    <Label htmlFor="exampleFormControlInput1">{'SMTP домен'}</Label>
                                    <Input className="form-control" type="text" placeholder="example@com" />
                                </FormGroup>

                                {/* invis */}
                                <FormGroup className="	  col " >
                                    <Label>{'Версия приложения'}</Label>
                                    <Input type="number" className="form-control" placeholder="2.13" />
                                </FormGroup>
                                <FormGroup className="col d-xl-none " >
                                    <Label >{'Ключ телеграмм-приложения'}</Label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <Btn attrBtn={{ size: '38px', color: "primary", className: "input-group-text w-25 p-0", type: "button", onClick: (e) => toggle(e) }} >{'Создать'}</Btn>
                                    </div>
                                </FormGroup>
                                <FormGroup className="col d-xl-none " >
                                    <Label >{'Мастер-ключ'}</Label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <Btn attrBtn={{ size: '38px', color: "primary", className: "input-group-text w-25 p-0", type: "button", onClick: (e) => toggle(e) }} >{'Создать'}</Btn>
                                    </div>
                                </FormGroup>

                            </div>

                            <div className='col-xs-12 col-md-6 col-xl-4 d-none d-xl-block'>


                                <FormGroup className="col " >
                                    <Label >{'Ключ авторизации'}</Label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <Btn attrBtn={{ size: '38px', color: "primary", className: "input-group-text w-25 p-0", type: "button", onClick: (e) => toggle(e) }} >{'Создать'}</Btn>
                                    </div>
                                </FormGroup>
                                <FormGroup className="col " >
                                    <Label >{'Ключ телеграмм-приложения'}</Label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <Btn attrBtn={{ size: '38px', color: "primary", className: "input-group-text w-25 p-0", type: "button", onClick: (e) => toggle(e) }} >{'Создать'}</Btn>
                                    </div>
                                </FormGroup>
                                <FormGroup className="col " >
                                    <Label >{'Мастер-ключ'}</Label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <Btn attrBtn={{ size: '38px', color: "primary", className: "input-group-text w-25 p-0", type: "button", onClick: (e) => toggle(e) }} >{'Создать'}</Btn>
                                    </div>
                                </FormGroup>
                                <FormGroup className="col  ">
                                    <Label htmlFor="exampleFormControlInput1">{'Макс.количество запросов в секунду'}</Label>
                                    <Input className="form-control" type="number" placeholder="14" />
                                </FormGroup>
                            </div>
                        </Row>
                        <Row>
                            <JavascriptMode title='Код json ключа Google WEB приложения' />
                            <JavascriptMode title='Код js/метрика и прочее' />
                        </Row>
                    </CardBody>
                </Card>

            </Form >
        </Fragment >
    );
};

export default BasicFormControlClass;
