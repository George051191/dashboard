import React, { Fragment } from 'react';
import { Form, Row, Col, Card, CardBody, FormGroup, Label, Input } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import HeaderCard from '../../../Common/Component/HeaderCard';
import FooterCard from '../Common/FooterCard';
import { toast } from 'react-toastify';
import JavascriptMode1 from '../../../Editor/AceCodeEditor/JavascriptMode1'
const BasicInputCard1 = () => {
    return (
        <Fragment>
            <Card>
                <CardBody className='w-100' style={{ display: 'flex', flexWrap: 'wrap' }}>

                    <div class="container m-0" style={{ width: '300px' }}>
                        <div class="container">
                            <div class="col-sm  " style={{ width: '260px' }}>
                                <Label>{'Колличество тренеров'}</Label>
                                <input type="number" class="form-control w-100" placeholder="20" aria-label="Тренеры" aria-describedby="basic-addon2" />
                            </div>
                            <div class="col-sm" style={{ width: '260px' }}>
                                <Label>{'Колличество покемонов'}</Label>
                                <input type="number" class="form-control w-100" placeholder="20" aria-label="Покемоны" aria-describedby="basic-addon2" />
                            </div>
                            <div class="col-sm m-t-25  " style={{ width: '260px' }}>
                                <Form className='w-100 p-b-10 '>


                                    <Btn attrBtn={{ size: 25, color: "primary", className: "input-group-text w-50", type: "button", onClick: () => toast.success('Генерация...') }} >{'Генерация'}</Btn>
                                </Form>

                            </div>

                        </div>

                    </div>
                    <JavascriptMode1 title='Лог-генерация' />
                </CardBody>
            </Card>
        </Fragment>
    );
};

export default BasicInputCard1;

