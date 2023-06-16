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
    thirdweb.connect(user1).approve(thirdweb.address, ethers.constants.MaxUint256);
  });

  it("Deploys the contract", async function() {
    expect(thirdweb.address).to.not.be.undefined;
  });

  it("uri setted", async function () {
    
  });

  it("nft minted", async function () {
    
  });

  it("Nft Metadata does not appear", async function () {
    
  });

  it("NFT revealed and metadata appeared", async function() {

  });
});