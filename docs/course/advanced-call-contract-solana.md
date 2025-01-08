---
nav: Course
group:
  title: Advanced
order: 2
---

# Interacting with Solana Contracts

Interacting with blockchain contracts is one of the core functionalities of a DApp. Achieving this is not difficult, but it does require writing some logic. In this example, we will demonstrate how to connect to the Solana network using Ant Design Web3 and call the Memo contract.

The Memo Program is a sample program on Solana, which is a simple contract used to add note information to transactions. You can find its documentation here: [Memo Program | Solana Program Library Docs](https://spl.solana.com/memo).

We will demonstrate how to interact with Solana contracts in two ways:

1. Directly calling the contract without using a wallet
2. Calling the contract using a wallet

Regardless of the method used, we need to use `@solana/web3.js`, an official JavaScript library provided by Solana for interacting with the Solana blockchain. Here, we use version 1.x, which is simpler compared to the latest version and sufficient for our example.

<NormalInstallDependencies packageNames="@solana/web3.js@1" save="true"></NormalInstallDependencies>

## Directly Calling the Contract

Directly calling the contract means signing transactions using a private key without a wallet. This method is suitable for simple scenarios, such as debugging on the test network.

<code src="./demos/solana-tx-without-wallet.tsx"></code>

In the above code, we did not use any content from `@ant-design/web3-solana`; the actual call is made in the `writeMemo` function.

In it, we first generate a keypair using Keypair, which includes a public key and a private key. Since we haven't interacted with it, it's just a set of values without any actual significance.

> You can comment out the code that generates the keypair in `writeMemo` and check the generated public key in the browser console. You can also view this public key information on a blockchain explorer, or check the following address: [61QgmBmUw1Nekq7wGXtA7CCETUcbmTBJPjDWGLSrPqRK](https://solscan.io/account/61QgmBmUw1Nekq7wGXtA7CCETUcbmTBJPjDWGLSrPqRK)
>
> You will find that the displayed data on the page does not show any anomalies because it is indeed a legitimate public key located on the elliptic curve.

Continuing, since the newly generated keypair does not have any balance, we need to obtain some test tokens from the faucet on the testnet. Here, we use the `requestAirdrop` method to send some test tokens to the specified address.

Next, we use the `confirmTransaction` method to confirm whether the transaction was successful. If successful, we can call the Memo contract.

> Requesting test tokens and confirming the transaction is not mandatory; you can use your existing account as long as it has enough balance to run our example code.
>
> 🛑 Note: Please do not enter your private key on any website casually!!!

Once we ensure that the account we just created has enough balance, we can call the Memo contract.

In Solana, a transaction can contain one or more instructions, each being a contract call. We can create a transaction with just a memo instruction, but to make it somewhat interesting, let's try executing two instructions in one transaction: a transfer and writing a memo.

Continuing, we create a transfer instruction using the `transfer` method from `SystemProgram` and assign it to `transferInstruction`. Then, we create a transaction instruction object pointing to the Memo contract and assign it to `memoInstruction`.

Then, we create a `Transaction` object and add these two instructions to the transaction.

When creating the transfer instruction, we use the `SystemProgram.transfer` method. Since transfers are done using Solana's built-in contracts and are very common, @solana/web3.js provides a method for convenient calls. When using transfer, we need to provide the sender's address, recipient's address, and transfer amount.

When creating the memo instruction, since @solana/web3.js does not provide a corresponding function, we manually construct the transfer instruction object. We need to specify the address of the contract being called (Memo) ([MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr](https://solscan.io/account/MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr?cluster=devnet)), the public keys involved in this instruction, and the data to be passed (here, a string converted to a Buffer). Note: Participant accounts must be signers of the transaction, so `isSigner` is set to `true`. Detailed documentation can be found here: https://spl.solana.com/memo#operational-notes

Finally, we use the `sendAndConfirmTransaction` method to send the transaction. This method sends the transaction to the network and waits for confirmation. Note that when we call it, we pass the keypair to sign the transaction with the private key.

If the transaction succeeds, it returns a TransactionSignature object, which is essentially a string representing the transaction's hash. We can use it to view the transaction details on a blockchain explorer.

Let's click the [Send] button, run the code, and see the effect!

If everything is successful, you'll see the transaction hash value output in the console, indicating that the transaction has been successfully sent to the network. You can view the transaction details on the [Solana Blockchain Explorer](https://solscan.io/?cluster=devnet).

If something fails, it might be due to using the RPC too many times, triggering rate limiting. You can register for a new RPC address [here](https://zan.top/service/public-rpc/solana?chInfo=ch_antdweb3) and replace it, or try again after some time.

## Calling the Contract Using a Wallet

In dApp development, we typically use a wallet to manage the user's keypair. This approach is more secure and convenient, as users can sign transactions through the wallet instead of exposing their private keys to the dApp.

<code src="./demos/solana-tx-with-wallet.tsx"></code>

Compared to the code for directly calling contracts in the first section, this code is slightly reduced, removing steps such as generating a keypair and requesting test tokens. Instead, we directly use the keypair in the wallet to sign the transaction.

The transaction processing logic is in `writeMemo`, similar to before. It creates a transfer instruction and a memo instruction and adds them to the transaction.

The difference is that we use the `useWallet` hook to obtain the `sendTransaction` method provided by the wallet. This method sends the transaction to the network and waits for confirmation. Note that we do not pass the keypair when calling it.

## Additional

In the above two examples, we manually constructed `TransactionInstruction` objects when creating Memo instructions. While this approach offers flexibility, it also increases the workload. If you prefer a simpler method, you can use the `createMemoInstruction` method provided by `@solana/spl-memo`. The specific code can be found here: [@solana/spl-memo](https://github.com/solana-program/memo/blob/main/clients/js-legacy/src/index.ts).
