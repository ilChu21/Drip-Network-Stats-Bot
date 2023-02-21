import { ethers } from 'ethers';
import { BUSD_ADDRESS, BUSD_ABI } from '../contracts/busd_contract.js';
import { DRIP_BUSD_ADDRESS } from '../contracts/drip_busd_contract.js';
import { USDC_ADDRESS } from '../contracts/usdc_contract.js';
import { Get_Pcs_V2_Price } from './pcs_v2_router_functions.js';


const provider = new ethers.providers.JsonRpcProvider(`https://bsc-mainnet.gateway.pokt.network/v1/lb/${process.env.POKT_Portal_ID}`);
const contract = new ethers.Contract(BUSD_ADDRESS, BUSD_ABI, provider);


export const Drip_Pcs_Busd_Balance = async () => {
    return ethers.utils.formatEther(await contract.balanceOf(DRIP_BUSD_ADDRESS));
};


export const Busd_Usdc_Price = async () => {
    return await Get_Pcs_V2_Price(BUSD_ADDRESS, USDC_ADDRESS);
};