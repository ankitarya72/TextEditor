import React from 'react';

const ItalicToggle = ({ isItalic, toggleItalic }) => {
  return (
    <div>
      <button onClick={toggleItalic}>
        {isItalic ? 'Unitalicize' : 'Italicize'}
      </button>
    </div>
  );
};

export default ItalicToggle;
