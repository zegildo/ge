var ctx = document.getElementById('grafico_11');
				var myChart = new Chart(ctx, {
				    type: 'doughnut',
				    data: {
				        labels: ['Apenas Pessoa Física', 
				        		 'Apenas Pessoa Jurídica', 
				        		 'Apenas Estrangeiro',
				        		 'Relação Mista'],
				        datasets: [{
				            label: '# Relações Societárias',
				            data: [11381530, 7627, 2479, 501657],
				            backgroundColor: [
				                'rgba(54, 162, 235, 0.2)',
				                'rgba(255, 165, 0, 0.2)',
				                
				                'rgba(11, 156, 49, 0.2)',
				                'rgba(255, 99, 132, 0.2)'
				            ],
				            borderColor: [				                
				                'rgba(54, 162, 235, 1)',
				                'rgba(255, 165, 0, 1)',
				               
				                'rgba(11, 156, 49, 1)',
				                'rgba(255, 99, 132, 1)'
				            ],
				            borderWidth: 1
				        }]
				    }
				});