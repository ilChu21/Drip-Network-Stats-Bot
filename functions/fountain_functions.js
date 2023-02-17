import { ethers } from 'ethers';
import { FOUNTAIN_ADDRESS, FOUNTAIN_ABI } from '../contracts/fountain_contract.js';
import { Fetch_Bnb_Price } from './api_functions.js';
import { Bnb_Pcs_Price } from './bnb_functions.js';


const provider = new ethers.providers.JsonRpcProvider(`https://bsc-mainnet.gateway.pokt.network/v1/lb/${process.env.POKT_Portal_ID}`);
const contract = new ethers.Contract(FOUNTAIN_ADDRESS, FOUNTAIN_ABI, provider);


export const Fountain_Drip_Balance = async () => {
    return ethers.utils.formatEther(await contract.tokenBalance());
}


export const Fountain_Bnb_Balance = async () => {
    return ethers.utils.formatEther(await contract.bnbBalance());
}


export const Bnb_Drip_Ratio = async () => {
    return ethers.utils.formatEther(await contract.getTokenToBnbInputPrice(1000000000000000000n));
}


export const Fountain_Liquidity = async () => {
    return (await Fountain_Bnb_Balance() * await Bnb_Pcs_Price()) * 2;
}


export const Drip_Fountain_Price = async () => {
    try {
        return await Bnb_Drip_Ratio() * await Fetch_Bnb_Price();
    } catch {
        return await Bnb_Drip_Ratio() * await Bnb_Pcs_Price();
    }
}


export const Total_Circulating_Drop = async () => {
    return ethers.utils.formatEther(await contract.totalSupply());
}