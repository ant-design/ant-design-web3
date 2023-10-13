import { useAccounts, Account } from '@ant-design/web3';
import { Space } from 'antd';

export default () => {
  const { accounts } = useAccounts();
  if (accounts.length === 0) {
    return <div>Not Connected</div>;
  }
  return <Space direction="vertical">{accounts.map((account: Account) => account.address)}</Space>;
};
