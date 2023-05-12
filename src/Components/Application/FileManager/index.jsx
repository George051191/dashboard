import React, { Fragment } from 'react';

import FileContent from './FileContent';

import { Card, Col, Container, Row } from 'reactstrap';

const FileManagerContain = ({ title, isNeed }) => {
  return (
    <Fragment>

      <Container fluid={true}>
        <Row>

          <Col xl='9' md='12' className=' w-100 p-0 box-col-9'>
            <div className='file-content'>
              <Card>
                <FileContent isNeed={isNeed} title={title} />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default FileManagerContain;
