let newcon = artifacts.require("./newcon.sol");
let ncinstance;

contract("New Contract", function (accounts) {
  context("Basic Deploy Tests:", function () {
    it("Contract Deployed", function () {
      return newcon.deployed().then(function (instance) {
        ncinstance = instance;
        assert(instance !== undefined, "Contract should Deploy");
      });
    });
  });
});
