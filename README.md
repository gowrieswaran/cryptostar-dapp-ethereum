# Build CryptoStar Dapp on Ethereum

This project involves devoloping a Dapp on Ethereum network. OpenZeppelin library is used to create the ERC721 token and put them on public Ethereum Networks.

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

5.Once it successfully passes all the test migrate it to the rinkeby network using
`truffle migrate --reset --network rinkeby`

6.For running the Front End of the DAPP, open another terminal from project directory, and run:
`npm run dev`

7.Project is running at http://localhost:8080/

## Create a Star

To create a star, ensure you are logged in to Metamask and enter the details to create a star. Once Metamask confirms the transaction, the owner of the star is displayed on the screen.

## Lookup a Star

To lookup a star, enter the token id of the star and it returns the name of the star.

### ERC-721 Token name - My Star Token

### ERC-721 Token symbol - MST

### Token address -
