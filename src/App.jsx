import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import { useEffect } from "react";


function App() {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])

  return (
    <>
    <Header></Header>
    <h1>Total Blogs: {blogs.length}</h1>
    <div>
    {blogs.map(blogs => <Blogs key={blogs.id} blogs={blogs}></Blogs>)}
    </div>
   
    </>
  );
}

export default App;
