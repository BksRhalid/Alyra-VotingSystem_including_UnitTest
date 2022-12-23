const { assert, expect } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
//const { BN, expectRevert, expectEvent } = require("@openzeppelin/test-helpers");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Units tests of Voting smart contract", function () {
      let accounts;

      before(async () => {
        accounts = await ethers.getSigners();
        _owner = accounts[0];
      });

      describe("🔎 Deployment hardhat deploy testing", async function () {
        it("should deploy the smart contract", async function () {
          await deployments.fixture(["voting"]);
          voting = await ethers.getContract("Voting");
        });
      });

      // ::::::::::::: UNIT TEST FOR GET VOTERS ::::::::::::: //

      describe("🔎 Get voters function unit test", async function () {
        beforeEach(async function () {
          await deployments.fixture(["voting"]);
          voting = await ethers.getContract("Voting");
          await voting.addVoter(accounts[0].address); // set the owner as a voter
        });
        it("should return true for _owner and false for voter_1 not yet Registered", async function () {
          voter_owner = await voting.getVoter(accounts[0].address);
          voter_1 = await voting.getVoter(accounts[1].address);
          expect(voter_owner.isRegistered).to.be.true;
          expect(voter_1.isRegistered).to.be.false;
        });
        // it("should revert as voter is not registered", async function () {
        //   console.log(
        //     expect(
        //       await voting.connect(accounts[1]).getVoter(accounts[0].address)
        //     ).to.be.revertedWith("Voter does not exist")
        //   );
        // });
      });

      // ::::::::::::: UNIT TEST FOR REGISTRATION FUNCTION ::::::::::::: //

      describe("🔎 Get add new voters function unit test", async function () {
        beforeEach(async function () {
          await deployments.fixture(["voting"]);
          voting = await ethers.getContract("Voting"); // I should NOT add this in the beforeEach set the owner as a voter
        });
        it("should be able to set owner as a voter ", async function () {
          expect(await voting.addVoter(accounts[0].address))
            .to.emit(voting, "VoterRegistered")
            .withArgs(accounts[0].address);
          voterOwner = await voting.getVoter(accounts[0].address);
          expect(voter_owner.isRegistered).to.be.true;
        });
        it("should NOT add a new voter and revert caller is not the owner ", async function () {
          // expect(
          //   await voting.connect(accounts[1]).addVoter(accounts[2].address)
          // ).to.be.revertedWith("Ownable: caller is not the owner");
        });
        it("should add a new voter_1 and change bool isRegistered from false to true", async function () {
          await voting.addVoter(accounts[0].address);
          voter_1 = await voting.getVoter(accounts[1].address);
          expect(voter_1.isRegistered).to.be.false;
          await voting.addVoter(accounts[1].address);
          voter_1 = await voting.getVoter(accounts[1].address);
          expect(voter_1.isRegistered).to.be.true;
        });
      });

      // Unit test for proposal

      describe("🔎 Get add new proposal function unit test", async function () {
        beforeEach(async function () {
          await deployments.fixture(["voting"]);
          voting = await ethers.getContract("Voting");
          await voting.addVoter(accounts[0].address);
          voter_0 = await voting.getVoter(accounts[1].address);
          await voting.addVoter(accounts[1].address);
          voter_1 = await voting.getVoter(accounts[1].address);
        });

        it("should add a new proposal", async function () {
          startProposalsRegistering = await voting.startProposalsRegistering();
          await voting.connect(_owner).addProposal("proposal 1");
          newProposal = await voting.getOneProposal(1);
          expect(newProposal.description).to.be.equal("proposal 1");
        });
      });

      // Unit test for vote

      describe("🔎 Get add new vote function unit test", async function () {
        beforeEach(async function () {
          await deployments.fixture(["voting"]);
          voting = await ethers.getContract("Voting");
          await voting.addVoter(accounts[0].address);
          voter_0 = await voting.getVoter(accounts[1].address);
          await voting.addVoter(accounts[1].address);
          voter_1 = await voting.getVoter(accounts[1].address);
          await voting.addVoter(accounts[2].address);
          voter_2 = await voting.getVoter(accounts[2].address);
          await voting.startProposalsRegistering();
          await voting.addProposal("proposal 1");
          await voting.connect(accounts[1]).addProposal("proposal 2");
          await voting.connect(accounts[1]).addProposal("proposal 3");
          await voting.endProposalsRegistering();
        });

        it("should add a new vote and increment voteCount", async function () {
          await voting.startVotingSession();
          await voting.connect(accounts[2]).setVote(2);
          proposal_2 = await voting.getOneProposal(2);
          expect(proposal_2.voteCount).to.be.equal(1);
        });

        // tester les events
        // tester les reverts

        // Unit test for workflowStatus

        // Unit test for overall workflow
      });
    });
