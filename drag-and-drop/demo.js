window.onload = function() {

	/**
	*
	*	Demo 1: Elements
	*
	*/
	var dropZoneOne = document.querySelector('#drop-target-one');
	var dragElements = document.querySelectorAll('#drag-elements li');
	var elementDragged = null;

	for (var i = 0; i < dragElements.length; i++) {

		// Event Listener for when the drag interaction starts.
		dragElements[i].addEventListener('dragstart', function(e) {
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData('text', this.innerHTML);
			elementDragged = this;
		});

		// Event Listener for when the drag interaction finishes.
		dragElements[i].addEventListener('dragend', function(e) {
			elementDragged = null;
		});
	};

	// Event Listener for when the dragged element is over the drop zone.
	dropZoneOne.addEventListener('dragover', function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}

		e.dataTransfer.dropEffect = 'move';

		return false;
	});

	// Event Listener for when the dragged element enters the drop zone.
	dropZoneOne.addEventListener('dragenter', function(e) {
		this.className = "over";
	});

	// Event Listener for when the dragged element leaves the drop zone.
	dropZoneOne.addEventListener('dragleave', function(e) {
		this.className = "";
	});

	// Event Listener for when the dragged element dropped in the drop zone.
	dropZoneOne.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault(); 
  	if (e.stopPropagation) e.stopPropagation(); 

		this.className = "";
		this.innerHTML = "Dropped " + e.dataTransfer.getData('text');

		// Remove the element from the list.
		document.querySelector('#drag-elements').removeChild(elementDragged);
		elementDragged = null;

		return false;
	});




	/**
	*
	*	Demo 2: Text Files
	*
	*/
	var dropZoneTwo = document.querySelector('#dd-files');
	var fileContentPane = document.querySelector('#file-content');

	// Event Listener for when the dragged file is over the drop zone.
	dropZoneTwo.addEventListener('dragover', function(e) {
		if (e.preventDefault) e.preventDefault(); 
		if (e.stopPropagation) e.stopPropagation(); 

		e.dataTransfer.dropEffect = 'copy';
	});

	// Event Listener for when the dragged file enters the drop zone.
	dropZoneTwo.addEventListener('dragenter', function(e) {
		this.className = "over";
	});

	// Event Listener for when the dragged file leaves the drop zone.
	dropZoneTwo.addEventListener('dragleave', function(e) {
		this.className = "";
	});

	// Event Listener for when the dragged file dropped in the drop zone.
	dropZoneTwo.addEventListener('drop', function(e) {
		if (e.preventDefault) e.preventDefault(); 
		if (e.stopPropagation) e.stopPropagation(); 

		this.className = "";

		var fileList = e.dataTransfer.files;

		if (fileList.length > 0) {
			readTextFile(fileList[0]);
		}
	});


	// Read the contents of a file.
	function readTextFile(file) {
		var reader = new FileReader();

		reader.onloadend = function(e) {
			if (e.target.readyState == FileReader.DONE) {
				var content = reader.result;
				fileContentPane.innerHTML = "File: " + file.name + "\n\n" + content;
			}
		}
		
    reader.readAsBinaryString(file);
	}
	
};
