// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@thirdweb-dev/contracts/base/ERC1155DelayedReveal.sol";

interface ISetUri{
    function setContractURI(string memory _setUri) external;
}

interface IRevealNFT {
    function reveal(uint256 _index, bytes calldata _key) external;
}

interface ILazyMintNFT {
    function lazyMint(uint256 _amount, string calldata _baseURIForTokens, bytes memory _data) external;
}
//token id 0 için bytes32 versiyonu
//1 için 1 in bytes32 si
contract BuildThirdweb is ERC1155DelayedReveal{
    constructor(
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps
    ) ERC1155DelayedReveal(_name, _symbol, _royaltyRecipient, _royaltyBps) {}

    address contractAddress = 0x3E024227118796210E516Fd1bC52195344475db8;

    function processSetURI() external {
        string memory _uri = "ipfs://bafybeiggmlnu2eqv4kqlkbwi4qokaws2u47pnmkilh3acaqvj2jopph2eu";
        ISetUri(contractAddress).setContractURI(_uri);
    }

    function processReveal(bytes calldata _key) external {
        uint256 _index;
        IRevealNFT(contractAddress).reveal(_index, _key);
    }

    function processLazyMint (bytes calldata _data) external {
        uint256 _amount = 1;
        string memory _baseURIForTokens = "ipfs://bafybeiggmlnu2eqv4kqlkbwi4qokaws2u47pnmkilh3acaqvj2jopph2eu";
        ILazyMintNFT(contractAddress).lazyMint(_amount, _baseURIForTokens, _data);
    }
}
