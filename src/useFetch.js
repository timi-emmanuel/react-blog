import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    let isMounted = true; // Prevent state updates if unmounted
  
    // Clear the error when starting a new request
    setError(null);
    setIsPending(true);
  
    const fetchData = () => {
      setTimeout(() => {
        fetch(url, { signal: abortController.signal })
          .then(response => {
            if (!isMounted) return; // Stop if component unmounted
            
            if (!response.ok) {
              throw new Error('Could not fetch the data for that resource');
            }
            return response.json();
          })
          .then(result => {
            if (isMounted) {
              setData(result);
              setIsPending(false);
              setError(null); // Clear any previous error
            }
          })
          .catch(err => {
                console.error("Fetch error:", err);
           
                if (err.name === 'AbortError') {
                console.warn('Fetch request was aborted');
              } else {
                setError(err.message);
                setIsPending(false);
                setData(null); // Ensure old data is removed if an error occurs
              }
            
          });
      }, 1000); // Delay fetch call by 1 second
    };
  
    fetchData();
  
    return () => {
      abortController.abort(); // Cancel fetch on unmount
      isMounted = false; // Prevent state updates
    };
  }, [url]); // Runs when `url` changes
  // Runs when `url` changes
  

  return { data, isPending, error };
};

export default useFetch;