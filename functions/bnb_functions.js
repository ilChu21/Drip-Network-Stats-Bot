import { ethers } from 'ethers';
import { provider } from '../index.js';
import { WBNB_ADDRESS, WBNB_ABI } from '../contracts/wbnb_contract.js';
import { BUSD_ADDRESS } from '../contracts/busd_contract.js';
import { Get_Pcs_V2_Price } from './pcs_v2_router_functions.js';


const contract = new ethers.Contract(WBNB_ADDRESS, WBNB_ABI, provider);

export const Bnb_Pcs_Price = async () => {
    return await Get_Pcs_V2_Price(WBNB_ADDRESS, BUSD_ADDRESS);
}