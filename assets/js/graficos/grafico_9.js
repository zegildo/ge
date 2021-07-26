var ctx = document.getElementById('grafico_9');


var scatterChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        
        datasets: [{
            label: 'Média - 2020',
            backgroundColor: ['rgba(255, 99, 132, 1)'],
            data: [{x: 0.75,y: 0.48, r:10}]
            },
        
            {
                label: 'Média - 2021',
                backgroundColor: ['rgb(54, 162, 235,1)'],
                data: [{x: 0.71,y: 0.50, r:10}]
                }]
    },
    options: {
        responsive: true,
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.index].label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += '('+tooltipItem.label+','+tooltipItem.value+')';
                    return label;
                }
            }
        },
        scales: {
            xAxes: [{
                ticks: {
					beginAtZero: true
				},
                scaleLabel: {
                display: true,
                labelString: 'Precisão'
                },
                type: 'linear',
                position: 'bottom'
            }],
            yAxes: [{
                ticks: {
					beginAtZero: true
				},
                scaleLabel: {
                display: true,
                labelString: 'Revocação'
                },
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});