(function() {

	// Get the BatteryManager.
	var battery = navigator.battery || navigator.mozBattery;

	var msg = document.getElementById('msg');

	// Get the battery meter.
	var batteryMeter = document.getElementById('battery-meter');

	// Get the data cells in the table.
	var batteryLevel = document.getElementById('battery-level');
	var batteryStatus = document.getElementById('battery-status');
	var batteryCharging = document.getElementById('battery-charging');
	var batteryDischarging = document.getElementById('battery-discharging');


	// Update the battery level meter (and table value).
	function updateBatteryLevel() {
		batteryMeter.value = battery.level;
		batteryLevel.innerHTML = (battery.level * 100) + '%';
	}


	// Update the battery charging status.
	function updateBatteryStatus() {
		if (battery.charging) {
			batteryStatus.innerHTML = 'Charging';
		} else {
			batteryStatus.innerHTML = 'Not Charging';
		}
	}


	// Update the battery charging time value.
	function updateBatteryChargingTime() {
		if (battery.chargingTime === Infinity) {
			// Not charging.
			batteryCharging.innerHTML = '-';
		} else {
			// Charging.
			batteryCharging.innerHTML = (battery.chargingTime / 60) + ' minutes';
		}
	}


	// Update the battery discharging time value.
	function updateBatteryDischargingTime() {
		if (battery.dischargingTime === Infinity) {
			// Not discharging.
			batteryDischarging.innerHTML = '-';
		} else {
			// Discharging.
			batteryDischarging.innerHTML = (battery.dischargingTime / 60) + ' minutes';
		}
	}


	// Set initial values and set up event listeners.
	function init() {
		// Set initial values.
		updateBatteryLevel();
		updateBatteryStatus();
		updateBatteryChargingTime();
		updateBatteryDischargingTime();

		// Set up event listeners.
		battery.onlevelchange = updateBatteryLevel;
		battery.onchargingchange = updateBatteryStatus;
		battery.onchargingtimechange = updateBatteryChargingTime;
		battery.ondischargingtimechange = updateBatteryDischargingTime;
	}


	// Quick check for browser compatibility.
	if (battery) {
		// API Supported!
		msg.innerHTML = 'Your browser supports the Battery Status API.';

		// Initialize the app.
		init();
	} else {
		// API not supported.
		msg.innerHTML = 'Your browser does not support the Battery Status API :(';
	}

}());