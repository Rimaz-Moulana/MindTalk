import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const ReviewCarousel = () => {
  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds (3 seconds in this example)
  };

  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Great service! I had a wonderful experience.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'The team was very helpful and professional.',
    },
    {
      id: 3,
      author: 'Alice Johnson',
      content: 'I highly recommend their services.',
    },
    // Add more reviews as needed
  ];

  return (
    <div className="review-carousel">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <p className="author">{review.author}</p>
            <p className="content">{review.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
