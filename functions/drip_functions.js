import { ethers } from 'ethers';
import { provider } from '../providers/providers.js';
import { DRIP_ADDRESS, DRIP_ABI } from '../contracts/drip_contract.js';
import { TAX_VAULT_ADDRESS } from '../contracts/vault_contract.js';
import { DRIP_BUSD_ADDRESS } from '../contracts/drip_busd_contract.js';
import { Fountain_Drip_Balance } from './fountain_functions.js';


const contract = new ethers.Contract(DRIP_ADDRESS, DRIP_ABI, provider);


export const Total_Drip_Wallets = async () => {
    return await contract.players();
};


export const Total_Drip_Supply = async () => {
    return ethers.utils.formatEther(await contract.totalSupply());
};


export const Total_Drip_In_Wallets = async () => {
    return await Total_Drip_Supply() - await Fountain_Drip_Balance() - await Pcs_Drip_Balance() - await Tax_Vault_Drip_Balance();
};


export const Pcs_Drip_Balance = async () => {
    return ethers.utils.formatEther(await contract.balanceOf(DRIP_BUSD_ADDRESS));
};


export const Tax_Vault_Drip_Balance = async () => {
    return ethers.utils.formatEther(await contract.balanceOf(TAX_VAULT_ADDRESS));
};


export const Balance_Of_Drip = async (address) => {
    return ethers.utils.formatEther(await contract.balanceOf(address));
};