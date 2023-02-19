import { ethers } from 'ethers';
import { GARDEN_ADDRESS, GARDEN_ABI } from '../contracts/garden_contract.js';


const provider = new ethers.providers.JsonRpcProvider(`https://bsc-mainnet.gateway.pokt.network/v1/lb/${process.env.POKT_Portal_ID}`);
const contract = new ethers.Contract(GARDEN_ADDRESS, GARDEN_ABI, provider);


export const Total_Garden_Lp_Locked = async () => {
    return ethers.utils.formatEther(await contract.getBalance());
};