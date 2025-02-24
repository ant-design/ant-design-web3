import React, { useState } from 'react';
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { Button, Input, InputNumber, Space } from 'antd';

const devnetEndpoint = `https://api.zan.top/node/v1/solana/devnet/${YOUR_ZAN_API_KEY}`;

const connection = new Connection(devnetEndpoint);
const programId = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');

export default function App() {
  const [amount, setAmount] = useState(0.1);
  const [memo, setMemo] = useState('Hello, Web3!');

  const writeMemo = async () => {
    const keypair = Keypair.generate();
    console.log('Public key:', keypair.publicKey.toBase58());

    const airdropSignature = await connection.requestAirdrop(keypair.publicKey, LAMPORTS_PER_SOL);
    console.log(
      'Airdrop Transaction Detail:',
      `https://solana.io/tx/${airdropSignature}?cluster=devnet`,
    );

    const latestBlockhash = await connection.getLatestBlockhash();
    await connection.confirmTransaction(
      {
        signature: airdropSignature,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
      },
      'finalized',
    );

    const transferInstruction = SystemProgram.transfer({
      fromPubkey: keypair.publicKey,
      toPubkey: new PublicKey('4wztJ4CAH4GbAUopZrVk7nLvoAC3KAF6ttMMWfnBRG1t'),
      lamports: amount * LAMPORTS_PER_SOL,
    });

    const memoInstruction = new TransactionInstruction({
      keys: [{ pubkey: keypair.publicKey, isSigner: true, isWritable: false }],
      programId: programId,
      data: Buffer.from(memo, 'utf-8'),
    });

    const tx = new Transaction();
    tx.add(transferInstruction, memoInstruction);

    const signature = await sendAndConfirmTransaction(connection, tx, [keypair]);

    console.log('Signature:', signature);
    console.log('Transaction Detail:', `https://solana.io/tx/${signature}?cluster=devnet`);
  };

  return (
    <Space direction="vertical">
      <InputNumber
        value={amount}
        min={0.1}
        precision={1}
        step={0.1}
        style={{ width: 400 }}
        onChange={(e) => setAmount(e || 0.1)}
      />
      <Input.TextArea
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        style={{ width: 400 }}
      />
      <Button type="primary" onClick={writeMemo}>
        Send Transfer with Memo
      </Button>
    </Space>
  );
}
