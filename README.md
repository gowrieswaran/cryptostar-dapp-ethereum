# Build CryptoStar Dapp on Ethereum

This project involves creating a Dapp on Ethereum network. OpenZeppelin library is used to create the ERC721 token and put them on public Ethereum Networks.

## Tools required

- Truffle
- Truffle Boxes
- Metamask
- Infura

## Build your project

The boilerplate code is available at: https://github.com/udacity/boilerPlateDAPPproject

- Make sure you have truffle installed and this project uses truffle box webpack boilerplate.

- Connect to Metamask to connect to Rinkeby network.

- Setup Infura and add the Rinkeby API to the truffle-config file.

## How to Run

1.Clone/download the project repo.

2.In the command prompt, run: `npm install`

3.For starting the development console, run: 'truffle develop`

4.Compile and test the contract using `compile` and `test`
![test case success](https://github.com/gowrieswaran/cryptostar-dapp-ethereum/blob/master/screenshots/test-success.PNG)

5.Once it successfully passes all the test migrate it to the rinkeby network using
`truffle migrate --reset --network rinkeby`

6.For running the Front End of the DAPP, open another terminal from project directory, and run:
`npm run dev`
![npm run dev](https://github.com/gowrieswaran/cryptostar-dapp-ethereum/blob/master/screenshots/npm-run-dev.PNG)

7.Project is running at http://localhost:8080/

![Project screen](https://github.com/gowrieswaran/cryptostar-dapp-ethereum/blob/master/screenshots/main-screen.PNG)
## Create a Star

To create a star, ensure you are logged in to Metamask and enter the details to create a star. Once Metamask confirms the transaction, the owner of the star is displayed on the screen.

![Create a Star](https://github.com/gowrieswaran/cryptostar-dapp-ethereum/blob/master/screenshots/create-input.PNG)

![Metamask Confirmation](https://github.com/gowrieswaran/cryptostar-dapp-ethereum/blob/master/screenshots/mm-confirm.PNG)

On successful creation, it displays the address of the star owner.

![display star owner](https://github.com/gowrieswaran/cryptostar-dapp-ethereum/blob/master/screenshots/display-star-owner.PNG)

## Lookup a Star

To lookup a star, enter the token id of the star and it returns the name of the star.

![lookup star](https://github.com/gowrieswaran/cryptostar-dapp-ethereum/blob/master/screenshots/lookup-star.PNG)

### ERC-721 Token name - My Star Token

### ERC-721 Token symbol - MST

![token name](https://github.com/gowrieswaran/cryptostar-dapp-ethereum/blob/master/screenshots/mst.PNG)

### Token address - 0x9Bf81F64C7Eb91bea8bCeF489F94584Ac924Bede

![token address](https://github.com/gowrieswaran/cryptostar-dapp-ethereum/blob/master/screenshots/erc-token-rinkeby.PNG)
