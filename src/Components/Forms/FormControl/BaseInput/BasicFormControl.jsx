import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
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
            <Card>
                <HeaderCard title={'Настройки приложения'} />
                <Form className="form theme-form">
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Ссылка на правила игры'}</Label>
                                    <Input className="form-control" type="text" placeholder="id" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Ссылка на инструкцию'}</Label>
                                    <Input className="form-control" type="text" placeholder="id" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Google ID WEB приложения'}</Label>
                                    <Input className="form-control" type="text" placeholder="id" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'SMTP логин'}</Label>
                                    <Input className="form-control" type="text" placeholder="examplу" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label className="col-sm-3 col-form-label">{'SMTP пароль'}</Label>
                                    <Col sm="9">
                                        <Input className="form-control" type="password" placeholder="****" />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>






                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'SMTP домен'}</Label>
                                    <Input className="form-control" type="text" placeholder="example@com" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label className="col-sm-3 col-form-label">{'Дополнительный ключ авторизации'}</Label>

                                    <Input className="form-control" type="password" placeholder="****" />
                                    <Btn onClick={() => toast.success('Идет генерация')} attrBtn={{ color: "primary", className: "m-r-15", type: "click", onClick: () => toast.success('Идет генерация') }} >{'Генерация'}</Btn>


                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
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
                        <Row>
                            <Col>
                                <div>
                                    <Label>{'Время обновления логов Loguru'}</Label>
                                    <Input type="number" className="form-control" placeholder="3" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <Label>{'Версия приложения'}</Label>
                                    <Input type="number" className="form-control" placeholder="2.13" />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <FooterCard1 footerClass="text-end" />
                </Form>
            </Card>
        </Fragment>
    );
};

export default BasicFormControlClass;