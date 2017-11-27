const config = require('../config'),
  request = require('request-promise');


module.exports = async (action, payload)=>{

  console.log(payload)
  return await request({
    url: `${config.rest}/addr`,
    method: action,
    body: payload,
    json: true
  });

};