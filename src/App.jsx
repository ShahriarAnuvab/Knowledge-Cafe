import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import Bookmark from "./components/Bookmark/Bookmark";

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const [bookmarks, setBookmarks] = useState([]);
const handleBookmarks = (blog) =>{
  setBookmarks([...bookmarks, blog])
}

  return (
    <div className="container mx-auto">
      <Header></Header>
      <h1 className=" text-2xl font-bold">
        Total Blogs:{" "}
        <span className="text-xl font-semibold">{blogs.length}</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          {blogs.map((blogs) => (
            <Blogs key={blogs.id} blogs={blogs} handleBookmarks ={handleBookmarks}  ></Blogs>
          ))}
        </div>
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </div>
    </div>
  );
}

export default App;
