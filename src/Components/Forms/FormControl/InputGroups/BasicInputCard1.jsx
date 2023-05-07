import React, { Fragment } from 'react';
import { Form, Row, Col, Card, CardBody, FormGroup, Label, Input } from 'reactstrap';

import HeaderCard from '../../../Common/Component/HeaderCard';
import FooterCard from '../Common/FooterCard';
import { toast } from 'react-toastify';

const BasicInputCard1 = () => {
    return (
        <Fragment>
            <Card>
                <HeaderCard title={'Генерация'} />
                <CardBody>
                    <Row>
                        <Col>
                            <Form className='card' onSubmit={() => toast.success('Идет генерация')}>
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
                                            <Label htmlFor="exampleFormControlInput1">{'Ссылка на правила игры'}</Label>
                                            <Input className="form-control" type="text" placeholder="id" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </CardBody>
                <FooterCard />
            </Card>
        </Fragment>
    );
};

export default BasicInputCard1;