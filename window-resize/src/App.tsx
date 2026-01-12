import { useState, useEffect } from 'react';

function useWindowSize() {
  // Initialize state with current window size
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update state when window resizes
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener for the resize event
    window.addEventListener('resize', handleResize);

    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means effect runs once on mount

  // Return current window size
  return size;
}

// Example usage of the custom hook in a component:
export function App() {
  const { width, height } = useWindowSize(); // Get current window size

  return (
    <div>
      Window size: {width} x {height}
    </div>
  );
}