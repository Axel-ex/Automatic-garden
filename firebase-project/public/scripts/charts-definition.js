

// Create the charts when the web page loads
window.addEventListener('load', onload);

function onload(event) {
	chartT = createTemperatureChart();
	chartH = createHumidityChart();
	chartP = createPressureChart();
}

// Create Temperature Chart
function createTemperatureChart() {
	var chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart-temperature',
			backgroundColor: 'black',
			type: 'spline'
		},
		series: [
			{
				name: 'DHT_sensor'
			}
		],
		title: {
			text: undefined
		},
		plotOptions: {
			line: {
				animation: false,
				dataLabels: {
					enabled: true
				}
			},
			series: {
				color: '#A62639'
			}
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: { second: '%H:%M:%S' }
		},
		yAxis: {
			title: {
				text: 'Temperature Celsius Degrees'
			}
		},
		credits: {
			enabled: false
		}
	});
	return chart;
}

// Create Humidity Chart
function createHumidityChart() {
	var chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart-humidity',
			backgroundColor: 'black',
			type: 'spline',
		},
		series: [{
			name: 'DHT_sensor'
		}],
		title: {
			text: undefined
		},
		plotOptions: {
			line: {
				animation: false,
				dataLabels: {
					enabled: true
				}
			},
			series: {
				color: '#73daca'
			}
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: { second: '%H:%M:%S' }
		},
		yAxis: {
			title: {
				text: 'Humidity (%)'
			}
		},
		credits: {
			enabled: false
		}
	});
	return chart;
}

// Create Pressure Chart
function createPressureChart() {
	var chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart-pressure',
			backgroundColor: 'black',
			type: 'spline'
		},
		series: [{
			name: 'Moisture_sensor'
		}],
		title: {
			text: undefined
		},
		plotOptions: {
			line: {
				animation: false,
				dataLabels: {
					enabled: true
				}
			},
			series: {
				color: '#50b8b4'
			}
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: { second: '%H:%M:%S' }
		},
		yAxis: {
			title: {
				text: 'Pressure (hPa)'
			}
		},
		credits: {
			enabled: false
		}
	});
	return chart;
}

