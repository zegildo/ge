var ctx = document.getElementById('grafico_10');
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: ['junho - 2020', 'maio - 2021'],
				        datasets: [
							
							{
				            label: '# Empresas',
				            data: [41389664, 45881636],
				            backgroundColor:[
								'rgba(255, 99, 132, 0.2)',
								'rgba(255, 99, 132, 0.2)'],
				            borderColor: 
									['rgba(255, 99, 132)',
									 'rgba(255, 99, 132)'],
				            borderWidth: 1,
							fill: false,
      						stepped: true,
				        },
						{
							label: 'Diferença',
							data: [41389664, 45881636],
							borderColor: 'rgb(34,139,34)',
							type: 'line',
							fill: false,
							order: 0
						},
						
					
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