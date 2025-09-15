import React from 'react';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ fullScreen = false }) => {
  return (
    <div className={`flex items-center justify-center ${fullScreen ? 'min-h-screen' : 'min-h-[60vh]'}`}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-600 border-opacity-75"></div>
    </div>
  );
};

export default LoadingSpinner;
