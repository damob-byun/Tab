var Tab = artifacts.require("./Tab.sol");

module.exports = function (deployer) {
  deployer.deploy(Tab, 250000000);
};
