function openNav() {
        document.getElementById("bookmark_container").style.width = "200px";
	document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
	document.getElementById("bookmark_container").style.width = "0px";
	document.getElementById("main").style.marginLeft = "0px";
}


document.addEventListener('DOMContentLoaded', function() {
  var modal = document.querySelector('.flash-modal');

  // Function to show flash message modal
  function showFlashModal() {
    modal.style.display = 'block';
    setTimeout(function() {
      modal.style.display = 'none';
    }, 3000); // Adjust the duration as needed
  }
})
  // Event listener for login button click
  $('#login').on('click', function() {
    showFlashModal();
  });


$(document).ready(function() {
  // Function to show flash message modal
  function showFlashModal(message) {
    var modal = $('.flash-modal');
    var flashMessage = $('.flash-message');
    flashMessage.text(message);
    modal.fadeIn();
    setTimeout(function() {
      modal.fadeOut();
    }, 3000); // Adjust the duration as needed
  }

  // Event listener for signup button click
  $('#login').on('click', function(event) {
    //event.preventDefault();
    showFlashModal('Login successful!');
    // You can also trigger the signup route here if needed
     $('.signupbtn').submit();
  });

  // Event listener for login button click
  $('.savebtn').on('click', function(event) {
    //event.preventDefault();
    showFlashModal('Save successful!');
    // You can also trigger the login route here if needed
    $('.savebtn').submit();
  });

  // Event listener for logout button click
  $('.delete').on('click', function(event) {
    //event.preventDefault();
    showFlashModal('Delete successful!');
    // You can also trigger the logout route here if needed
    $('.delete').submit();
  });
});


// New Addition
// https://type.fit/api/quotes
//
async function fetchQuotes() {
	try {
		const response = await fetch("https://type.fit/api/quotes");
                if (response.ok) {
			const data = await response.json();
			return data;
                } else {
                    throw new Error("Failed to retrieve quotes from the API");
                }
        } catch (error) {
                console.error(error);
                return [{
                    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
                    author: "Thomas Edison, type.fit"
                }];
            }
        }

        function displayQuote(quote) {
            const quoteDisplay = document.getElementById("quote-display");
            quoteDisplay.innerHTML = `
                <p>${quote.text}</p>
                <p>- ${quote.author}</p>
            `;
        }

async function startCarousel() {
	const quotes = await fetchQuotes();
	let currentIndex = 0;

        function displayNextQuote() {
		displayQuote(quotes[currentIndex]);
                currentIndex = (currentIndex + 1) % quotes.length;
        }

        // Display the first quote immediately
        displayNextQuote();

        // Fetch new quotes and display them every 4 seconds
        setInterval(displayNextQuote, 4000);
}

// Start the carousel immediately
startCarousel();
