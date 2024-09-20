

import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";

describe("payment_pay_cash_test", function () {
  it ("should pay cash", async function () {

    // initialize DARC
    const DARC = await ethers.getContractFactory("DARC");
    const darc = await DARC.deploy();
    //console.log("DARC address: ", darc.address);
    await darc.deployed();
    await darc.initialize();

    // initialize program

    const programOperatorAddress = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
    const result_entrance = await darc.entrance({
      programOperatorAddress: programOperatorAddress,
      notes: "pay cash 10000",
      operations: [{
        operatorAddress: programOperatorAddress,
        opcode: 26, // pay cash
        param: {
          
          
          STRING_ARRAY: [],
          BOOL_ARRAY: [],
          VOTING_RULE_ARRAY: [],
          PARAMETER_ARRAY: [],
          PLUGIN_ARRAY: [],
          UINT256_2DARRAY: [
            // pay 10000
            [BigNumber.from(10000), BigNumber.from(0), BigNumber.from(1)],
          ],
          ADDRESS_2DARRAY: [],
          BYTES: []
        }
      }], 
    }, {value: ethers.utils.parseEther("1.0")});

    // the cash balance should remains 1.0 ether - 10000 = 999999999999990000
    const result = await darc.getWithdrawableCashBalance(programOperatorAddress);
    expect(result.toBigInt().toString()).to.equal("999999999999990000");
  });


});