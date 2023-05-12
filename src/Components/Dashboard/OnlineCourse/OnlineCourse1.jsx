import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

import FileManager from '../../Application/FileManager'

const OnlineCourse1 = () => {
    return (
        <Fragment>
            <Breadcrumbs parent='Apps' title='File Manager' mainTitle='Покемоны' />
            <Container fluid={true}>
                <FileManager isNeed={false} title={'Введите имя покемона'} />
            </Container>
        </Fragment>
    );
};

export default OnlineCourse1;