// import moduleName from 'module'

const BlogList = ({blogs, titleName}) => {
  const {first, second} = titleName
 return ( 
   <div>
    <h2>{first} {second}</h2>
    {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          {/* <button className="button" onClick={() => handleDelete(blog.id)}>delete blog</button> */}
        </div>
      ))}
   </div>
  );
}
 
export default BlogList;