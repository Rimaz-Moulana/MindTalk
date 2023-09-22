import React from 'react';
import StripeButton from './StripeButton';

function StripeCApp() {
  // Add a console.log statement to check if the component is loaded
  console.log('StripeCApp component is loaded');

  return (
    <div className="StripeCApp">
      {/* Your other content */}
      <StripeButton price={2000} /> {/* Use the StripeButton component */}
    </div>
  );
}

export default StripeCApp;
