var ctx = document.getElementById('grafico_1');

var myChart = new Chart(ctx, {
	type: 'bar',
	data : {
		labels: ['junho - 2020', 'maio - 2021'],
		datasets: [{
			label: '# Relações Societárias',
			data: [500487,272371],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)'
			],
			borderColor: [
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)'
			],
			borderWidth: 1
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