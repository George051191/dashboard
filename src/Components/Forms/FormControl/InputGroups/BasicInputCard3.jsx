import React, { Fragment } from 'react';
import { Form, Row, Col, Card, Label } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';

import { toast } from 'react-toastify';
import JavascriptMode1 from '../../../Editor/AceCodeEditor/JavascriptMode1'
const BasicInputCard1 = () => {
    return (
        <Fragment >
            <Card style={{ display: 'flex', flexDirection: 'row', marginLeft: '-2px', marginRight: '-2px' }} className='row p-t-20'>
                <Col className='col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-6'  >

                    <div className="container m-0">
                        <div className="row align-items-end m-b-20">
                            <div className="col-sm-4 m-b-10  " >
                                <Label style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>{'Колличество тренеров'}</Label>
                                <input type="number" className="form-control w-100" placeholder="20" aria-label="Тренеры" aria-describedby="basic-addon2" />
                            </div>
                            <div className="col-sm-4  m-b-10" >
                                <Label style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>{'Колличество покемонов'}</Label>
                                <input type="number" className="form-control w-100" placeholder="20" aria-label="Покемоны" aria-describedby="basic-addon2" />
                            </div>
                            <div className="col-sm-4  m-b-10  " style={{ height: '38px' }}>
                                <Form className='w-100 '>


                                    <Btn attrBtn={{ size: '25', color: "primary", className: "input-group-text w-100", type: "button", onClick: () => toast.success('Генерация...') }} >{'Генерация'}</Btn>
                                </Form>

                            </div>

                        </div>


                    </div>
                    <JavascriptMode1 title='Лог-генерация' />
                </Col>
                <Col className='col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-6'  >

                    <div className="container m-0">
                        <div className="row align-items-end m-b-20">
                            <div className="col-sm-4  m-b-10 " >
                                <Label style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>{'Колличество покемонов'}</Label>
                                <input type="number" className="form-control w-100" placeholder="20" aria-label="Тренеры" aria-describedby="basic-addon2" />
                            </div>
                            <div className="col-sm-4  m-b-10" >
                                <Label style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>{'Колличество выживших'}</Label>
                                <input type="number" className="form-control w-100" placeholder="20" aria-label="Покемоны" aria-describedby="basic-addon2" />
                            </div>
                            <div className="col-sm-4  m-b-10  " style={{ height: '38px' }}>
                                <Form className='w-100 '>


                                    <Btn attrBtn={{ size: '25', color: "primary", className: "input-group-text w-100", type: "button", onClick: () => toast.success('Генерация...') }} >{'Генерация'}</Btn>
                                </Form>

                            </div>

                        </div>


                    </div>
                    <JavascriptMode1 title={'Генерация/Бои'} />
                </Col>
            </Card>
        </Fragment>
    );
};

export default BasicInputCard1;

