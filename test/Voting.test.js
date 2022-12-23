const { assert, expect } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
//const { BN, expectRevert, expectEvent } = require("@openzeppelin/test-helpers");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Units tests of Voting smart contract", function () {
      let accounts;
      let alyratoken;

      before(async () => {
        accounts = await ethers.getSigners();
        const _owner = accounts[0].address;
      });

      describe("Deployment", async function () {
        it("should deploy the smart contract", async function () {
          await deployments.fixture(["all"]);
          voting = await ethers.getContract("Voting");
        });
      });

      // tester le whitelist
      // tester les phases ou workflow
      // tester les events
      // tester les reverts
      // tester les fonctions de l'owner
      // tester les fonctions des prosals
      // tester les fonctions des votes
    });

//smartcontract.connect(account[1]).function()
//await expect().to.be.revertedWith("Ownable => caller is not the owner")
