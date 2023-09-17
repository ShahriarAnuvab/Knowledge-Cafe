import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container mx-auto">
            <Header></Header>
      <h1 className="">Total Blogs: {blogs.length}</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          {blogs.map((blogs) => (
            <Blogs key={blogs.id} blogs={blogs}></Blogs>
          ))}
        </div>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
