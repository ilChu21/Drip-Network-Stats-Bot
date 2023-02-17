import { ethers } from 'ethers';
import { provider } from '../index.js';
import { FAUCET_ADDRESS, FAUCET_ABI } from '../contracts/faucet_contract.js';


const contract = new ethers.Contract(FAUCET_ADDRESS, FAUCET_ABI, provider);


export const Total_Faucet_Wallets = async () => {
    return await contract.total_users();
}