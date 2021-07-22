var ctx = document.getElementById('grafico_5');
				var myChart = new Chart(ctx, {
					type: 'line',
				    data: {
						labels:['1º','2º','3º','4º','5º'],
				        datasets: [{
				            label: 'Top 5 PJ 2020',
				            data: [2818, 2784, 2469, 2468, 1642],
				            borderColor:'rgba(54, 162, 235)',				               
							fill:false,
							stepped: true,
				        },

						{
				            label: 'Top 5 PJ 2021',
				            data: [359, 340, 240, 228, 163],
				            borderColor: 'rgba(255, 99, 132)',
							fill:false,
							tension: 0.1
				        }
					
					]},

				    options: {
						    scales: {
						        yAxes: [{
						            ticks: {
						                beginAtZero: true
						            }
						        }]
						    }
						}
				});