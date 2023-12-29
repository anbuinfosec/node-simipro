const axios = require('axios');

async function simitalk(apikey, ask, language) {
    try {
        const response = await axios.get('https://anbusec.xyz/api/v1/simitalk', {
            params: {
                'apikey': apikey,
                'ask': ask,
                'lc': language
            }
        });
        return response.data;
    } catch (error) {
        return { status: false, message: 'An error occurred.', author: 'https://facebook.com/anbuinfosec' };
    }
}

module.exports = simitalk;
