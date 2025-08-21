const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString');

const getData = async() => {
    try {
        const response = axios.get('https://jsonplaceholder.typicode.com/posts');
        const id = (await response).data.map(item => item.id);
        return mapArrToString(id);
    } catch(e) {
        console.error(e);
    }
}

module.exports = getData;