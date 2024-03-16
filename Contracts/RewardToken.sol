// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC20/extensions/ERC20Burnable.sol";

contract RewardsToken is ERC20, ERC20Burnable {
    constructor() ERC20("RewardsToken", "RTK") {
        _mint(msg.sender, 21000000 * 10 ** decimals());
    }
}


// token address 0x220E86aa52FE8423FAa7E80f329fb27993CD51a6