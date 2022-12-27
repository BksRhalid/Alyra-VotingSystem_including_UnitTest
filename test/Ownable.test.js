const { assert, expect, expectRevert, withNamedArgs } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Units tests on Workflows status", function () {
      let accounts;
      let vote;

      before(async () => {
        accounts = await ethers.getSigners();
        deployer = accounts[0];
      });

      //Test if STATES
      describe("🔎 Test Ownable Revert if the owner is not the caller", function () {
        beforeEach(async function () {
          await deployments.fixture(["voting"]);
          voting = await ethers.getContract("Voting");
        });
        it("should NOT start Proposal registering if NOT the owner", async function () {
          await expect(
            voting.connect(accounts[1]).startProposalsRegistering()
          ).to.be.revertedWith("Ownable: caller is not the owner");
        });
        it("should NOT end Proposal registering if NOT the owner", async function () {
          await voting.startProposalsRegistering();
          await expect(
            voting.connect(accounts[1]).endProposalsRegistering()
          ).to.be.revertedWith("Ownable: caller is not the owner");
        });
        it("should NOT start voting session if NOT the owner", async function () {
          await voting.startProposalsRegistering();
          await voting.endProposalsRegistering();
          await expect(
            voting.connect(accounts[1]).startVotingSession()
          ).to.be.revertedWith("Ownable: caller is not the owner");
        });
        it("should NOT end voting session if NOT the owner", async function () {
          await voting.startProposalsRegistering();
          await voting.endProposalsRegistering();
          await voting.startVotingSession();
          await expect(
            voting.connect(accounts[1]).endVotingSession()
          ).to.be.revertedWith("Ownable: caller is not the owner");
        });
        it("should NOT launch tallyVotes if NOT the owner", async function () {
          await voting.startProposalsRegistering();
          await voting.endProposalsRegistering();
          await voting.startVotingSession();
          await voting.endVotingSession();
          await expect(
            voting.connect(accounts[1]).tallyVotes()
          ).to.be.revertedWith("Ownable: caller is not the owner");
        });
      });
    });
