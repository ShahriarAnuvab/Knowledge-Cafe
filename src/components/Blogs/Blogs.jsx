import PropTypes from 'prop-types';

const Blogs = ({blogs}) => {
    console.log(blogs)
    return (
        <div>
            <img src={blogs.cover} alt="" />
            <div className='flex items-center gap-52'>
                <div className='flex items-center gap-2'>
                    <img src={blogs.author_img} alt=""  className='w-11'/>
                    <p>{blogs.author} <br /> {blogs.posted_date
}</p>
                </div>
                <div className='flex items-center gap-2'>
                <p>{blogs.reading_time} min</p>
                <button className='btn'>btn</button>
            
                </div>
               
            </div>
            <h1>{blogs.title}</h1>
        </div>
    );
};
Blogs.propTypes ={
    blogs : PropTypes.object.isRequired
}

export default Blogs;