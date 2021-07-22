var ctx = document.getElementById('grafico_2');
				var myChart = new Chart(ctx, {
				    type: 'doughnut',
				    data: {
				        labels: ['Pessoa Física', 'Pessoa Jurídica', 'Estrangeiro'],
				        datasets: [{
				            label: '# relações',
				            data: [26162703, 787133, 19007],
				            backgroundColor: [
				                'rgba(255, 99, 132, 0.2)',
				                'rgba(54, 162, 235, 0.2)',
				                'rgba(11, 156, 49, 0.2)'
				            ],
				            borderColor: [
				                'rgba(255, 99, 132, 1)',
				                'rgba(54, 162, 235, 1)',
				                'rgba(11, 156, 49, 1)'
				            ],
				            borderWidth: 1
				        },
					
						{
				            label: '# relações',
				            data: [26162703, 787133, 19007],
				            backgroundColor: [
				                'rgba(255, 99, 132, 0.2)',
				                'rgba(54, 162, 235, 0.2)',
				                'rgba(11, 156, 49, 0.2)'
				            ],
				            borderColor: [
				                'rgba(255, 99, 132, 1)',
				                'rgba(54, 162, 235, 1)',
				                'rgba(11, 156, 49, 1)'
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				        cutoutPercentage: 50
				    }
				});