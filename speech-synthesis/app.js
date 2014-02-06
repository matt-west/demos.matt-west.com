(function() {

	/*
	 * Check for browser support
	 */
	var supportMsg = document.getElementById('msg');

	if ('speechSynthesis' in window) {
		supportMsg.innerHTML = 'Your browser <strong>supports</strong> speech synthesis.';
	} else {
		supportMsg.innerHTML = 'Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="http://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.';
		supportMsg.classList.add('not-supported');
	}

	// Get the 'speak' button
	var button = document.getElementById('speak');

	// Get the text input element.
	var speechMsgInput = document.getElementById('speech-msg');

	// Get the voice select element.
	var voiceSelect = document.getElementById('voice');

	var volumeInput = document.getElementById('volume');
	var rateInput = document.getElementById('rate');
	var pitchInput = document.getElementById('pitch');


	// Set up an event listener for when the 'speak' button is clicked.
	button.addEventListener('click', function(e) {
		if (speechMsgInput.value.length > 0) {
			speak(speechMsgInput.value);
		}
	});


	function loadVoices() {
		var voices = speechSynthesis.getVoices();

		voices.forEach(function(voice, i) {
			var option = document.createElement('option');
			option.value = voice.name;
			option.innerHTML = voice.name;
			
			voiceSelect.appendChild(option);
		});
	}

	loadVoices();

	// Needed for chrome
	window.speechSynthesis.onvoiceschanged = function(e) {
		loadVoices();
	};

	function speak(text) {
		var msg = new SpeechSynthesisUtterance();

		msg.text = text;

		msg.volume = parseFloat(volumeInput.value);
		msg.rate = parseFloat(rateInput.value);
		msg.pitch = parseFloat(pitchInput.value);

		if (voiceSelect.value) {
			msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
		}

		msg.onboundary = function(e) {
			console.log(e);
		}

		window.speechSynthesis.speak(msg);
	}

}());
