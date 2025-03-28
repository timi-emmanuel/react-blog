import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
 const { data:blogs, isPending, error} = useFetch('http://localhost:8080/blogs')
 const title = {first:'All', second:'Blogs'}

  return (
    <div className="home">
      { error &&  <div>{error}</div>}
      { isPending && <div>loading....</div> }
      { blogs && <BlogList blogs={blogs} titleName={title}/> }
      
    </div>
  );
};

export default Home;
