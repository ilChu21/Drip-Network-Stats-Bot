import { ethers } from 'ethers';
import { provider } from '../providers/providers.js';
import { GARDEN_ADDRESS, GARDEN_ABI } from '../contracts/garden_contract.js';


const contract = new ethers.Contract(GARDEN_ADDRESS, GARDEN_ABI, provider);


export const Total_Garden_Lp_Locked = async () => {
    return ethers.utils.formatEther(await contract.getBalance());
};