const axios = require('axios');

async function simiteach(apikey, ask, ans, language) {
    try {
        const response = await axios.get('https://anbusec.xyz/api/v1/simiteach', {
            params: {
                'apikey': apikey,
                'ask': ask,
                'ans': ans,
                'lc': language
            }
        });
        return response.data;
    } catch (error) {
        return { status: false, message: 'An error occurred.', author: 'https://facebook.com/anbuinfosec' };
    }
}

module.exports = simiteach;
