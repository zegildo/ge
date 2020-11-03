var ctx = document.getElementById('grafico_5');
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: [
				        'ITAU CONSULTORIA', 
				        'ITAU UNIBANCO', 
				        'LATAM', 
				        'ARCOS DORADOS', 
				        'GRUPO BIG'],
				        datasets: [{
				            label: 'Relações Societárias',
				            data: [2818, 2784, 2469, 2468, 1642],
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
				        }]
				    }
				});