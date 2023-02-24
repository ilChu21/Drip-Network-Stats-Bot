import { ethers } from 'ethers';


export const provider = new ethers.providers.JsonRpcProvider(`https://bsc-mainnet.gateway.pokt.network/v1/lb/${process.env.POKT_Portal_ID}`);