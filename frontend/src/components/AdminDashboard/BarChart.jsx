import React from 'react';
import { VictoryBar, VictoryTooltip } from 'victory';

const chartData = [
  { x: 'Jan', y: 120 },
  { x: 'Feb', y: 90 },
  { x: 'Mar', y: 200 },
  { x: 'Apr', y: 150 },
  { x: 'May', y: 120 },
  { x: 'June', y: 90 },
  { x: 'July', y: 200 },
  { x: 'Aug', y: 150 },
  { x: 'Sep', y: 120 },
  { x: 'Oct', y: 90 },
  { x: 'Nov', y: 200 },
  { x: 'Dec', y: 150 },
  // Add data for other months here
];

const BarChart = () => {
  return (
    <div className="">
      <div className="my-4" />
      <h4 className="text-xl font-semibold ">New Users Join Each Month</h4>
      <div className="mt-2">
        <VictoryBar
          data={chartData}
          x="x"
          y="y"
          events={[
            {
              target: 'data',
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: 'data',
                      mutation: (props) => ({ style: { fill: '#1E6CE4' } }),
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: 'data',
                      mutation: () => {},
                    },
                  ];
                },
              },
            },
          ]}
          labels={({ datum }) => datum.y} // Display the y value (new user count) as labels
          labelComponent={
            <VictoryTooltip
              style={{ fontSize: 12 }}
              renderInPortal={false}
              flyoutStyle={{ fill: 'white', fillOpacity: 0.8 }}
            />
          }
          style={{
            data: { fill: 'grey' }, // Change the bar color here
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
