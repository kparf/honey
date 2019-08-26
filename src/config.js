const rc = require('rc');
const path = require('path');


const config = rc('honey', {
  port: 3001,
  staticPath: path.join(__dirname, '../dist'),
})

module.exports = config;