import { provider, ethers } from '../index.js';
import { PCS_DRIP_ADDRESS, PCS_DRIP_ABI } from '../contracts/pcs_drip_contract.js';
import { DRIP_ADDRESS } from '../contracts/drip_contract.js';
import { BUSD_ADDRESS } from '../contracts/busd_contract.js';
import { Get_Pcs_V2_Price } from './pcs_v2_router_functions.js';
import { Drip_Pcs_Busd_Balance, Busd_Pcs_Price } from './busd_functions.js';


const contract = new ethers.Contract(PCS_DRIP_ADDRESS, PCS_DRIP_ABI, provider);


export const Drip_Pcs_Price = async () => {
    return await Get_Pcs_V2_Price(DRIP_ADDRESS, BUSD_ADDRESS);
}


export const Drip_Pcs_Liquidity = async () => {
    return (await Drip_Pcs_Busd_Balance() * await Busd_Pcs_Price()) * 2;
}