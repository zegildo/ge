var ctx = document.getElementById('grafico_1');
				var myChart = new Chart(ctx, {
				    type: 'doughnut',
				    data: {
				        labels: ['Sem Sócios', 'Com Sócios'],
				        datasets: [{
				            label: '# of Votes',
				            data: [31994288, 11893293],
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