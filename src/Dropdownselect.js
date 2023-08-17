import React, { useState } from 'react';

const DropdownSelect = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    onChange(newSelectedOption); 
  };

  return (
    <div className='text-xl font-mono font-bold '>
    <select value={selectedOption} onChange={handleOptionChange}>
      <option value="smartphones">smartphones</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    </div>
  );
};

export default DropdownSelect;
