import React from 'react';

function RequestProgress({ currentStatus }) {
  const steps = ['Requested', 'Accepted', 'Pay Appointment Fee'];

  const stepColors = {
    requested: 'bg-ash-300',
    accepted: 'bg-ash-300',
    paid: 'bg-ash-300',
  };

  const getStepColor = (step) => (currentStatus === step ? 'bg-blue-600' : stepColors[step]);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Request Progress</h2>
      <div className="flex space-x-2 items-center">
        <div className="relative w-full h-16">
          {steps.map((step, index) => (
            <div key={step} className="absolute">
              <div
                className={`relative w-16 h-16 rounded-full text-white ${getStepColor(step)}`}
                style={{
                  left: `${(index / (steps.length - 1)) * 100}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <div className="text-xl flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <div className="text-sm text-center mt-1">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RequestProgress;
