import { ethers } from 'ethers';

const POKT_RPC_URL = `https://bsc-mainnet.gateway.pokt.network/v1/lb/${process.env.POKT_Portal_ID}`;
const PUBLIC_RPC_URL = 'https://bsc-dataseed.binance.org/';


export const provider = new ethers.providers.JsonRpcProvider(PUBLIC_RPC_URL);