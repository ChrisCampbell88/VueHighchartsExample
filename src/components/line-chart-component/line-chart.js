
import ChartMixins from '../chart-mixins/chart-mixins.js';

export default {
    template: `
        <div class="my-container">
            <div>
                <div class="highchart"></div>
            </div>
            <div class="actions">
                <strong>Modifiers:</strong><br>
                <button class="btn  btn-primary" v-on:click="applyMultiplier(1)">1x</button>
                <button class="btn  btn-primary" v-on:click="applyMultiplier(2)">2x</button>
                <button class="btn  btn-primary" v-on:click="applyMultiplier(5)">5x</button>
                <button class="btn  btn-primary" v-on:click="applyMultiplier(1, true)">Random</button>
            </div>
        </div>`,

    mixins: [ChartMixins],

    data: function() {
        return {
            chartOptions: {
                chart: {
                    type: 'line',
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false,
                        },
                        pointStart: 2010,
                    },
                },
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500,
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'top',
                            },
                        },
                    }],
                },
                xAxis: {
                    allowDecimals: false,
                },
                legend: {
                    layout: 'horizontal',
                    align: 'left',
                    verticalAlign: 'top',
                },
            },
        };
    },
};
