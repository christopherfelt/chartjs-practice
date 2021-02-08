var canvas = document.getElementById("myChart");
var s1 = [{x:"2017-01-06 18:39:30",y:"100"},{x:"2017-01-07 18:39:28",y:"101"}];
var s2 = [
	{x:"2017-01-07 08:30:00",y:"90"},
	{x:"2017-01-07 17:00:00",y:"105"},
	{x:"2017-01-08 09:00:00",y:"115"},
	{x:"2017-01-08 12:00:00",y:"75"},
	{x:"2017-01-08 17:00:00",y:"135"}
];



var graphParams = {
	type:"line",
	data:{
		datasets: [
		// 	{
		// 	label:"Series 1",
		// 	data:s1,
		// 	borderColor:"red",
		// 	backgroundColor:"transparent",
		// },
		{
			label:"Series 2",
			data:s2,
			borderColor:"blue",
			backgroundColor:"transparent",
		}],
	},
	options:{
		maintainAspectRatio:false,
		responsive:false,	
		scales:{
			xAxes:[{
				type:"time",
				distribution: "series",
			}],
		}
	}

}
ctx = new Chart(canvas, graphParams);