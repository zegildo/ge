var ctx = document.getElementById('grafico_11');
				var myChart = new Chart(ctx, {
				    type: 'bar',
					
					data :{
						labels: ['junho 2020','maio de 2021'],
						datasets: [
						  {
							label: 'Sociedade com PF',
							data: [11882327, 10803637],
							backgroundColor:'rgba(255, 99, 132, 0.2)' ,
							borderColor: 'rgba(255, 99, 132)', 
							borderWidth: 1,
						  },
						  {
							label: 'Sociedade com PJ',
							data: [500487,272371],
							backgroundColor:'rgba(54, 162, 235, 0.2)' ,
							borderColor: 'rgb(54, 162, 235)',
							borderWidth: 1,
						  },
						],
						
					  },
				
				
							options: {
								responsive: true,
								plugins: {
								  legend: {
									position: 'top',
								  },
								  title: {
									display: true,
									text: 'Chart.js Floating Bar Chart'
								  }
								}
							  }
				
				
				});