// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TreasuryDEX is Ownable {
    using SafeMath for uint256;
    string public constant VER = "1.0";

    uint256 private immutable loll_cap = 1000000 * 10**18;
    address private immutable loll_address =
        0x430e940955c7e8Af9E7A989B4684294e726A3514;
    address private immutable weth_address =
        0xAd9C60B3826eA2BeD99F308be76d7e10D74cEf66; // this is $Victory - JUST FOR TESTING

    // WEth address -> 0x7ceb23fd6bc0add59e62ac25578270cff1b9f619

    constructor() {
        // nothing
    }

    /**
     * Returns the available ETH balance stored
     */
    function etherBalance() public view returns (uint256) {
        return IERC20(weth_address).balanceOf(address(this));
    }

    /**
     * Returns the available $Loll balance stored
     */
    function lollBalance() public view returns (uint256) {
        return IERC20(loll_address).balanceOf(address(this));
    }

    /**
     * Returns the user ETH balance stored
     */
    function wallet_etherBalance(address wallet) public view returns (uint256) {
        return IERC20(weth_address).balanceOf(address(wallet));
    }

    /**
     * Returns the user $Loll balance stored
     */
    function wallet_lollBalance(address wallet) public view returns (uint256) {
        return IERC20(loll_address).balanceOf(address(wallet));
    }

    /**
     * Swaps $Loll for Ether - make sure you have approved the amount for $loll first
     */
    function swapLoll(uint256 _amount) public {
        require(etherBalance() > 0, "Treasury is empty");

        IERC20(loll_address).transferFrom(msg.sender, address(this), _amount);

        uint256 loll_to_swap = _amount;
        uint256 ether_to_send = etherBalance(address(this)).mul(
            loll_to_swap.div(loll_cap)
        );

        // send ETH to sender
        IERC20(weth_address).transfer(msg.sender, ether_to_send);
    }

    /**
     * Withdraw loll
     */
    function withdrawLoll(uint256 amount) public onlyOwner {
        IERC20(loll_address).transfer(msg.sender, amount);
    }

    /**
     * Withdraw Ether
     */
    function withdrawEth(uint256 amount) public onlyOwner {
        IERC20(weth_address).transfer(msg.sender, amount);
    }

    /**
     * Destroy DEX after sending everything to an address
     */
    function destroySmartContract(address payable _to) public onlyOwner {
        withdrawEth(etherBalance());
        withdrawLoll(lollBalance());
        selfdestruct(_to);
    }
}
