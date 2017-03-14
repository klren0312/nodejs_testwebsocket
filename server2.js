var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
	extended:false
}))
app.use(bodyParser.json())

app.get('/',function(req,res){
	res.send('Hello World from GET');
});

app.post('/',function(req,res){
	res.send('Hello World from POST');
	console.log('Client:',req.connection.remoteAddress);
	console.log('Method:',req.method);
	console.log('Headers:',req.headers);
	console.log('Post Body:',req.body);
})

app.listen(3000,function(){
	console.log('Server is listening on port 3000!');
})