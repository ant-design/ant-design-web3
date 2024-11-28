import React, { useState } from 'react';
import { solanaDevnet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

import '@solana/web3.js';

import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmRawTransaction,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { Button, Input } from 'antd';

const devnetEndpoint = `https://api.zan.top/node/v1/solana/devnet/${YOUR_ZAN_API_KEY}`;

// const connection = new Connection(clusterApiUrl('devnet'));
const connection = new Connection(devnetEndpoint);
const programId = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');

export default function App() {
  const [memo, setMemo] = useState('test');

  const writeMemo = async () => {
    const keypair = Keypair.generate();
    console.log('public_key:', keypair.publicKey.toBase58());

    const airdropSignature = await connection.requestAirdrop(keypair.publicKey, LAMPORTS_PER_SOL);
    console.log('airdrop_signature:', airdropSignature);

    const latestBlockhash = await connection.getLatestBlockhash();
    await connection.confirmTransaction(
      {
        signature: airdropSignature,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
      },
      'finalized',
    );

    const tx = new Transaction()
      .add(
        SystemProgram.transfer({
          fromPubkey: keypair.publicKey,
          toPubkey: new PublicKey('4wztJ4CAH4GbAUopZrVk7nLvoAC3KAF6ttMMWfnBRG1t'),
          lamports: 0.5 * LAMPORTS_PER_SOL,
        }),
      )
      .add(
        new TransactionInstruction({
          keys: [{ pubkey: keypair.publicKey, isSigner: true, isWritable: false }],
          programId: programId,
          data: Buffer.from(memo, 'utf-8'),
        }),
      );

    const signature = await sendAndConfirmTransaction(connection, tx, [keypair]);
    console.log('signature:', signature);
  };

  return (
    <div>
      <Input.TextArea value={memo} onChange={(e) => setMemo(e.target.value)} />
      <Button onClick={writeMemo}>Send Memo</Button>
    </div>
  );
}
