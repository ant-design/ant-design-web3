import React, { useState } from 'react';
import { BrowserLink, ConnectButton, Connector, useAccount } from '@ant-design/web3';
import { useConnection, useWallet } from '@ant-design/web3-solana';
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { Button, Card, ConfigProvider, Flex, Form, Input, InputNumber, message, Space } from 'antd';

type FormModel = {
  memo: string;
  amount: number;
};

const MEMO_PROGRAM_ID = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');

export default function MemoTx() {
  const [messageApi, contextHolder] = message.useMessage({ maxCount: 1 });

  const { account } = useAccount();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [signatures, setSignatures] = useState<string[]>([]);

  const writeMemo = async (values: FormModel) => {
    if (!publicKey) {
      messageApi.error('Please connect wallet first');
      return;
    }

    // Create a transaction instruction to transfer 0.1 SOL
    const transferIns = SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: new PublicKey('4wztJ4CAH4GbAUopZrVk7nLvoAC3KAF6ttMMWfnBRG1t'),
      lamports: values.amount * LAMPORTS_PER_SOL,
    });

    // Create a transaction instruction to write memo
    const memoIns = new TransactionInstruction({
      programId: MEMO_PROGRAM_ID,
      keys: [{ pubkey: publicKey, isSigner: true, isWritable: false }],
      data: Buffer.from(values.memo, 'utf-8'),
    });

    const tx = new Transaction().add(transferIns, memoIns);

    // Send transaction via wallet （通过钱包发送交易）
    // Once the transaction is confirmed, the signature will be returned （交易确认后会返回签名）
    const signature = await sendTransaction?.(tx, connection);

    setSignatures([...signatures, signature]);

    messageApi.info(
      <Space>
        <span>Transaction sent with signature: </span>
        <BrowserLink type="transaction" address={signature} ellipsis target="_blank" />
      </Space>,
      60,
    );
  };

  return (
    <Flex gap={16} flex={1}>
      <Form<FormModel>
        style={{ flex: 1 }}
        layout="vertical"
        disabled={!publicKey}
        initialValues={{ amount: 0.1, memo: 'Hello, Solana!' }}
        onFinish={writeMemo}
      >
        <Form.Item name="amount" label="Amount" required rules={[{ required: true }]}>
          <InputNumber min={0.1} precision={1} step={0.1} style={{ width: 400 }} />
        </Form.Item>

        <Form.Item name="memo" label="Memo" required rules={[{ required: true }]}>
          <Input.TextArea style={{ width: 400 }} />
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
