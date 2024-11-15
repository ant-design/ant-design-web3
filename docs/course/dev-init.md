---
nav: Course
group:
  title: Develop DApp
  order: 2
order: 1
---

# Initialize the project

## Overview

In this part of the course, we will guide you to build the front-end part of a DApp. This DApp will implement a function of minting NFT. After the user connects the wallet, he can click to mint an NFT and view the minted NFT.

This part will not involve the development of smart contracts for the time being. The development of smart contracts will be put into the next part of the course. We will provide a smart contract for testing for the DApp to call.

The complete code of this tutorial can be found at [https://github.com/ant-design/ant-design-web3-demo](https://github.com/ant-design/ant-design-web3-demo).

## Initialize a React project

We will use [React](https://react.dev/) + [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) to initialize our project. Of course, if you are more familiar with other front-end frameworks such as [umi](https://nextjs.org/), you can also use the framework you are familiar with. You can still refer to this tutorial, but for non-professional front-end developers, we recommend that you follow the tutorial step by step to complete it to avoid problems caused by framework differences.

Before you start, please make sure you have installed [Node.js](https://nodejs.org/) and the version is greater than 20.0.0. The tutorial will be written based on the latest version of Node.js. If you are using an old version of Node.js, it may also run, but when you encounter problems, you can try to upgrade the Node.js version.

After the installation is complete, you can use the following command to check whether Node.js and its built-in `npm` and `npx` are installed successfully:

```bash
node -v # => v20.0.0+
npm -v # => 10.0.0+
npx -v # => 10.0.0+
```

Next, we refer to the [Next.js official documentation](https://nextjs.org/docs/getting-started/installation) to create a new project:

```bash
npx create-next-app@14.0.4 # We specify the version of create-next-app as 14.0.4 to avoid the differences caused by the upgrade affecting the details of the tutorial
```

Please create a new project according to the prompts. We will name it `ant-design-web3-demo`. You can refer to the following figure for the specific technical stack selection:

![Create project](./img/init-next.png)

We removed the selection of `Tailwind CSS` and `App Router` to make the project simpler. In actual projects, you should choose the content you need according to your needs.

## Install dependencies and start the project

After the creation is complete, enter the project directory and install the dependencies:

```base
cd ant-design-web3-demo
npm i
```

After the installation is complete, execute `npm run dev` to start the project. You can visit `http://localhost:3000` in the browser to see if the project starts successfully.

![](./img/next-init-page.png)

## Add Ant Design Web3

Next, we install the basic components of Ant Design and Ant Design Web3 to the project:

```bash
npm i @ant-design/web3 --save
```

After the installation is complete, you need configure the `next.config.js` because of [an existing issue](https://github.com/ant-design/ant-design/issues/46053) in the current version of Next.js:

```diff
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
+ transpilePackages: [  "@ant-design", "antd", "rc-util", "rc-pagination", "rc-picker", "rc-input" ],
}

module.exports = nextConfig
```

Then, Create a new file `pages/web3.tsx` and add the following code:

```tsx | pure
import { Address } from '@ant-design/web3';

export default function Web3() {
  return <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />;
}
```

Then visit [http://localhost:3000/web3](http://localhost:3000/web3) to see that you have successfully used Ant Design Web3 in the project 🎉

![](./img/dev-success.png)

To make the page more aesthetically pleasing, you can add the following code to `styles/global.css`:

```diff
html,
body {
  max-width: 100vw;
+  min-height: 100vh;
  overflow-x: hidden;
}
```

Of course, this is not necessary.
