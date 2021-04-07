const superagent = require('superagent');

const getWebsite = async (query) => {
    const { body } = await superagent.get(`https://api.openbrewerydb.org/breweries/search?query=${query}`);
console.log(body[0].website_url, 'TESTTTTTT');

    return body[0].website_url;
}

module.exports = { getWebsite };
