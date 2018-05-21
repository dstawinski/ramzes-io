pragma solidity ^0.4.23;

import "./ERC20Basic.sol";
import "./SafeMath.sol";
import "./Ownable.sol";

contract TokenTokenToken is Ownable, ERC20Basic {
    using SafeMath for uint256;

    mapping(address => uint256) private balances;
    string public name;
    string public shortcut;
    uint256 public totalSupply_;
    uint256 public decimals;

    constructor(string _name, string _shortcut, uint256 _totalSupply, uint256 _decimals) public {
        name = _name;
        shortcut = _shortcut;
        totalSupply_ = _totalSupply;
        decimals = _decimals;
        balances[msg.sender] = totalSupply_;
    }

    function totalSupply() public view returns (uint256) {
        return totalSupply_;
    }
    
    function balanceOf(address who) public view returns (uint256) {
        require(who != address(0));

        return balances[who];
    }
    
    function transfer(address to, uint256 value) public returns (bool) {
        require(to != address(0));
        require(value <= balances[msg.sender]);

        balances[msg.sender] = balances[msg.sender].sub(value);
        balances[to] = balances[to].add(value);
        return true;
    }

}