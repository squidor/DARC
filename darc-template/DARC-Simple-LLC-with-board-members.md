# DARC Simple LLC with board members

## Introduction

DARC Simple LLC with boards is a template of multiple plugins that allow you to create a simple LLC with boards on your DARC virtual machine. The rules of the LLC are simple and are as follows:

1. The structure includes two levels of tokens: common stock and board members.
2. Level-0 tokens represent common stock with a voting weight of 1 and a dividend weight of 1.
3. Level-1 tokens represent board members with a voting weight of 1 and a dividend weight of 0.
4. All operations require approval from board members (Level-1 token holders), except for the following:

   - Pay cash (dividendable)
   - Offer dividends

5. Any address holding a Level-1 token can call emergency agent to take over the control of the LLC structure in case of emergency, if necessary.

## Notes

 1. All token transfer, token creation, token destruction, adding plugins, enabling plugins, disabling plugins and other operations need to be voted and approved by the board members, except for the following:
    - Pay cash (dividendable)
    - Offer dividends
    - Call emergency agent

 2. Here are a few parameters you need to set when deploying the LLC structure:
 
    - `approvalThreshold` is a number in range (0, 100), which is the percentage of the board members who need to approve the operation. We recommend to set it to 99, which means that all the board members need to approve the operation.

    - `votingDurationInSeconds` is the duration of the voting process in seconds. We recommend to set it to 7200, which means that the voting process will last for 2 hours.

    - `executionDurationInSeconds` is the duration of the execution pending process in seconds. We recommend to set it to 7200, which means that the program should be executed within 2 hours after the voting process is finished and the operation is approved.

    - `bIsAbsoluteMajority` is a boolean value, which is used to determine whether the approval threshold is absolute majority or not. We recommend to set it to false, which means that the approval threshold is not absolute majority.

 3. You can still add more plugins to the LLC structure, but you need to make sure that all the operations need to be voted and approved by the board members.

 4. For emergency, you can add one or a few emergency agent addresses to the LLC structure, which can take over the control of the LLC structure in case of emergency.

## Deployment(in Bylaw Script)

After deploying a fresh DARC virtual machine, you can deploy the DARC Simple LLC with board members by calling the following function in the Bylaw Script:

```javascript
buildSimpleLLCWithBoardMembers(
   L0TokenOwnerList,
   L0TokenNumberList,
   L1TokenOwnerList,
   L1TokenNumberList,
   approvalThreshold,
   votingDurationInSeconds,
   executionDurationInSeconds,
   bIsAbsoluteMajority,
);
```

For example, if `addr0`, `addr1`, `addr2`, `addr3`, `addr4` are the addresses of the board members, and they own 10, 20, 30, 40, 50 level-0 tokens, and they own 1, 1, 1, 1, 1 level-1 tokens, and the `approvalThreshold` is 99, `votingDurationInSeconds` is 7200, `executionDurationInSeconds` is 7200, and `bIsAbsoluteMajority` is false.

Then you can call the following:

```javascript
buildSimpleLLCWithBoardMembers(
   [addr0, addr1, addr2, addr3, addr4],
   [10, 20, 30, 40, 50],
   [addr0, addr1, addr2, addr3, addr4],
   [1,1,1,1,1],
   99,
   7200,
   7200,
   false
);
```

