import React from "react";

const RatingSelect = ({ onSelect, selectedValue }) => {
  const handleChange = (e) => {
    onSelect(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      {Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selectedValue === i + 1} //{7 === i+1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
