var net =require('net');

//链接服务器
var client = net.connect({port:8080},function(){
	console.log('connected to server');
	client.write('world!\r\n');
});

//接受服务端数据
client.on('data',function(data){
	console.log('client got data from server:',data.toString());
	//断开连接
	client.end();
});

//断开连接
client.on('end',function(){
	console.log('disconnected from server');
});