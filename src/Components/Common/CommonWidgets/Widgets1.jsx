import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { H4 } from '../../../AbstractElements';
import SvgIcon from '../Component/SvgIcon';

const Widgets1 = ({ data }) => {
  return (
    <Card className='widget-1'>
      <CardBody>
        <div className='widget-content'>
          <div className={`widget-round ${data.color}`}>
            <div className='bg-round'>
              <SvgIcon className='svg-fill' iconId={`${data.icon}`} />
              <SvgIcon className='half-circle svg-fill' iconId='halfcircle' />
            </div>
          </div>
          <div style={{ height: '75px' }}>
            <H4>{data.total}</H4>
            <span className='f-light'>{data.title}</span>
          </div>
        </div>

      </CardBody>
    </Card>
  );
};

export default Widgets1;
