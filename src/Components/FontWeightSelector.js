import React from 'react';

const FontWeightSelector = ({ selectedWeight, handleWeightChange }) => {
  const fontWeights = [
    'normal',
    'bold',
    'bolder',
    'lighter',
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
  ];

  return (
    <div>
      <label htmlFor="font-weight-selector" style={{ color: 'white' }}>Select Font Weight: </label>
      <select id="font-weight-selector" value={selectedWeight} onChange={handleWeightChange}>
        {fontWeights.map((weight) => (
          <option key={weight} value={weight}>
            {weight}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontWeightSelector;
