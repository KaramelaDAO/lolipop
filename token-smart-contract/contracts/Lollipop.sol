// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract Lollipop is ERC20, Ownable {
    uint256 private immutable _cap = 1000000 * 10**decimals();

<<<<<<< HEAD
    constructor() ERC20("Lollipop", "loll") {
=======
    constructor() ERC20("Lollipop", unicode"🍭"){
>>>>>>> 6fa02bd26541cd8b07db26b61f34a01e87c0252c
        _mint(msg.sender, cap());
    }

    /**
     * @dev Returns the cap on the token's total supply.
     */
    function cap() public view virtual returns (uint256) {
        return _cap;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(
            ERC20.totalSupply() + amount <= cap(),
            "ERC20Capped: cap exceeded"
        );
        _mint(to, amount);
    }
}
