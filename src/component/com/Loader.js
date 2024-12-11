import React, { useEffect, useState } from 'react';
import '../css/Loader.css';

const Loader = ({ duration = 1500 }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);
  
  if (!loading) return null; 

  return (
    <div className="full-page-loader">
      <div className="loading">
        <svg
          className="pl"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100"
        >
          <circle
            className="pl__ring pl__ring--a"
            cx="50"
            cy="50"
            r="40"
            strokeWidth="4"
            fill="none"
          />
          <circle
            className="pl__ring pl__ring--b"
            cx="50"
            cy="50"
            r="35"
            strokeWidth="4"
            fill="none"
          />
          <circle
            className="pl__ring pl__ring--c"
            cx="50"
            cy="50"
            r="30"
            strokeWidth="4"
            fill="none"
          />
          <circle
            className="pl__ring pl__ring--d"
            cx="50"
            cy="50"
            r="25"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
