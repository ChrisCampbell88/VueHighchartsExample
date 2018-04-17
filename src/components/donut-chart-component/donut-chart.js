
import ChartMixins from '../chart-mixins/chart-mixins.js';

export default {
    template: `
        <div class="chart-container  chart-container--donut">
            <div class="highchart"></div>
        </div>
        `,

    mixins: [ChartMixins],

    data: function() {
        return {
            chartOptions: {
                chart: {
                    type: 'pie',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false,
                        },
                        showInLegend: true,
                        shadow: false,
                        center: ['50%', '50%'],
                    },
                },
                tooltip: {
                    pointFormat: '{point.percentage}%',
                },
                series: [{
                    colorByPoint: true,
                    innerSize: '60%', // This makes the pie chart become a donut
                }],
            },
        };
    },
};
