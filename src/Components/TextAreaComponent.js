import React, { useState, useEffect } from 'react';
import FontSelector from './FontSelector';
import FontWeightSelector from './FontWeightSelector';
import ItalicToggle from './ItalicToggle';

function TextAreaComponent() {
  const [text, setText] = useState('');
  const [selectedFont, setSelectedFont] = useState('');
  const [selectedWeight, setSelectedWeight] = useState(''); 
  const [isItalic, setIsItalic] = useState(false);

  useEffect(() => {
    const savedText = localStorage.getItem('text');
    const savedFont = localStorage.getItem('selectedFont');
    const savedWeight = localStorage.getItem('selectedWeight'); 
    const savedItalic = localStorage.getItem('isItalic') === 'true';

    if (savedText) setText(savedText);
    if (savedFont) setSelectedFont(savedFont);
    if (savedWeight) setSelectedWeight(savedWeight); 
    if (savedItalic) setIsItalic(savedItalic);
  }, []);

  useEffect(() => {
    localStorage.setItem('text', text);
  }, [text]);

  useEffect(() => {
    localStorage.setItem('selectedFont', selectedFont);
  }, [selectedFont]);

  useEffect(() => {
    localStorage.setItem('selectedWeight', selectedWeight); 
  }, [selectedWeight]);

  useEffect(() => {
    localStorage.setItem('isItalic', JSON.stringify(isItalic));
  }, [isItalic]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleReset = () => {
    setText('');
    setSelectedFont('');
    setSelectedWeight('normal');
    setIsItalic(false);
    localStorage.removeItem('text');
    localStorage.removeItem('selectedFont');
    localStorage.removeItem('selectedWeight');
    localStorage.removeItem('isItalic');
  };

  const handleSave = () => {
    console.log('Saved text:', text);
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const handleWeightChange = (e) => {
    setSelectedWeight(e.target.value);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  return (
    <div style={{ padding: '115px', maxWidth: '4000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '263px', marginBottom: '100px'}}>
        <FontSelector selectedFont={selectedFont} handleFontChange={handleFontChange} />
        <FontWeightSelector selectedWeight={selectedWeight} handleWeightChange={handleWeightChange} />
        <ItalicToggle isItalic={isItalic} toggleItalic={toggleItalic} />
      </div>
      <h1 style={{color:'white'}}>Text Area:</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        style={{
          width: '100%',
          height: '100px',
          fontFamily: selectedFont,
          fontWeight: selectedWeight, 
          fontStyle: isItalic ? 'italic' : 'normal',
        }}
      />
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default TextAreaComponent;
