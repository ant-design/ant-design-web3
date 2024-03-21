---
nav: Course
group:
  title: What is DApp?
  order: 1
order: 1
---

# DApp Introduction

## 🤔 What is DApp?

Decentralized Application (abbreviated as `DApp`) is an application built on a decentralized network, mainly composed of "smart contracts" and "front-end user interfaces".

<div align="center">
  <img src="./img/intro-dapp.png" width="350" alt="intro-dapp" />
</div>

## 🌟 DApp Features

- **Decentralized**: DApp runs on a decentralized and open network, and no one or group can control it;
- **Deterministic**: It performs the same function no matter what the execution environment is;
- **Turing complete**: DApp can perform any operation or logic according to the required resources;
- **High availability**: The front-end user interface of DApp can be accessed by anyone, and it will not stop service due to the downtime of a node;
- **Privacy**: Users can remain anonymous when interacting with DApp without providing real identity information;

Generally speaking, the biggest difference between DApp and ordinary applications is its "decentralized" characteristics, that is, its server-side code should run in a non-centralized execution environment, such as the Ethereum blockchain network.

Taking DApp on Ethereum as an example, the service-side code of most applications is deployed on the Ethereum network and is completely open source, and the core data of DApp is also recorded on the chain, without the need for additional central database storage. As long as the Ethereum network node is confirmed, users can apply to execute any changes to the DApp function or established data.

Ideally, the data of DApp is stored in an encrypted manner in every node of the decentralized network-it can be a PC, mobile terminal, server or mining machine. This mechanism ensures that the data is not leaked or destroyed. These data belong to the user, and developers and maintainers do not have the right to misappropriate these data. In theory, it achieves that the ownership of the data belongs entirely to the user, which is almost impossible in the era of mobile Internet (Web2). Therefore, many people think that DApp is an important carrier of Web3, and the two ideas are the same.

Unfortunately, DApp also has many shortcomings:

- **More difficult to maintain**: Once the service-side code of DApp is deployed on the blockchain network, it is difficult for developers to update the application logic (or underlying data). Even if vulnerabilities or security risks are found in the old version, theoretically, DApp The data on the data cannot be completely erased, which is significantly different from ordinary applications;
- **Large performance overhead**: In order to achieve the security, integrity, transparency and reliability pursued by the blockchain, each node will run and store each transaction, which brings huge performance overhead, and it is difficult to expand more performance;
- **Poor user interface**: DApp may require more technical means to achieve the interaction experience of ordinary applications, including browser wallet plug-ins and other additional user mental burdens;

To sum up, the advantages of DApp compared with ordinary applications are that the data is highly secure and cannot be tampered with, and it provides sufficient privacy and data ownership. The disadvantages are poor maintainability, slow running speed, and poor user experience. The smoothness of the experience is different from that of ordinary applications.

<!-- prettier-ignore -->
:::info
In order to help everyone build the front-end user interface of DApp better and interact with the blockchain network better, the Ant Design team has launched a set of Web3 front-end component libraries [Ant Design Web3](https://web3.ant.design/). If you have a certain understanding of blockchain basic knowledge, you can go directly to 👉 [Develop DApp](./dev-init.md).
:::

## 📚 Further reading

- [Course: Blockchain and Smart Contracts](/course/intro-blockchain)
- [Course: How DApp calls smart contracts](/course/intro-call-contract)
- [Web3 Technology Service ZAN](https://zan.top/?chInfo=ch_antdweb3)
- [Explore Decentralized Applications](https://ethereum.org/dapps)
- [Web3.0 Application Architecture](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application)
- [Popular DApp Tools](https://www.alchemy.com/dapps)
