var ctx = document.getElementById('grafico_6');
				
var myChart = new Chart(ctx, {
	type: 'bar',
	data : {
		labels: ['junho - 2020', 'maio - 2021'],
		datasets: [{
			label: '# Consórcio',
			data: [14691,15564],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)'
			],
			borderColor: [
				'rgb(255, 99, 132)',
				'rgb(255, 99, 132)'
			],
			borderWidth: 1
		},
	
		{
			label: 'Diferença',
			data: [14691,15564],
			borderColor: 'rgb(34,139,34)',
			type: 'line',
			fill: false,
			order: 0
		  }
	]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
		responsive: true,
		plugins: {
		  legend: {
			position: 'top',
		  },
		  title: {
			display: true,
			text: 'Quantidade de Empresas 2020 vs 2021'
		  }
		}
	  }
});