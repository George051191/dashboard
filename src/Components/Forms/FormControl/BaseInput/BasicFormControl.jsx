import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { BasicFormControl, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, Password } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';
import FooterCard1 from '../Common/FooterCard1';
import FooterCard from '../Common/FooterCard';
import JavascriptMode from '../../../Editor/AceCodeEditor/JavascriptMode';
import { Btn } from '../../../../AbstractElements';
import { toast } from 'react-toastify';
const BasicFormControlClass = () => {
    return (
        <Fragment>


            <Form className="col">
                <Card className='p-20'>
                    <CardBody>
                        <Row>
                            <Col md='4 mb-3'>

                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Ссылка на правила игры'}</Label>
                                    <Input className="form-control" type="text" placeholder="id" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Ссылка на инструкцию'}</Label>
                                    <Input className="form-control" type="text" placeholder="id" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Google ID WEB приложения'}</Label>
                                    <Input className="form-control" type="text" placeholder="id" />
                                </FormGroup>
                                <FormGroup>
                                    <Label >{'Дополнительный ключ авторизации'}</Label>
                                    <div class="input-group mb-3">


                                        <input type="text" class="form-control" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        {/*  <button >hhhhh</button> */}
                                        <Btn attrBtn={{ size: '38px', color: "primary", className: "input-group-text w-25 p-0", type: "button", onClick: () => toast.success('Идет создание ключа') }} >{'Создать'}</Btn>

                                    </div>


                                </FormGroup>

                            </Col>
                            <Col md='4 mb-3'>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'SMTP логин'}</Label>
                                    <Input className="form-control" type="text" placeholder="examplу" />
                                </FormGroup>
                                <FormGroup>
                                    <Label >{'SMTP пароль'}</Label>

                                    <Input className="form-control" type="password" placeholder="****" />

                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'SMTP домен'}</Label>
                                    <Input className="form-control" type="text" placeholder="example@com" />
                                </FormGroup>
                            </Col>
                            <Col md='4 mb-3'>
                                <FormGroup>
                                    <Label>{'Время обновления логов Loguru'}</Label>
                                    <Input type="number" className="form-control" placeholder="3" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>{'Версия приложения'}</Label>
                                    <Input type="number" className="form-control" placeholder="2.13" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Макс.количество запросов в секунду'}</Label>
                                    <Input className="form-control" type="number" placeholder="14" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <JavascriptMode title='Код json ключа Google WEB приложения' />
                            <JavascriptMode title='Код js/метрика и прочее' />
                        </Row>
                    </CardBody>








                </Card>
                <FooterCard1 footerClass="text-end" />
            </Form>

        </Fragment>
    );
};

export default BasicFormControlClass;
