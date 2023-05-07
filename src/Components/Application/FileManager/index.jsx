import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import FileContent from './FileContent';
import FileSideBar from './FileSidebar';
import { Card, Col, Container, Row } from 'reactstrap';

const FileManagerContain = () => {
  return (
    <Fragment>

      <Container fluid={true}>
        <Row>

          <Col xl='9' md='12' className=' w-100 p-0 box-col-9'>
            <div className='file-content'>
              <Card>
                <FileContent />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default FileManagerContain;
