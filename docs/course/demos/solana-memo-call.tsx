import React, { useState } from 'react';
import { BrowserLink, ConnectButton, Connector, useAccount } from '@ant-design/web3';
import { useConnection, useWallet } from '@ant-design/web3-solana';
import { PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';
import { Button, Card, ConfigProvider, Flex, Form, Input, message, Space } from 'antd';

const MEMO_PROGRAM_ID = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');

export default function MemoTx() {
  const [messageApi, contextHolder] = message.useMessage({ maxCount: 1 });

  const { account } = useAccount();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [signatures, setSignatures] = useState<string[]>([]);

  const writeMemo = async (memo: string) => {
    if (!publicKey) {
      messageApi.error('Please connect wallet first');
      return;
    }

    // Create a transaction instruction to write memo
    const ins = new TransactionInstruction({
      programId: MEMO_PROGRAM_ID,
      keys: [{ pubkey: publicKey, isSigner: true, isWritable: false }],
      data: Buffer.from(memo, 'utf-8'),
    });

    const tx = new Transaction().add(ins);

    // Send transaction via wallet （通过钱包发送交易）
    // Once the transaction is sent, the signature will be returned （发送交易后会返回签名）
    const signature = await sendTransaction?.(tx, connection);

    setSignatures([...signatures, signature]);

    messageApi.info(
      <Space>
        <span>Memo sent with signature: </span>
        <BrowserLink type="transaction" address={signature} ellipsis target="_blank" />
      </Space>,
      60,
    );
  };

  return (
    <Flex gap={16} flex={1}>
      <Form
        style={{ flex: 1 }}
        layout="vertical"
        disabled={!publicKey}
        onFinish={(values) => {
          writeMemo(values.memo);
        }}
      >
        <Form.Item name="memo" label="Memo" required rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>

        <Space>
          <Button type="primary" htmlType="submit">
            {publicKey ? 'Send Memo' : 'Please connect wallet first'}
          </Button>
          <Connector>
            <ConnectButton disabled={false} />
          </Connector>
        </Space>
      </Form>

      <Card
        title="Memo Signatures"
        style={{ flex: 1 }}
        actions={[
          <Space key="txs">
            <span>View all your transactions: </span>
            {account && <BrowserLink address={account.address} type="address" target="_blank" />}
          </Space>,
        ]}
      >
        <Space direction="vertical">
          <ConfigProvider theme={{ components: { Typography: { fontSize: 12 } } }}>
            <Space>
              Example Transaction:{' '}
              <BrowserLink
                type="transaction"
                address="48yFNeh7dfX2rVb3KzYWgNR8r9RKttAGbwpw4ZLypHnQ3qaT8dGDA8KvTEorYx6GBBiCGsVYkhyECiyn7XqYwQyu"
                target="_blank"
                ellipsis
              />
            </Space>
            {signatures.map((signature) => (
              <BrowserLink key={signature} type="transaction" address={signature} target="_blank" />
            ))}
          </ConfigProvider>
        </Space>
      </Card>

      {contextHolder}
    </Flex>
  );
}
