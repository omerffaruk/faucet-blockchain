// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Faucet {
    // storage variables
    // Solidity is a typed language. A typed language is one in which the type of the variables is specified at compile time. Which means that they can only accept the data type they were originally intended for by the developer and can not be dynamically change.
    uint public funds = 1000;  // uint(unsigned integer) can only be positive
    int public counter = -10;  // int(signed integer) can be negative or positive
}