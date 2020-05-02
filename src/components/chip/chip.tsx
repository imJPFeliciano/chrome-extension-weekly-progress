import React from 'react';

type Tag = {
  name: string
}

const Chip = ({ name } : Tag) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      {name}
    </span>
  );
};

export default Chip;
