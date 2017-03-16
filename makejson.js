var echarts = require('echarts');


//初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

var wenduData = [];
var i =10;
while(i<0){
	var testjson={
	  "errno": 0,
	  "data": [
	    {
	      "update_at": "2017-01-27 13:36:15",
	      "current_value": "17"
	    },
	    {
	      "update_at": "2017-01-27 13:36:15",
	      "current_value": "44"
	    }
	  ],
	  "error": "succ"
	}

	wenduData = parseInt(testjson.data[0].current_value); 
	var shidu= parseInt(testjson.data[1].current_value);
	i--;
}

// 绘制图表
myChart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: wenduData
    }]
});