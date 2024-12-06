// /components/select.tsx
import React from 'react';
import { Radio, Space } from 'antd';

import { TOKEN_PAY_ADDRESS } from '../constants/tokenPayAddress';

interface ChainSelectGroupProps {
  ecosystem: string;
  onChange: (ecosystem: string) => void;
}

const ChainSelect: React.FC<ChainSelectGroupProps> = (props) => {
  const chainList = TOKEN_PAY_ADDRESS.chains;

  return (
    <Space size="middle">
      <Radio.Group
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        value={props.ecosystem}
      >
        {chainList.map((info) => {
          return (
            <Radio key={info.ecosystem} value={info.ecosystem}>
              {info.name}
            </Radio>
          );
        })}
      </Radio.Group>
    </Space>
  );
};

export default ChainSelect;
