import React, { Fragment } from 'react';
import { Form, Row, Col, Card, CardBody, FormGroup, Label, Input } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import HeaderCard from '../../../Common/Component/HeaderCard';
import FooterCard from '../Common/FooterCard';
import { toast } from 'react-toastify';
import JavascriptMode from '../../../Editor/AceCodeEditor/JavascriptMode';
const BasicInputCard1 = () => {
    return (
        <Fragment>
            <Card>
                <CardBody className='w-100'>

                    <div class="container w-100">
                        <div class="row">
                            <div class="col-sm">
                                <Label>{'Введите имя тренера'}</Label>
                                <input type="text" class="form-control w-100" placeholder="20" aria-label="Тренеры" aria-describedby="basic-addon2" />
                            </div>
                            <div class="col-sm">
                                <Label>{'Введите стоимость'}</Label>
                                <input type="text" class="form-control w-100" placeholder="20" aria-label="Покемоны" aria-describedby="basic-addon2" />
                            </div>
                            <div class="col-sm m-t-25">
                                <Form className='w-100 '>


                                    <Btn attrBtn={{ color: "primary", className: "input-group-text w-50", type: "button", onClick: () => toast.success('Генерация...') }} >{'Генерация'}</Btn>
                                </Form>

                            </div>

                        </div>

                    </div>
                    <JavascriptMode title='Лог-генерация' />
                </CardBody>
            </Card>
        </Fragment>
    );
};

export default BasicInputCard1;

