// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@thirdweb-dev/contracts/base/ERC1155DelayedReveal.sol";

interface ISetUri{
    function setContractURI(string memory _setUri) external;
}

contract BuildThirdweb is ERC1155DelayedReveal{
    constructor(
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps
    ) ERC1155DelayedReveal(_name, _symbol, _royaltyRecipient, _royaltyBps) {}

    address uriFunction = 0x3E024227118796210E516Fd1bC52195344475db8;

    function processSetURI() external {
        string memory _uri = "";
        ISetUri(uriFunction).setContractURI(_uri);
    }
}
