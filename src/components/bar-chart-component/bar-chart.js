
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
                    type: 'bar',
                },
                yAxis: {
                    allowDecimals: false,
                    title: {
                        text: 'Units',
                    },
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true,
                        },
                    },
                },
                tooltip: {
                    formatter: function() {
                        return '<strong>' + this.point.name + '</strong><br>' +
                            this.point.y + ' ' + this.point.name.toLowerCase();
                    },
                },
            },
        };
    },
};
