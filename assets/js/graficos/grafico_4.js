var ctx = document.getElementById('grafico_4');
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: [
				        'MARCELO DE ARAUJO NORONHA', 
				        'ANDRE RODRIGUES CANO', 
				        'EURICO RAMOS FABRI', 
				        'CASSIANO RICARDO SCARPELLI', 
				        'ALEXSANDRO BROEDEL LOPES'],
				        datasets: [{
				            label: 'Relações Societárias',
				            data: [13521, 13516, 13342, 13342, 12058],
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