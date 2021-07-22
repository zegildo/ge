var ctx = document.getElementById('grafico_4');
				var myChart = new Chart(ctx, {
				    type: 'line',
					
				    data: {
						labels:['1º','2º','3º','4º','5º','6º','7º','8º','9º', '10º'],
				        datasets: [{
				            label: 'Top 10 PF 2020',
				            data: [13521,13516,13342,13342,12058,12010,12007,12004,11999,11999],
				            borderColor:'rgba(54, 162, 235)',				               
							fill:false,
							stepped: true,
				        },

						{
				            label: 'Top 10 PF 2021',
				            data: [1089,1086,872,752,668,620,593,582,558,515],
				            borderColor: 'rgba(255, 99, 132)',
							fill:false,
							tension: 0.1
				        }
					
					]
				    },
				   
				});