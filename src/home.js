import { useState, useEffect } from 'react'
import BlogList from './blogList';

const Home = () => {
  const title1 = 'All Blogs',
  title2 = 'Jolie\'s Blogs';
  const [blogs, setBlogs] = useState([
    { title: 'barcelona players name', body: "lorem ipsum...", author: "wisdom", id: 1 },
    { title: 'barcelona players salary', body: "lorem ipsum...", author: "Jolie", id: 2 },
    { title: 'barcelona players wives', body: "lorem ipsum...", author: "Jolie", id: 3 }
 ]);

 const [name, setName] = useState('Timi')
 const handleDelete = (id) => {
  const newBlogs  = blogs.filter( blog => (blog.id !== id))
  setBlogs(newBlogs)
 } 

 useEffect(() =>{
  console.log('use effect ran');
  console.log(name)
 },[name])//use effect with dependencies

  return (
    <div className="home">
      <button onClick={() => setName('Emmanuel')}> change name </button>
      <p> {name} </p>
      <BlogList blogs={blogs} title={title1} handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter(blog => blog.author==='Jolie')} title={title2} handleDelete={handleDelete}/>
    </div>
  );
};

export default Home;
