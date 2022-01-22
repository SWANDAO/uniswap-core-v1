const Factory = artifacts.require("SwandaoFactory.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed();
  let token1Address, token2Address;
  if (network === "mainnet") {
    token1Address = "";
    token2Address = "";
  } else {
    token1Address = "0xACE26aEa4eA035C6F28778042D144c2bce917aD1";
    token2Address = "0x9F43E63d8eD7f26fD8e29089F8Db2b0e838cA557";
  }
  await factory.createPair(token1Address, token2Address);
};
