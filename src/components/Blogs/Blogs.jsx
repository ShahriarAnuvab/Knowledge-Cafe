import PropTypes from "prop-types";

const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <div className="container mx-auto w-9/12 shadow-2xl rounded-2xl p-5 my-5">
    <div>
    <img src={blogs.cover} alt="" className="mx-auto"/>
      <div className="flex justify-between items-center my-2 flex-col md:flex-row">
        <div className="flex items-center gap-2 p-2">
          <img src={blogs.author_img} alt="" className="w-11" />
          <div className="rounded-sm">
            <p className="text-2xl font-bold">{blogs.author}</p>
            <p className="text-base font-semibold text-gray-500">{blogs.posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-base font-semibold text-gray-500">{blogs.reading_time} min</p>
          <button className="btn">btn</button>
        </div>
      </div>
      <h1 className="font-bold text-xl md:text-4xl">{blogs.title}</h1>
    </div>
    </div>
  );
};
Blogs.propTypes = {
  blogs: PropTypes.object.isRequired,
};

export default Blogs;
