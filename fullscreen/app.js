(function() {

	var requestFullscreen = function (ele) {
		if (ele.requestFullscreen) {
			ele.requestFullscreen();
		} else if (ele.webkitRequestFullscreen) {
			ele.webkitRequestFullscreen();
		} else if (ele.mozRequestFullScreen) {
			ele.mozRequestFullScreen();
		} else if (ele.msRequestFullscreen) {
			ele.msRequestFullscreen();
		} else {
			console.log('Fullscreen API is not supported.');
		}
	};

	var exitFullscreen = function () {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else {
			console.log('Fullscreen API is not supported.');
		}
	};




	var fsDocButton = document.getElementById('fs-doc-button');
	var fsExitDocButton = document.getElementById('fs-exit-doc-button');

	fsDocButton.addEventListener('click', function(e) {
		e.preventDefault();
		requestFullscreen(document.documentElement);
	});

	fsExitDocButton.addEventListener('click', function(e) {
		e.preventDefault();
		exitFullscreen();
	});




	var fsVidButton = document.getElementById('fs-vid-button');
	var video = document.getElementById('video');

	fsVidButton.addEventListener('click', function(e) {
		e.preventDefault();
		requestFullscreen(video);
	});



	var fsImgButton = document.getElementById('fs-img-button');
	var image = document.getElementById('image');

	fsImgButton.addEventListener('click', function(e) {
		e.preventDefault();
		requestFullscreen(image);
	});

}());
