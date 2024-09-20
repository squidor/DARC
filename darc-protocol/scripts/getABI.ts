

import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";

// test for batch mint token instruction on DARC
async function main(){

    const DARC = await ethers.getContractFactory("DARC");
    const darc = await DARC.deploy();
    //console.log("DARC address: ", darc.address);
    await darc.deployed();
    await darc.initialize();

    const abi = darc.interface.getFunction("getTokenOwnerBalance");
    console.log("ABI: ", JSON.stringify(abi));
}

main();