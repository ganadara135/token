const web3 = require('web3');
const BN = require('bn.js')
//const BigNumber = web3.BigNumber;

const KingToken = artifacts.require("KingToken");

//console.log("owner : ", owner);

contract("KingToken", (accounts) => {
 
    let tokenContract;
    const _name = "KING";
    const _symbol = "KING";
    const _decimals = 18;
    const _total_supply = new BN('1000000');
    const _over_total_supply = new BN('1100000000000000000');

    // beforeEach(async function() {            // KingToken  으로 접근해도 됨
    //     tokenContract = await KingToken.new();          
    // });

    it("Token Name ", () => {
        KingToken.deployed()
        .then(instance => instance.name())
        .then(name => {
            console.log("name : ", name)
           assert.equal(name,"KING","name is not Correct");
        })
        .catch( e => {
            console.log(e);
        });
    });

    it("TotalSupply", () => {
        KingToken.deployed()
        .then(instance => instance.totalSupply())
        .then(val => {
            console.log("totalSupply : ", val.toString(10))
            console.log("accounts[0] : ", accounts[0])
           // console.log("tokenContract  : ", tokenContract)
       //    assert.equal(name,"KING","name is not Correct");
        })
        .catch( e => {
            console.log(e);
        });
    });

    it("BalanceOF", () => {
        KingToken.deployed()
        .then(instance => instance.balanceOf(accounts[0]))
        .then(val => {
            console.log("balanceOf : ", val.toString(10))
        })
        .catch( e => {
            console.log(e);
        });
    });

    it("mintAirDrop", () => {
        KingToken.deployed()
        .then(instance => instance.mintAirDrop(accounts[1], 33))
        .catch( e => {
            console.log(e);
        });
        // .then(val => {
        //     console.log("True or False : ", val)
        //     // console.log("True or False : ", val)
        // })

       // console.log("accounts[1] : ", accounts[1])

        KingToken.deployed()
        .then(instance => instance.balanceOf(accounts[1]))
        .then(val => {
            console.log("balanceOf account of reciever : ", val.toString(10))
        })
        .catch( e => {
            console.log(e);
        });

    });

    it("Check TotalSupply Again", () => {
        KingToken.deployed()
        .then(instance => instance.totalSupply())
        .then(val => {
            console.log("totalSupply : ", val.toString(10))
        })
        .catch( e => {
            console.log(e);
        });
    });
   


    // describe("[Testcase 1 : check if the smart contract has been created as set in the variables]", () => {
    //     it("1.1. Is the token name the same as set in the variable?", async function() {
    //       (await token.name()).should.eq(_name);
    //     });
    
    //     it("1.2. Is the token symbol is the same as set in the variable?", async function() {
    //       (await token.symbol()).should.eq(_symbol);
    //     });
    
    //     it("1.3. Is the token decimals is the same as set in the variable?", async function() {
    //       (await token.decimals()).should.be.bignumber.equal(_decimals);
    //     });
    
    //     it("1.4. Is the total supply of the token the same as set in the variable total supply?", async function() {
    //       (await token.totalSupply()).should.be.bignumber.equal(
    //         1000000000000000000000000
    //       );
    //     });
    //   });
    

    //   describe("[Testcase 2 : check if the amount of the token supply has been transffered to the token owner]", () => {
    //     it("2.1. Is the total token amount issued are the same as that of the balance of the token owner?", async function() {
    //       const totalSupply = await token.totalSupply();
    //       const ownerBalance = await token.balanceOf(owner);
    
    //       ownerBalance.should.be.bignumber.equal(totalSupply);
    //     });
    //   });
    
    

})