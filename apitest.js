var request = require("request");

var options = { method: 'GET',
  url: 'http://api.heclouds.com/devices/4092961/datastreams/shidu',
  headers: 
   { 'postman-token': '26741ff3-6115-c1a8-95d1-0cd02aad1b41',
     'cache-control': 'no-cache',
     'api-key': 'XgjTx5IC2Zxsru3i=IF3VwT3LiA=',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData: { email: 'faeaef@qq.com', password: 'flkdsa' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
