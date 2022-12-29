<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/BksRhalid/Alyra-VotingSystem_including_UnitTest">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Alyra Voting System Project</h3>

  <p align="center">
    This project was perform for Alya Solidity training. It demonstrates how to implement a javascript unit test for that contract.
    <br />
    <a href="https://github.com/BksRhalid/Alyra-VotingSystem_including_UnitTest"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/BksRhalid/Alyra-VotingSystem_including_UnitTest/issues">Report Bug</a>
    ·
    <a href="https://github.com/BksRhalid/Alyra-VotingSystem_including_UnitTest/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

The objective of the exercise is to provide the unit tests of a smart contract including everts and revert.

the contract to be tested is based on a previous project. See below the repo link :

[Voting.sol](https://github.com/lecascyril/CodesRinkeby/blob/main/voting.sol)

In this context, we have created three test files: :

- `Ownable.test.js` : to test if Ownable from openzepplin is correctly implemented
  <br>
  ```sh
     Units tests on Ownable access functions
    🔎 Test Ownable Revert if the owner is not the caller
      ✔ should NOT start Proposal session registering if caller is not the owner (58ms)
      ✔ should NOT end Proposal session registering if caller is not the owner (46ms)
      ✔ should NOT start voting session if caller is not the owner (50ms)
      ✔ should NOT end voting session  if caller is not the owner (60ms)
      ✔ should NOT start tallyVotes if caller is not the owner (56ms)
  ```
- `Voting.test.js` : to test the each function of Voting smart contract separately
  <br>

  ```sh
    Units tests of each function of voting smart contract
    🔎 Deployment hardhat deploy testing
      ✔ should deploy the smart contract
    🔎 Get add new voters function unit test
      ✔ should emit event VoterRegistered
      ✔ should be able to set owner as a voter
      ✔ should add a new voter_1 and change bool isRegistered from false to true (40ms)
      ✔ should NOT add a new voter and revert caller is not the owner
    🔎 Get voters function unit test
      ✔ should return true for _owner and false for voter_1 not yet Registered
      ✔ should revert as voter is not registered
    🔎 AddVoter failed as voter registration is not open yet
      ✔ should NOT addVoter and revert with Voters registration is not open yet (95ms)
      ✔ should NOT addVoter if not the owner
    🔎 Get add new proposal function unit test
      ✔ should add a new proposal
      ✔ should emit event add proposal
    🔎  AddProposals failed as Proposals are not allowed yet
      ✔ should NOT addProposals and revert with Proposals are not allowed yet (109ms)
      ✔ should NOT addProposal if caller is not a Voter
    🔎 getOneProposal function unit test
      ✔ should NOT give proposal if not Voter (48ms)
    🔎 Get add new vote function unit test
      ✔ should add a new vote and increment voteCount
    🔎 Test revert setVote function unit test
      ✔ should revert setVote as the voting session not started (92ms)
      ✔ should revert as caller is not a voter (60ms)
      ✔ should revert with Voting session havent started yet (73ms)
      ✔ should revert with Proposal not found (47ms)
    🔎 Get end voting session function unit test
      ✔ should end the voting session (81ms)
    🔎 TallyVotes function unit test
      ✔ should return the winning proposal
      ✔ should change the status
    🔎 TallyVotes revert function unit test
      ✔ should NOT work if not votingSessionEnded
      ✔ should NOT work if not Owner (49ms)
  ```

- `VotingWorkflow.test.js` : to test the overall workflow of the Voting contract
  <br>
  ````sh
      Units tests for overall workflow of voting smart contract
    🔎 Control workflow status not allow to change if previous status is NOT correct
      ✔ should NOT start Proposal registering if the workflow status is not the expected one (67ms)
      ✔ should NOT end Proposal registering if the workflow status is not the expected one (63ms)
      ✔ should NOT start voting session in incorrect WF (62ms)
      ✔ should NOT end voting session if the workflow status is not the expected one (58ms)
      ✔ should NOT launch tallyVotes (65ms)
    🔎  Check event of each workflow status change
      ✔ should start Proposal registering if the owner
      ✔ should end Proposal registering if the owner
      ✔ should start voting session if the owner
      ✔ should end voting session if the owner
      ✔ should launch tallyVotes if the owner (45ms)
    ```
  ````

<strong> Below the coverage report of the test :</strong>

```sh
-------------|----------|----------|----------|----------|----------------|
File         |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-------------|----------|----------|----------|----------|----------------|
 contracts/  |      100 |    93.75 |      100 |      100 |                |
  Voting.sol |      100 |    93.75 |      100 |      100 |                |
-------------|----------|----------|----------|----------|----------------|
All files    |      100 |    93.75 |      100 |      100 |                |
-------------|----------|----------|----------|----------|----------------|
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Below the instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

### Prerequisites

Here the list things you need to use the software and how to install them.

- For this project we are going to use yarn

1.  installation

```sh
npm install --global yarn
```

2. check installation

```sh
 yarn --version
```

- solidity

### Installation

\_Below instruction installing and setting up the project.

1. Clone the repo
   ```sh
   git clone https://github.com/BksRhalid/Alyra-VotingSystem_including_UnitTest.git
   ```
2. Install packages

   ```sh
   yarn install
   ```

3. Enter your Wallet Private Key and API in `env`

   ```js
   const PK = "YOUR WALLET PRIVATE KEY";
   ```

   ```js
   const INFURA = "ENTER YOUR API";
   ```

   ```js
   const ETHERSCAN = "ENTER YOUR API";
   ```

4. Check dependencies used like Openzepplin contracts / hardhat-deploy

   ```sh
   yarn add --dev @openzeppelin/contracts
   yarn add --dev hardhat-deploy
   ```

In case of error:
\_TypeError: ethers.getContract is not a function

see reference : https://ethereum.stackexchange.com/questions/130125/solvedpatrickcollins-solidity-course-2022-lesson-7-112038-typeerror-e

```sh
yarn add --dev hardhat @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Try running some of the following tasks:

```shell
REPORT_GAS=true npx hardhat test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/rhalid
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
[readme-top]: #readme-top

```

```
