import { ethers } from 'ethers';
import { provider } from '../providers/providers.js';
import { BUSD_ADDRESS, BUSD_ABI } from '../contracts/busd_contract.js';
import { DRIP_BUSD_ADDRESS } from '../contracts/drip_busd_contract.js';
import { USDC_ADDRESS } from '../contracts/usdc_contract.js';
import { Get_Pcs_V2_Price } from './pcs_v2_router_functions.js';


const contract = new ethers.Contract(BUSD_ADDRESS, BUSD_ABI, provider);


export const Drip_Pcs_Busd_Balance = async () => {
    return ethers.utils.formatEther(await contract.balanceOf(DRIP_BUSD_ADDRESS));
};


export const Busd_Usdc_Price = async () => {
    return await Get_Pcs_V2_Price(BUSD_ADDRESS, USDC_ADDRESS);
};