import React from 'react';

const Box = ({ text, bgColors }) => {
  return (
    <div className={`border w-80 h-64 m-auto ${bgColors.base} sm:${bgColors.sm} sm:m-0 md:bg-black md:text-white md:w-[600px] lg:${bgColors.lg}`}>
      <h2>{text}</h2>
    </div>
  );
};

const App = () => {
  const boxData = [
    { text: 'Box 1', bgColors: { base: 'bg-orange-300', sm: 'bg-green-500', lg: 'bg-yellow-600' } },
    { text: 'Box 2', bgColors: { base: 'bg-orange-500', sm: 'bg-gray-500', lg: 'bg-yellow-400' } },
    { text: 'Box 3', bgColors: { base: 'bg-orange-700', sm: 'bg-gray-500', lg: 'bg-yellow-200' } },
  ];

  return (
    <div className='border flex gap-1.5 flex-wrap p-2 sm:flex-row sm:justify-center md:m-auto md:justify-evenly'>
      {boxData.map((box, index) => (
        <Box key={index} text={box.text} bgColors={box.bgColors} />
      ))}
    </div>
  );
};

export default App;
