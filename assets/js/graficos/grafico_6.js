var ctx = document.getElementById('grafico_6');
				var myChart = new Chart(ctx, {
				    type: 'doughnut',
				    data: {
				        labels: ['Consórcios Ativos', 'Consórcios Não-Ativos'],
				        datasets: [{
				            label: '# of Votes',
				            data: [10675, 15044],
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