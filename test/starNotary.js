//import 'babel-polyfill';
//import Web3 from "web3";
const StarNotary = artifacts.require("./starNotary.sol");

let instance;
let accounts;
//const web3 = new Web3();
contract("StarNotary", async accs => {
  accounts = accs;
});

it("can Create a Star", async () => {
  let tokenId = 1;
  let instance = await StarNotary.deployed();
  await instance.createStar("Awesome Star!", tokenId, { from: accounts[0] });
  assert.equal(await instance.tokenIdToStarInfo.call(tokenId), "Awesome Star!");
});

it("lets user1 put up their star for sale", async () => {
  let user1 = accounts[1];
  let instance = await StarNotary.deployed();
  let starId = 2;
  let starPrice = web3.utils.toWei("0.01", "ether");
  await instance.createStar("awesome star", starId, { from: user1 });
  await instance.putStarUpForSale(starId, starPrice, { from: user1 });
  assert.equal(await instance.starsForSale.call(starId), starPrice);
});

it("lets user1 get the funds after the sale", async () => {
  let user1 = accounts[1];
  let user2 = accounts[2];
  let instance = await StarNotary.deployed();
  let starId = 3;
  let starPrice = web3.utils.toWei("0.01", "ether");
  await instance.createStar("awesome star", starId, { from: user1 });
  await instance.putStarUpForSale(starId, starPrice, { from: user1 });
  let balanceOfUser1BeforeTransaction = await web3.eth.getBalance(user1);
  // balanceOfUser1BeforeTransaction = Number(balanceOfUser1BeforeTransaction);
  // console.log(typeof balanceOfUser1BeforeTransaction);
  await instance.buyStar(starId, { from: user2, value: starPrice });
  let balanceOfUser1AfterTransaction = await web3.eth.getBalance(user1);
  let finalValue = Number(balanceOfUser1BeforeTransaction) + Number(starPrice);

  assert.equal(finalValue, Number(balanceOfUser1AfterTransaction));
});

it("lets user2 buy a star, if it is put up for sale", async () => {
  let user1 = accounts[1];
  let user2 = accounts[2];
  let instance = await StarNotary.deployed();
  let starId = 4;
  let starPrice = web3.utils.toWei("0.01", "ether");
  await instance.createStar("awesome star", starId, { from: user1 });
  await instance.putStarUpForSale(starId, starPrice, { from: user1 });
  let balanceOfUser1BeforeTransaction = await web3.eth.getBalance(user2);
  await instance.buyStar(starId, { from: user2, value: starPrice });
  assert.equal(await instance.ownerOf.call(starId), user2);
});

it("lets user2 buy a star and decreases its balance in ether", async () => {
  let user1 = accounts[1];
  let user2 = accounts[2];
  let instance = await StarNotary.deployed();
  let starId = 5;
  let starPrice = web3.utils.toWei("0.01", "ether");
  await instance.createStar("awesome star", starId, { from: user1 });
  await instance.putStarUpForSale(starId, starPrice, { from: user1 });
  let balanceOfUser1BeforeTransaction = await web3.eth.getBalance(user2);
  const balanceOfUser2BeforeTransaction = await web3.eth.getBalance(user2);
  await instance.buyStar(starId, {
    from: user2,
    value: starPrice,
    gasPrice: 0
  });
  const balanceAfterUser2BuysStar = await web3.eth.getBalance(user2);
  let finalValue =
    Number(balanceOfUser2BeforeTransaction) - Number(balanceAfterUser2BuysStar);
  assert.equal(finalValue, starPrice);
});

it("lets users add symbol and token to a star", async () => {
  let instance = await StarNotary.deployed();
  let getTokenName = await instance.name();
  let getTokenSymbol = await instance.symbol();
  assert.equal(getTokenName, "My Star Token");
  assert.equal(getTokenSymbol, "MST");
});

it("lets user1 and user2 to exchange their stars", async () => {
  let instance = await StarNotary.deployed();
  let user1 = accounts[0];
  let user2 = accounts[1];
  let tokenId1 = 7;
  let tokenId2 = 8;
  await instance.createStar("Star1", tokenId1, { from: user1 });
  await instance.createStar("Star2", tokenId2, { from: user2 });
  await instance.exchangeStars(tokenId1, tokenId2);
  assert.equal(await instance.getOwner(tokenId2), user1);
  assert.equal(await instance.getOwner(tokenId1), user2);
});

it("lets user1 to transfer stars to user2", async () => {
  let instance = await StarNotary.deployed();
  let tokenId = 6;
  let user1 = accounts[0];
  let user2 = accounts[1];
  await instance.createStar("Awesome Star!", tokenId, { from: user1 });
  await instance.transferStar(user2, tokenId, { from: user1 });
  assert.equal(await instance.getOwner(tokenId), user2);
});
