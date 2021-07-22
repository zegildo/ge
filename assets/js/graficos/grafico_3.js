var ctx = document.getElementById('grafico_3');
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: ['Nula', 'Ativa', 'Suspensa', 'Inapta', 'Baixada'],
				        datasets: [{
				            label: 'junho - 2020',
				            data: [78825, 20661065, 167415, 3491251, 19489025],
				            backgroundColor: [
				            'rgba(0, 0, 0, 0.2)',
				                
				                'rgba(54, 162, 235, 0.2)',
				                'rgba(255, 165, 0, 0.2)',
				                
				                'rgba(11, 156, 49, 0.2)',
				                'rgba(255, 99, 132, 0.2)'
				            ],
				            borderColor: [
				             'rgba(0, 0, 0, 1)',
				                
				                'rgba(54, 162, 235, 1)',
				                'rgba(255, 165, 0, 1)',
				               
				                'rgba(11, 156, 49, 1)',
				                'rgba(255, 99, 132, 1)'
				            ],
				            borderWidth: 1
				        },
						{
				            label: 'maio - 2021',
				            data: [82597, 19529537, 171639, 7360602, 21277244],
				            backgroundColor: [
				            'rgba(0, 0, 0, 0.2)',
				                
				                'rgba(54, 162, 235, 0.2)',
				                'rgba(255, 165, 0, 0.2)',
				                
				                'rgba(11, 156, 49, 0.2)',
				                'rgba(255, 99, 132, 0.2)'
				            ],
				            borderColor: [
				             'rgba(0, 0, 0, 1)',
				                
				                'rgba(54, 162, 235, 1)',
				                'rgba(255, 165, 0, 1)',
				               
				                'rgba(11, 156, 49, 1)',
				                'rgba(255, 99, 132, 1)'
				            ],
				            borderWidth: 1
				        },
					]
				}
				});