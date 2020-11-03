var ctx = document.getElementById('grafico_7');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        labels: ['SEARA ALIMENTOS',
                'BUNGE ALIMENTOS',
                'HYPERA',
                'BOEHRINGER INGELHEIM DO BRASIL QUIMICA E FARMACEUTICA',
                'ELANCO ANIMAL HEALTH INC',
                'BAYER',
                'FRAS LE',
                'NAKATA AUTOMOTIVA',
                'HITACHI LTD',
                'HONDA MOTOR CO LTD',
                'CAFE TRES CORACOES',
                'AGENCIA GOIANA DE GAS CANALIZADO',
                'MAFRA HOSPITALAR',
                'EXPRESSA DISTRIBUIDORA DE MEDICAMENTOS',
                'PETROLEO BRASILEIRO',
                'PROQUIGEL QUIMICA',
                'CIA BEAL DE ALIMENTOS',
                'COMPANHIA BRASILEIRA DE DISTRIBUICAO',
                'SAGE AUTOMOTIVE INTERIORS INC',
                'ADIENT PLC',
                'HOSPITAL ESPERANCA SA',
                'SOCIEDADE ANONIMA HOSPITAL ALIANCA',
                'CALEDONIA SAUDE',
                'AUSTA PARTICIPACOES LTDA',
                'DMA DISTRIBUIDORA',
                'MAKRO ATACADISTA',
                'VIBRA AGROINDUSTRIAL',
                'SOMAVE AGROINDUSTRIAL',
                'CAIXA SEGURIDADE PARTICIPACOES',
                'TOKIO MARINE SEGURADORA',
                'HAPVIDA PARTICIPACOES E INVESTIMENTOS',
                'MEDICAL MEDICINA COOPERATIVA ASSISTENCIAL DE LIMEIRA'],
        datasets: [{
            label: 'Precisão vs Revocação',
            backgroundColor: 'rgba(255, 99, 132, 1)',
            data: [{x: 0.5,y: 0.2},
                {x: 0.34,y: 1.0},
                {x: 1.0,y: 0.43},
                {x: 0.17,y: 1.0},
                {x: 0.5,y: 0.67},
                {x: 0.5,y: 0.25},
                {x: 0.32,y: 0.94},
                {x: 1.0,y: 1.0},
                {x: 1.0,y: 0.067},
                {x: 1.0,y: 0.048},
                {x: 0.67,y: 0.67},
                {x: 1.0,y: 0.015},
                {x: 0.75,y: 0.23},
                {x: 0.5,y: 0.022},
                {x: 0.16,y: 0.026},
                {x: 0.34,y: 0.58},
                {x: 1.0,y: 0.13},
                {x: 0.088,y: 0.79},
                {x: 1.0,y: 0.67},
                {x: 0.67,y: 0.67},
                {x: 0.80,y: 0.59},
                {x: 0.67,y: 0.34},
                {x: 0.73,y: 0.48},
                {x: 0.34,y: 1.0},
                {x: 1.0,y: 0.25},
                {x: 1.0,y: 0.56},
                {x: 1.0,y: 0.125},
                {x: 1.0,y: 1.0},
                {x: 1.0,y: 0.033},
                {x: 1.0,y: 0.34},
                {x: 0.82,y: 0.28},
                {x: 1.0,y: 1.0}]
            }]
    },
    options: {
        responsive: true,
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.labels[tooltipItem.index] || '';
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
                scaleLabel: {
                display: true,
                labelString: 'Precisão'
                },
                type: 'linear',
                position: 'bottom'
            }],
            yAxes: [{
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