import { useState, useEffect } from 'react'
import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
 const { data:blogs, isPending, error} = useFetch('http://localhost:8080/blogs')
 const title = 'All Blogs';

  return (
    <div className="home">
      { error &&  <div>{error}</div>}
      { isPending && <div>loading....</div> }
      { blogs && <BlogList blogs={blogs} title={title}/> }
      {/* <BlogList blogs={blogs.filter(blog => blog.author==='Jolie')} title={title2} handleDelete={handleDelete}/> */}
    </div>
  );
};

export default Home;
