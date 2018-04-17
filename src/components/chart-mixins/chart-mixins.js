
import Highcharts from 'highcharts/js/highcharts';

export default {
    $chartInstance: null,

    data: function() {
        return {
            chartOptions: {
                title: {
                    text: '',
                },
                subtitle: {
                    text: '',
                },
                series: [{
                    data: [], // This set of data will be populated after mount
                }],
                credits: {
                    enabled: false, // Disable the 'highcharts' link at the bottom of the chart
                },
            },
            chartRawData: [],
        };
    },

    props: {
        dataTable: String,
        chartTitle: String,
        chartSubTitle: String,
    },

    created: function() {
        // Check to make sure we have a source of data, otherwise do nothing
        if (!this.dataTable) {
            console.error('Error: Chart has no "data-table" attribute set. Chart element: ', this.$el);
            return;
        }

        // Fetch the raw chart data
        if (this.chartOptions.chart.type == 'pie') {
            this.chartRawData = this.generateDonutRawData();
            this.chartOptions.series[0].data = this.deepClone(this.chartRawData);
        } else {
            this.chartRawData = this.generateStandardRawData();
            this.chartOptions.series = this.deepClone(this.chartRawData);
        }

        // Populate the chartOptions title and sub-title from the props
        this.chartOptions.title.text = this.chartTitle;
        this.chartOptions.subtitle.text = this.chartSubTitle;
    },

    mounted: function() {
        // Render the chart
        this.renderChart();
    },

    methods: {
        applyMultiplier: function(multiplier, useRandomValue) {
            if (this.chartOptions.chart.type == 'pie') {
                return; // Multipliers are irrelevant to a pie chart
            }

            // Create a copy of the charts raw data
            let newData = this.deepClone(this.chartRawData);

            // Loop over the new data and apply the multiplier
            newData = newData.map((currentSeries) => {
                currentSeries.data.map((currentSeriesData) => {
                    if (useRandomValue) {
                        currentSeriesData[1] = currentSeriesData[1] * Math.floor(Math.random() * 5) + 1;
                    } else {
                        currentSeriesData[1] = currentSeriesData[1] * multiplier;
                    }

                    return currentSeriesData;
                });

                return currentSeries;
            });

            // Load each set of new series data into the chart
            newData.forEach((seriesData, seriesId) => {
                this.$chartInstance.series[seriesId].setData(seriesData.data);
            });
        },

        generateStandardRawData: function() {
            let tableElement = document.getElementById(this.dataTable);
            let series = [];

            // Setup a series for each column in the table header, excluding
            // the first cell
            let headingCells = Array.from(tableElement.querySelectorAll('thead tr th')).slice(1);
            headingCells.forEach((cellElement, cellIndex) => {
                series.push({name: cellElement.innerHTML, data: []});
            });

            // Loop over each row in the table body
            tableElement.querySelectorAll('tbody tr').forEach((rowElement, rowIndex) => {
                let rowKey = rowElement.querySelector('td:first-of-type').innerHTML;

                // Loop over each cell in the row, skipping the first one as
                // it is the row key
                let rowCells = Array.from(rowElement.querySelectorAll('td')).slice(1);
                rowCells.forEach((cellElement, cellIndex) => {
                    // Fetch the cell value
                    let cellValue = parseInt(cellElement.innerHTML);

                    // Add the value to the series array
                    series[cellIndex].data.push([rowKey, cellValue]);
                });
            });

            return series;
        },

        generateDonutRawData: function() {
            let tableElement = document.getElementById(this.dataTable);
            let seriesData = [];

            // Setup a series for each column in the table header
            let headingCells = Array.from(tableElement.querySelectorAll('thead tr th'));
            headingCells.forEach((cellElement, cellIndex) => {
                seriesData.push({name: cellElement.innerHTML});
            });

            // Loop over each row in the table body
            tableElement.querySelectorAll('tbody tr').forEach((rowElement, rowIndex) => {
                // Loop over each cell in the row
                rowElement.querySelectorAll('td').forEach((cellElement, cellIndex) => {
                    // Get the cells value
                    let cellValue = cellElement.innerHTML;

                    // Strip all non numerical characters
                    cellValue = cellValue.replace(/[^\d.-]/g, '');

                    // Round the value
                    seriesData[cellIndex].y = Math.round(parseFloat(cellValue));
                });
            });

            return seriesData;
        },

        renderChart: function() {
            let chartEl = this.$el.getElementsByClassName('highchart')[0];

            // When the DOM is ready, render the chart
            this.$chartInstance = Highcharts.chart(chartEl, this.chartOptions);
        },

        deepClone(object) {
            return JSON.parse(JSON.stringify(object));
        },
    },
};
