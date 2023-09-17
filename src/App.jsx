import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import Bookmark from "./components/Bookmark/Bookmark";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [timeTotal, setTime] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookmarks = (blog) => {
    const isExist = bookmarks.find((item) => item.id === blog.id);
    if (isExist) {
      toast.warn("Already Bookmarked", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setBookmarks([...bookmarks, blog]);
    }
  };
  const markAsRead = (time, id) => {
    // console.log(id);
    
    setTime(timeTotal + time);
    const remaingBookmarks = bookmarks.filter(
      (newBookmark) => newBookmark.id !== id
    );
    setBookmarks(remaingBookmarks);
  };

  return (
    <div className="container mx-auto">
      <Header></Header>
      <h1 className=" text-2xl font-bold">
        Total Blogs:{" "}
        <span className="text-xl font-semibold">{blogs.length}</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          {blogs.map((blogs) => (
            <Blogs
              key={blogs.id}
              blogs={blogs}
              handleBookmarks={handleBookmarks}
              markAsRead={markAsRead}
            ></Blogs>
          ))}
        </div>
        <ToastContainer></ToastContainer>
        <div>
          <div>
            <h1>Spent On Read Time: {timeTotal}</h1>
          </div>
          <Bookmark bookmarks={bookmarks}></Bookmark>
        </div>
      </div>
    </div>
  );
}

export default App;
