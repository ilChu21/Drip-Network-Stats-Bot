import { ethers } from 'ethers';
import { FAUCET_ADDRESS, FAUCET_ABI } from '../contracts/faucet_contract.js';


const provider = new ethers.providers.JsonRpcProvider(`https://bsc-mainnet.gateway.pokt.network/v1/lb/${process.env.POKT_Portal_ID}`);
const contract = new ethers.Contract(FAUCET_ADDRESS, FAUCET_ABI, provider);


export const Total_Faucet_Wallets = async () => {
    return await contract.total_users();
}