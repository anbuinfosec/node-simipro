const axios = require('axios');

async function simSimi(message, language) {
    if (message == undefined) {
        console.error('\n[!] Enter message first!\nTrouble? : https://github.com/anbuinfosec/node-simi/issues');
        return;
    } else {
        let lang_text = !language ? "en" : language;
        let lang_support = ["vn","en","ph","zh","ch","ru","id","ko","ar","ms","fr","ja","es","de","pt","ml","si","tr"];
        let lang_check = lang_support.includes(lang_text) ? "en" : language;
        try {
            let url = `https://toxinum.xyz/api/v1/simitalk?ask=${message}&lc=${lang_check}`;
            let api = await axios(url);
            let response = {
                status: api.data.status,
                message: message,
                response: api.data.message,
                language: lang_check,
            }

            return response;
        } catch (error) {
            return;
        }
    }
}

module.exports = simSimi;
