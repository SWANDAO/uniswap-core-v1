pragma solidity =0.5.16;

import '../SwandaoERC20.sol';

contract ERC20 is SwandaoERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
