import React, { Fragment } from 'react';
import { Row, Card, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import FooterCard1 from '../Common/FooterCard1';
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
                            <div class="col-xs-12 col-md-6 col-xl-4">

                                <FormGroup className="col "  >
                                    <Label htmlFor="exampleFormControlInput1">{'Ссылка на правила игры'}</Label>
                                    <Input className="form-control" type="text" placeholder="id" />
                                </FormGroup>
                                <FormGroup className="col " >
                                    <Label htmlFor="exampleFormControlInput1">{'Ссылка на инструкцию'}</Label>
                                    <Input className="form-control" type="text" placeholder="id" />
                                </FormGroup>
                                <FormGroup className="col " >
                                    <Label htmlFor="exampleFormControlInput1">{'Google ID WEB приложения'}</Label>
                                    <Input className="form-control" type="text" placeholder="id" />
                                </FormGroup>

                                <FormGroup className="col " >
                                    <Label >{'Дополнительный ключ авторизации'}</Label>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="*****" aria-label="Имя пользователя получателя" aria-describedby="basic-addon2" />
                                        <Btn attrBtn={{ size: '38px', color: "primary", className: "input-group-text w-25 p-0", type: "button", onClick: () => toast.success('Идет создание ключа') }} >{'Создать'}</Btn>
                                    </div>
                                </FormGroup>
                                <FormGroup className="col d-xl-none" >
                                    <Label>{'Время обновления логов Loguru'}</Label>
                                    <Input type="number" className="form-control" placeholder="3" />
                                </FormGroup>


                            </div>

                            <div class="col-xs-12 col-md-6 col-xl-4">

                                <FormGroup className="col " >
                                    <Label htmlFor="exampleFormControlInput1">{'SMTP логин'}</Label>
                                    <Input className="form-control" type="text" placeholder="examplу" />
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
                                <FormGroup className="	d-xl-none  col " >
                                    <Label>{'Версия приложения'}</Label>
                                    <Input type="number" className="form-control" placeholder="2.13" />
                                </FormGroup>
                                <FormGroup className="col d-xl-none ">
                                    <Label htmlFor="exampleFormControlInput1">{'Макс.количество запросов в секунду'}</Label>
                                    <Input className="form-control" type="number" placeholder="14" />
                                </FormGroup>
                            </div>

                            <div className='col-xs-12 col-md-6 col-xl-4 d-none d-xl-block'>
                                <FormGroup className="col " >
                                    <Label>{'Время обновления логов Loguru'}</Label>
                                    <Input type="number" className="form-control" placeholder="3" />
                                </FormGroup>
                                <FormGroup className="col " >
                                    <Label>{'Версия приложения'}</Label>
                                    <Input type="number" className="form-control" placeholder="2.13" />
                                </FormGroup>
                                <FormGroup className="col ">
                                    <Label htmlFor="exampleFormControlInput1">{'Макс.количество запросов в секунду'}</Label>
                                    <Input className="form-control" type="number" placeholder="14" />
                                </FormGroup>
                            </div>
                            {/*     <div class="col col-md-4 col-4">




                                <div className='w-100'></div>
                               
                            </div> */}



                        </Row>


                        <Row>
                            <JavascriptMode title='Код json ключа Google WEB приложения' />
                            <JavascriptMode title='Код js/метрика и прочее' />
                        </Row>
                    </CardBody>








                </Card>
                <FooterCard1 footerClass="text-end" />
            </Form >

        </Fragment >
    );
};

export default BasicFormControlClass;
