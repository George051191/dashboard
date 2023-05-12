import { H5 } from '../../../AbstractElements';
import { Javadata } from './Data';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Label, Col } from 'reactstrap';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const JavascriptMode1 = ({ title }) => {
    return (
        <Fragment>
            <Col className='col-1 w-100 p-l-12' >
                <Card style={{ paddingLeft: '12px' }} className='shadow-none w-100 p-l-12'>
                    <Label>{title}</Label>

                    <AceEditor
                        style={{ marginTop: '0px', width: '300px', height: '428px', marginLeft: '0px' }}
                        mode="javascript"
                        theme="monokai"
                        value={Javadata}
                        name="blah2"
                        setOptions={{ useWorker: false }}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        editorProps={{ $blockScrolling: true }}
                        highlightActiveLine={true} />

                </Card>
            </Col>
        </Fragment>
    );
};
export default JavascriptMode1;