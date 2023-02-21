import axios from 'axios';


export const Fetch_Bnb_Price = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=wbnb&vs_currencies=usd', { retry: 2, retryDelay: 1000 });
        return response.data.wbnb.usd;
    } catch (error) {
        return error;
    }
};