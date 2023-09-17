import PropTypes from "prop-types";
import { FiBookmark } from "react-icons/fi";
const Blogs = ({ blogs, handleBookmarks}) => {
    // console.log(typeof(handleBookmarks))
  
  return (
    <div className="container mx-auto md:w-9/12 shadow-2xl rounded-2xl p-5 my-5">
      <div>
        <img src={blogs.cover} alt="" className="mx-auto" />
        <div className="flex justify-between items-center my-2 flex-col md:flex-row mx-5">
          <div className="flex items-center gap-2 p-2">
            <img src={blogs.author_img} alt="" className="w-11" />
            <div className="rounded-sm">
              <p className="text-2xl font-bold">{blogs.author}</p>
              <p className="text-base font-semibold text-gray-500">
                {blogs.posted_date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold text-gray-500">
              {blogs.reading_time} min
            </p>
            <button onClick={()=> handleBookmarks(blogs)}><FiBookmark/></button>
          </div>
        </div>
        <p>
            {
                blogs.hashtags.map((hastag, idx) => <span key={idx} className="p-2 my-2"><a href="">#{hastag}</a></span>)
            }

        </p>
        <h1 className="font-bold text-xl md:text-4xl my-2">{blogs.title}</h1>
        <button className="text-[#6047EC] underline font-semibold">Mark as read</button>
      </div>
    </div>
  );
};
Blogs.propTypes = {
  blogs: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func
};

export default Blogs;
