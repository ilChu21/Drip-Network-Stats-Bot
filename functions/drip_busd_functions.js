import { ethers } from 'ethers';
import { provider } from '../providers/providers.js';
import { DRIP_BUSD_ADDRESS, DRIP_BUSD_ABI } from '../contracts/drip_busd_contract.js';
import { DRIP_ADDRESS } from '../contracts/drip_contract.js';
import { BUSD_ADDRESS } from '../contracts/busd_contract.js';
import { Get_Pcs_V2_Price } from './pcs_v2_router_functions.js';
import { Drip_Pcs_Busd_Balance, Busd_Usdc_Price } from './busd_functions.js';


const contract = new ethers.Contract(DRIP_BUSD_ADDRESS, DRIP_BUSD_ABI, provider);


export const Drip_Busd_Price = async () => {
    return await Get_Pcs_V2_Price(DRIP_ADDRESS, BUSD_ADDRESS);
};


export const Drip_Busd_Liquidity = async () => {
    return (await Drip_Pcs_Busd_Balance() * await Busd_Usdc_Price()) * 2;
};


export const Total_Circulating_Drip_Busd = async () => {
    return ethers.utils.formatEther(await contract.totalSupply());
};


export const Drip_Busd_Lp_Price = async () => {
    return await Drip_Busd_Liquidity() / await Total_Circulating_Drip_Busd();
};