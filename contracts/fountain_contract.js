export const FOUNTAIN_ADDRESS = '0x4Fe59AdcF621489cED2D674978132a54d432653A';


export const FOUNTAIN_ABI = [
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function balanceOf(address) view returns (uint256)',
    'function tokenBalance() view returns (uint256)',
    'function bnbBalance() view returns (uint256)',
    'function getTokenToBnbInputPrice(uint256) view returns (uint256)',
];