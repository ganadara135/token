const KingToken = artifacts.require("./KingToken");
//const ERC20 = artifacts.require("./ERC20");

module.exports = function(deployer) {
  deployer.deploy(KingToken);
  //deployer.deploy(ERC20);
};
