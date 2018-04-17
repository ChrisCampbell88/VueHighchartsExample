
/* App
 * ---
 *
 */

import './_base.scss';
import './_fonts.scss';
import './_layout.scss';

import LineChart from '../line-chart-component/line-chart.js';
import BarChart from '../bar-chart-component/bar-chart.js';
import DonutChart from '../donut-chart-component/donut-chart.js';

// SCSS
import 'highcharts/css/highcharts.scss'; // Require the default highcharts scss
import './_highcharts.scss'; // Require our custom highcharts scss

// Init the vue app
let vm = new Vue({
    el: '#app',
    components: {
        lineChart: LineChart,
        barChart: BarChart,
        donutChart: DonutChart,
    },
});

window.vm = vm;
