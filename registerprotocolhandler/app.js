(function() {
	
	navigator.registerProtocolHandler('web+treehouse', 'http://demos.mattwest.dev/demos.mattwest.io/registerprotocolhandler/?q=%s', 'Treehouse');

	function parseData() {
		var raw = window.location.search;
		if (raw !== '') {
			console.log(raw.replace('?q=web%2Btreehouse%3A', ''));
		}
	};

	parseData();

}());
