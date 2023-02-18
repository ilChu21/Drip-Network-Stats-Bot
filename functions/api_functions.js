import axios from 'axios';


export async function Fetch_Bnb_Price() {
    try {
        let response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=wbnb&vs_currencies=usd', { retry: 2, retryDelay: 1000 });
        return response.data.wbnb.usd;
    } catch (error) {
        return error;
    }
};