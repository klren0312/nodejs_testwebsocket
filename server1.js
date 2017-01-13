var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(request,response){
	//发送http头部
	//http状态值
	//内容类型：text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});

	response.end(util.inspect(url.parse(request.url,true)));
}).listen(8888);

console.log('server running at http://127.0.0.1:8888/');