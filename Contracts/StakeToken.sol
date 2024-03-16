// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC20/extensions/ERC20Burnable.sol";

contract StakingToken is ERC20, ERC20Burnable {
    constructor() ERC20("StakingToken", "STK") {
        _mint(msg.sender, 21000000 * 10 ** decimals());
    }
}


// Token Address 0x3b48480DF6F5E79b395a1a03578f2e8aEcBeD99d