import { ethers } from 'ethers';
import { provider } from '../providers/providers.js';
import { PCS_V2_ROUTER_ADDRESS, PCS_V2_ROUTER_ABI } from '../contracts/pcs_v2_router_contract.js';


const contract = new ethers.Contract(PCS_V2_ROUTER_ADDRESS, PCS_V2_ROUTER_ABI, provider);


export const Get_Pcs_V2_Price = async (tokenInAddress, tokenOutAddress) => {
    const amountIn = ethers.utils.parseEther('1');
    const amountOut = await contract.getAmountsIn(amountIn, [tokenOutAddress, tokenInAddress]);

    return ethers.utils.formatEther(amountOut[0]);
};