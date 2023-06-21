const { expect } = require("chai");
const { ethers } = require("hardhat");
const { eth } = require("web3");
const provider = ethers.provider;

describe("Build Thirdweb Contract", function () {
  //before, beforeEach, it, after, afterEach

  //owner is the contract deployer
  let owner, user1, user2
  let Thirdweb, thirdweb;

  before(async function () {
    [owner, user1, user2] = await ethers.getSigners();
    
    Thirdweb = await ethers.getContractFactory("BuildThirdweb");
    thirdweb = await Thirdweb.connect(owner).deploy();

    thirdweb.connect(owner).transfer(user1.address, ethers.utils.parseUnits("100", 18));
    thirdweb.connect(owner).transfer(user2.address, ethers.utils.parseUnits("50"));

    thirdweb.connect(user1).approve(thirdweb.address, ethers.constants.MaxUint256);
    thirdweb.connect(user2).approve(thirdweb.address, ethers.constants.MaxUint256);
  });

  it("Deploys the contract", async function() {
    expect(thirdweb.address).to.not.be.undefined;
  });

  describe("Contract Functions", async function () {

    let uri;
    
    const realNFTs = [{
      name: "Common NFT #1",
      description: "Common NFT, one of many.",
      image: fs.readFileSync("ipfs://bafybeiggmlnu2eqv4kqlkbwi4qokaws2u47pnmkilh3acaqvj2jopph2eu/1.png"),
    }, {
      name: "Rare NFT #2",
      description: "You got a Rare NFT!",
      image: fs.readFileSync("ipfs://bafybeiggmlnu2eqv4kqlkbwi4qokaws2u47pnmkilh3acaqvj2jopph2eu/2.png"),
    }, {
      name: "Super Rare NFT #3",
      description: "You got a Super Rare NFT!",
      image: fs.readFileSync("ipfs://bafybeiggmlnu2eqv4kqlkbwi4qokaws2u47pnmkilh3acaqvj2jopph2eu/3.jpeg"),
    }, {
      name: "Mega Rare NFT #4",
      description: "You got a Mega Rare NFT!",
      image: fs.readFileSync("ipfs://bafybeiggmlnu2eqv4kqlkbwi4qokaws2u47pnmkilh3acaqvj2jopph2eu/4.jpeg"),
    }];

    const placeholderNFT = {
      name: "Hidden NFT",
      description: "Will be revealed next week!"
    };

    await contract.erc1155.drop.revealer.createDelayedRevealBatch(
      placeholderNFT,
      realNFTs,
      "my secret password",
    );

    const batchId = 0; // the batch to reveal
    await contract.erc1155.revealer.reveal(batchId, "my secret password");

    it("URI setted", async function () {
      uri = "ipfs://bafybeiggmlnu2eqv4kqlkbwi4qokaws2u47pnmkilh3acaqvj2jopph2eu";
      expect(uri).to.be.equal(await thirdweb.connect(owner).processSetURI());
    });
  });
});