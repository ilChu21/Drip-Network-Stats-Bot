import 'dotenv/config.js';
import TelegramBot from 'node-telegram-bot-api';

import {
    Total_Drip_Supply,
    Total_Drip_Wallets,
    Tax_Vault_Drip_Balance,
    Pcs_Drip_Balance,
    Total_Drip_In_Wallets,
} from './functions/drip_functions.js';

import {
    Fountain_Drip_Balance,
    Fountain_Bnb_Balance,
    Bnb_Drip_Ratio,
    Fountain_Liquidity,
    Drip_Fountain_Price,
} from './functions/fountain_functions.js';

import {
    Total_Faucet_Wallets,
} from './functions/faucet_functions.js';

import {
    Total_Reservoir_Wallets,
    Locked_Drop,
    Reservoir_Drop_Balance,
    Drop_Price,
    Drop_Bnb_Price,
} from './functions/reservoir_functions.js';

import {
    Bnb_Pcs_Price,
} from './functions/bnb_functions.js';

import {
    Drip_Pcs_Busd_Balance,
    Busd_Pcs_Price,
} from './functions/busd_functions.js';

import {
    Drip_Pcs_Price,
    Drip_Pcs_Liquidity,
} from './functions/pcs_drip_functions.js';


const TOKEN = process.env.TELEGRAM_API_KEY;

const bot = new TelegramBot(TOKEN, {polling: true});
console.log('DRIP STATS bot active.')


const numFor = Intl.NumberFormat('en-US');
const numFor5 = Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 });
const numForCur = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });


bot.onText(/\/startDripStatsBotNow/, async function dripStatsBot(msg) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const opts = {
        parse_mode: 'Markdown'
    }

    while (true) {
        bot.sendMessage(msg.chat.id, `
*💧 DRIP NETWORK STATS 💧*
Total DRIP Wallets: ${numFor.format(await Total_Drip_Wallets())}
Total DRIP in Wallets: ${numFor.format(await Total_Drip_In_Wallets())}
Total DRIP Supply: ${numFor.format(await Total_Drip_Supply())}\n
*PCS* (Liquidity ${numForCur.format(await Drip_Pcs_Liquidity())})
BUSD Supply: ${numFor.format(await Drip_Pcs_Busd_Balance())}
DRIP Supply: ${numFor.format(await Pcs_Drip_Balance())}
BUSD Price: ${numForCur.format(await Busd_Pcs_Price())}
DRIP Price: (${numForCur.format(await Drip_Pcs_Price()).replace(`$`,``)} BUSD) ${numForCur.format(await Drip_Pcs_Price())}\n
*FOUNTAIN* (Liquidity ${numForCur.format(await Fountain_Liquidity())})
BNB Supply: ${numFor.format(await Fountain_Bnb_Balance())}
DRIP Supply: ${numFor.format(await Fountain_Drip_Balance())}
BNB Price: ${numForCur.format(await Bnb_Pcs_Price())}
DRIP Price: (${numFor5.format(await Bnb_Drip_Ratio())} BNB) ${numForCur.format(await Drip_Fountain_Price())}\n
*FAUCET*
Wallets: ${numFor.format(await Total_Faucet_Wallets())}
Tax Vault Supply: ${numFor.format(await Tax_Vault_Drip_Balance())}\n
*RESERVOIR*
Wallets: ${numFor.format(await Total_Reservoir_Wallets())}
DROP Supply: ${numFor.format(await Reservoir_Drop_Balance())}
Locked DROP: ${numFor.format(await Locked_Drop())}
DROP Price: (${numForCur.format(await Drop_Bnb_Price()).replace(`$`,``)} BNB) ${numForCur.format(await Drop_Price())}
        `, opts);

        await delay(600000);
    }
});