import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {

 const { id } = useParams();
 const { data:blog, error, isPending} = useFetch(`http://localhost:8080/blogs/${id}`)


 return ( 
  <div className="blog-details">
   { isPending && <>loading....</> }
   { error && <>{error}</> }
   { blog && (<article>
     <h2>{ blog.title }</h2>
     <p>written by { blog.author }</p>
     <div>{ blog.body }</div>
   </article>)}
  </div>
  );
}
 
export default BlogDetails;