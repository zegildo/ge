var ctx = document.getElementById('grafico_10');
				var myChart = new Chart(ctx, {
				    type: 'doughnut',
				    data: {
				        labels: ['Matrizes', 'Filiais'],
				        datasets: [{
				            label: 'Quantidade de Empresas',
				            data: [41389664, 2497917],
				            backgroundColor: [
				                'rgba(255, 99, 132, 0.2)',
				                'rgba(54, 162, 235, 0.2)'
				            ],
				            borderColor: [
				                'rgba(255, 99, 132, 1)',
				                'rgba(54, 162, 235, 1)'
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				        cutoutPercentage: 50
				    }
				});