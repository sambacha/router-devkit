pragma solidity 0.5.17;

function getPrice(
    IUniswapV2Pair uniswapV2Pair,
    address denominationToken,
    uint8 minBlocksBack,
    uint8 maxBlocksBack,
    ProofData memory proofData)
  
  public view
  
  returns (
    uint256 price,
    uint256 blockNumber
  )