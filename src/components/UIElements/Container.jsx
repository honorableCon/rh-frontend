import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="p-6 flex flex-col justify-center min-w-0 break-words bg-white mb-6 shadow-lg rounded-xl">
      {children}
    </div>
  );
};

export default Container;
