var ctx = document.getElementById('grafico_2');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Comércio varejista',
				'Cabeleireiros, manicure e pedicure',
				'Obras de alvenaria',
				'Comércio de mercadorias em geral',
				'Promoção de vendas',
				'Lanchonetes',
				'Restaurantes e similares',
				'Alimentos para consumo domiciliar',
				'Condomínios prediais',
				'Preparação de documentos'],
		datasets: [
			{
				label: 'Sociedade com PJ',
				data: [	913869,
						730485,
						436266,
						422605,
						422549,
						389792,
						336534,
						301177,
						285000,
						246246],
				
				backgroundColor:'rgba(54, 162, 235, 0.2)' ,
				borderColor: 'rgb(54, 162, 235)',
				borderWidth: 1,
			},
			]
		},

		options: {
			responsive: true,
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true
					},
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
});