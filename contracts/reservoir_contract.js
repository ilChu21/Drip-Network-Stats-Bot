export const RESERVOIR_ADDRESS = '0xB486857fac4254A7ffb3B1955EE0C0A2B2ca75AB';


export const RESERVOIR_ABI = [
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function balanceOf(address) view returns (uint)',
    'function players() view returns (uint256)',
    'function lockedTokenBalance() view returns (uint256)',
    'function totalTokenBalance() view returns (uint256)',
];