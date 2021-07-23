var ctx = document.getElementById('grafico_2');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['junho 2020','maio de 2021'],
		datasets: [
			{
				label: 'Sociedade com PJ',
				data: [500487,272371],
				backgroundColor:'rgba(54, 162, 235, 0.2)' ,
				borderColor: 'rgb(54, 162, 235)',
				borderWidth: 1,
			},
			{
				label: 'Diferença',
				data: [500487,272371],
				borderColor: 'rgba(255, 99, 132)',
				type: 'line',
				fill: false,
				order: 0
			  }
			]
		},
});