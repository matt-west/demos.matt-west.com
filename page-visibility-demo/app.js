window.onload = function() {
  // Get the prefix for this browser.  
  var prefix = getPrefix();

  // Prefix the document properties/events we will be using.
  var hidden = getHiddenProperty(prefix);
  var visibilityState = getVisibilityStateProperty(prefix);
  var visibilityChangeEvent = getVisibilityEvent(prefix);

  // Variable to track if the video was playing when the page visibility changed.
  var wasPlaying = false;

  // Get a reference to the video.
  var video = document.getElementById('video');

  // Listen for the visibilitychange event.
  document.addEventListener(visibilityChangeEvent, function(e) {
    
    // If the document is hidden we want to pause the video.
    if (document[hidden]) {
      // Check to see if the video is playing
      if (video.paused == false) {
        // Set the wasPlaying flag to true.
        wasPlaying = true;

        // Pause the video.
        video.pause();
      } else {
        // Make sure the wasPlaying is set to false if the video was paused.
        wasPlaying = false;
      }
    } else {
      // If the video was playing before we lost visibility, restart it.
      if (wasPlaying) {
        // Play the video.
        video.play();
      }
    }
  });

}

// Get the prefix for this browser.
function getPrefix() {
  // Check to see if the browser supports the unprefixed property.
  if ('hidden' in document) {
    // No prefix needed, return null.
    return null;
  }

  // Loop through all the possible prefixes.
  var prefixes = ['moz', 'ms', 'o', 'webkit'];

  for (var i = 0; i < prefixes.length; i++) {
    var testPrefix = prefixes[i] + 'Hidden';
    if (testPrefix in document) {
      return prefixes[i];
    }
  }

  // The API must not be supported in this browser.
  return null;
}

// Prefix the hidden property.
function getHiddenProperty(prefix) {
  if (prefix) {
    return prefix + 'Hidden';
  } else {
    return 'hidden';
  }
}

// Prefix the visbilityState property.
function getVisibilityStateProperty(prefix) {
  if (prefix) {
    return prefix + 'VisibilityState';
  } else {
    return 'visibilityState';
  }
}

// Prefix the visibilitychange event.
function getVisibilityEvent(prefix) {
  if (prefix) {
    return prefix + 'visibilitychange';
  } else {
    return 'visibilitychange';
  }
}
