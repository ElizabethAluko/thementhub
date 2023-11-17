import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Quotes = () => {
  const [quotes, setQuotes] = useState([
    {
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
      author: 'Thomas Edison, type.fit',
    },
  ]);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        setQuotes(data.length ? data : quotes); // Use API data or default if API is empty
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 20000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        selectedItem={currentQuote}
        autoPlay={true}
        interval={5000}
	className="bg-yellow-200 max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl"
      >
        {quotes.map((quote, index) => (
          <div key={index} className="rounded-lg p-4 shadow-lg md:max-w-lg mx-auto md:w-3/4 sm:w-full">
              <div className="bg-blue-500 text-white p-4 rounded-lg">
		<p className="text-2xl font-semibold">
                {quote.text}
              </p>
              <p className="text-lg mt-4">- {quote.author}</p>
          </div>
	</div>
        ))}
      </Carousel>
    </div>
  );
};

export default Quotes;
