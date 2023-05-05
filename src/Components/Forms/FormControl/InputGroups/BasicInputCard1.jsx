import React, { Fragment } from 'react';
import { Form, Row, Col, Card, CardBody, FormGroup, Label, Input, InputGroup, InputGroupText } from 'reactstrap';
import { BasicInputGroups, LeftAddon, RightAddon, JointAddon, LeftRightAddon, SolidStyle, SquareStyle, RaiseStyle } from '../../../../Constant';
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
                                <FormGroup className=" m-form__group">
                                    <Label>{'Тренеры'}</Label>
                                    <InputGroup>

                                        <Input className="form-control" type="text" placeholder="Генерация тренеров" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label>{'Покемоны'}</Label>
                                    <InputGroup>
                                        <Input className="form-control" type="text" placeholder="Генерация покемонов " />

                                    </InputGroup>
                                </FormGroup>



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