window.onload = function() {
  
  // Content for the pages.
  // Note: You would probably want to load the page content using AJAX in a 
  // real application.
  var pages = {
    index: {
      title: "Home Page",
      content: "This is the home page."
    },
    about: {
      title: "About",
      content: "Some content about the business."
    },
    products: {
      title: "Products",
      content: "Buy some of our great products!"
    },
    contact: {
      title: "Contact",
      content: "Say hello! We love to chat."
    }
  }


  // Get references to the page elements.
  var navLinks = document.querySelectorAll('.load-content');
  var titleElement = document.getElementById('title');
  var contentElement = document.getElementById('content');


  // Update the page content.
  var updateContent = function(stateObj) {
    // Check to make sure that this state object is not null.
    if (stateObj) {
      document.title = stateObj.title;
      titleElement.innerHTML = stateObj.title;
      contentElement.innerHTML = stateObj.content;
    }
  };


  // Attach click listeners for each of the nav links.
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
      e.preventDefault();

      // Fetch the page data using the URL in the link.
      var pageURL = this.attributes['href'].value;
      var pageData = pages[pageURL.split('.')[0]];

      // Update the title and content.
      updateContent(pageData);
      
      // Create a new history item.
      history.pushState(pageData, pageData.title, pageURL);
    });
  }
  

  // Update the page content when the popstate event is called.
  window.addEventListener('popstate', function(event) {
    updateContent(event.state)
  });


  // Load initial content.
  updateContent(pages.index);

  // Update this history event so that the state object contains the data
  // for the homepage.
  history.replaceState(pages.index, pages.index.title, '');
  
};
