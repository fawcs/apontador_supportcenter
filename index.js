const request = require("request");
const csv = require('csv-parse');
const fs = require('fs');
const cfg = require('./config');
const results = [];

const create_request = data => {
  console.log('Realizando ' + create_description(data))
  return {
    method: 'POST',
    url: 'http://support-center.e-it.net/api/json/addTimeEntry',
    headers: {
      'cache-control': 'no-cache',
      Connection: 'keep-alive',
      Host: 'support-center.e-it.net',
      'Cache-Control': 'no-cache',
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      apikey: cfg.api_key,
      id: data[0],
      supportRep: cfg.consultant,
      billingStatus: 'billable',
      description: data[2],
      workHours: data[3],
      executedTime: data[1] + ', 08:00:01',
    }
  };
}
const create_description = data => {
  return 'Apontamento: ' + data[0] + ' - ' + data[1] + ' Descrição: ' + data[2];
};

fs.createReadStream('apontamentos.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () =>
    results.forEach(data => {

      if (data[0] == 'id') return;

      request(create_request(data), (error, response, body) => {
        if (error) console.log(new Error(error));
        console.log( create_description(data) + '. Feito com sucesso!' );
      })
    }));