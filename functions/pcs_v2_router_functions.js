import { ethers } from 'ethers';
import { PCS_V2_ROUTER_ADDRESS, PCS_V2_ROUTER_ABI } from '../contracts/pcs_v2_router_contract.js';


const provider = new ethers.providers.JsonRpcProvider(`https://bsc-mainnet.gateway.pokt.network/v1/lb/${process.env.POKT_Portal_ID}`);
const contract = new ethers.Contract(PCS_V2_ROUTER_ADDRESS, PCS_V2_ROUTER_ABI, provider);


export const Get_Pcs_V2_Price = async (tokenInAddress, tokenOutAddress) => {
    const amountIn = ethers.utils.parseEther('1');
    const amountOut = await contract.getAmountsIn(amountIn, [tokenOutAddress, tokenInAddress]);

    return ethers.utils.formatEther(amountOut[0]);
};