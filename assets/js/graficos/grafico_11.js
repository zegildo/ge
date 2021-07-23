var ctx = document.getElementById('grafico_11');
				var myChart = new Chart(ctx, {
				    type: 'bar',
					
					data :{
						labels: ['junho 2020','maio de 2021'],
						datasets: [
						  {
							label: 'Sociedade com PF',
							data: [11882327, 10803637],
							backgroundColor:'rgba(54, 162, 235, 0.2)' ,
							borderColor: 'rgba(54, 162, 235)', 
							borderWidth: 1,
						  },
						  {
							label: 'Diferença',
							data: [11882327,10803637],
							borderColor: 'rgba(255, 99, 132)',
							type: 'line',
							fill: false,
							order: 0
						  }
						],
						
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