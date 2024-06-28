import React, { useEffect, useState } from 'react';

const FontSelector = ({ selectedFont, handleFontChange }) => {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAtJeLn8XV-9k62Jnx-n2_731JgtTgreMM');
        const data = await response.json();
        if (data.items) {
          setFonts(data.items);
        }
      } catch (error) {
        console.error('Error fetching fonts:', error);
      }
    };

    fetchFonts();
  }, []);

  return (
    <div>
      <label htmlFor="font-selector" style={{ color: 'white' }}>Choose a font:</label>
      <select id="font-selector" value={selectedFont} onChange={handleFontChange}>
        {fonts.length > 0 ? (
          fonts.map((font) => (
            <option key={font.family} value={font.family}>
              {font.family}
            </option>
          ))
        ) : (
          <option>Loading fonts...</option>
        )}
      </select>
    </div>
  );
};

export default FontSelector;
