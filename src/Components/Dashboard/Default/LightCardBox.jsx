import React from 'react';

import { H6 } from '../../../AbstractElements';
import { DailyDropdown } from '../../../Constant';
import SvgIcon from '../../Common/Component/SvgIcon';
import DropdownCommon from '../../Common/Dropdown';

const LightCardBox = ({ data }) => {
  return (
    <div style={{ height: '110px' }} className='light-card balance-card widget-hover'>
      <div className='svg-box'>
        <SvgIcon className='svg-fill' iconId={data.icon} />
      </div>
      <div>
        <span className='f-light'>{data.title}</span>
        <H6 attrH6={{ className: 'mt-1 mb-0' }}>{data.price}</H6>
      </div>
      <div className='ms-auto text-end'>

      </div>
    </div>
  );
};

export default LightCardBox;
