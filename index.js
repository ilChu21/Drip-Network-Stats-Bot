import 'dotenv/config.js';
import { scheduleJob } from 'node-schedule';
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
    Bnb_Busd_Price,
} from './functions/bnb_functions.js';

import {
    Drip_Pcs_Busd_Balance,
    Busd_Usdc_Price,
} from './functions/busd_functions.js';

import {
    Drip_Busd_Price,
    Drip_Busd_Liquidity,
    Drip_Busd_Lp_Price,
} from './functions/drip_busd_functions.js';

import {
    Total_Garden_Lp_Locked,
} from './functions/garden_functions.js';


const token = process.env.TELEGRAM_API_KEY;
const bot = new TelegramBot(token, {polling: true});
console.log('DRIP STATS bot active.');


const numFor = Intl.NumberFormat('en-US');
const numFor5 = Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 });
const numForCur = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });


scheduleJob('*/15 * * * *', async () => {
    console.time('Duration');

    const opts = {
        parse_mode: 'Markdown',
    };

    bot.sendMessage(process.env.CHAT_ID, `
DRIP Wallets: ${numFor.format(await Total_Drip_Wallets())}
DRIP in Wallets: ${numFor.format(await Total_Drip_In_Wallets())}
DRIP Supply: ${numFor.format(await Total_Drip_Supply())}\n
*PANCAKESWAP*
Liquidity: ${numForCur.format(await Drip_Busd_Liquidity())}
BUSD Supply: ${numFor.format(await Drip_Pcs_Busd_Balance())}
DRIP Supply: ${numFor.format(await Pcs_Drip_Balance())}
BUSD Price: ${numForCur.format(await Busd_Usdc_Price())}
DRIP Price: (${numForCur.format(await Drip_Busd_Price()).replace(`$`,``)} BUSD) ${numForCur.format(await Drip_Busd_Price())}\n
*FOUNTAIN*
Liquidity: ${numForCur.format(await Fountain_Liquidity())}
BNB Supply: ${numFor.format(await Fountain_Bnb_Balance())}
DRIP Supply: ${numFor.format(await Fountain_Drip_Balance())}
BNB Price: ${numForCur.format(await Bnb_Busd_Price())}
DRIP Price: (${numFor5.format(await Bnb_Drip_Ratio())} BNB) ${numForCur.format(await Drip_Fountain_Price())}\n
*FAUCET*
Wallets: ${numFor.format(await Total_Faucet_Wallets())}
Tax Vault Supply: ${numFor.format(await Tax_Vault_Drip_Balance())}\n
*RESERVOIR*
Wallets: ${numFor.format(await Total_Reservoir_Wallets())}
DROP Supply: ${numFor.format(await Reservoir_Drop_Balance())}
Locked DROP: ${numFor.format(await Locked_Drop())}
DROP Price: (${numForCur.format(await Drop_Bnb_Price()).replace(`$`,``)} BNB) ${numForCur.format(await Drop_Price())}\n
*DRIP GARDEN*
Total LP Locked: ${numFor.format(await Total_Garden_Lp_Locked())}
DRIP/BUSD LP Price: ${numForCur.format(await Drip_Busd_Lp_Price())}
        `, opts);

        console.timeEnd('Duration');
});