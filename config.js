const dotenv = require('dotenv').config();

const config = {
    CONTENTFUL_SPACE_ID: process.env.REACT_APP_CONTENTFUL_SPACE_ID || null, //Contentful's Space ID
    CONTENTFUL_ACCESS_TOKEN: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || null, //Contenful's deploy access token
}

module.exports = config;
