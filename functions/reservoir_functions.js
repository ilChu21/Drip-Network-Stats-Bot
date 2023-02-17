import { ethers } from 'ethers';
import { provider } from '../index.js';
import { RESERVOIR_ADDRESS, RESERVOIR_ABI } from '../contracts/reservoir_contract.js';
import { Total_Circulating_Drop, Fountain_Liquidity } from './fountain_functions.js';
import { Bnb_Pcs_Price } from './bnb_functions.js';


const contract = new ethers.Contract(RESERVOIR_ADDRESS, RESERVOIR_ABI, provider);


export const Total_Reservoir_Wallets = async () => {
    return await contract.players();
}


export const Locked_Drop = async () => {
    return ethers.utils.formatEther(await contract.lockedTokenBalance());
}


export const Balance_Of_Drop = async (address) => {
    return ethers.utils.formatEther(await contract.balanceOf(address));
}


export const Reservoir_Drop_Balance = async () => {
    return ethers.utils.formatEther(await contract.totalTokenBalance());
}


export const Drop_Price = async () => {
    return await Fountain_Liquidity() / await Total_Circulating_Drop();
}


export const Drop_Bnb_Price = async () => {
    return await Drop_Price() / await Bnb_Pcs_Price();
}