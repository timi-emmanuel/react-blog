import { useState, useEffect } from 'react'

const useFetch = (url) => {
 const [data, setData] = useState(null);
 const [isPending, setIsPending]=useState(true);
 const [error, setError] = useState(null)

 useEffect(() => {
  console.log('use effect ran');
  const fetchBlogs = async () => {
    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok){
         throw Error('could not fetch the data for that resource cause')
      } 
      const data = await response.json();
      setTimeout(() => {
        setData(data);
        setIsPending(false);

      }, 1000);
    } catch (error) {
      console.log('error:', error.message);
      setError(error.message);
      setIsPending(false)
    }
  };

  fetchBlogs();
}, [url]); // use effect with dependencies

return {data, isPending, error}
}

export default useFetch;