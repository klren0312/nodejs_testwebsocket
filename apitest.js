var request = require("request");

var options = { method: 'GET',
  url: 'http://api.heclouds.com/devices/4092961/datastreams',
  qs: { datastream_ids: 'wendu,shidu' },
  headers: 
   { 
     'cache-control': 'no-cache',
     'api-key': 'XgjTx5IC2Zxsru3i=IF3VwT3LiA=',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
   };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
