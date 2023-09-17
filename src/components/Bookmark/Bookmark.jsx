import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
const Bookmark = ({bookmarks}) => {
    // console.log(typeof(bookmarks))
    return (
        <div className="w-3/12 border rounded-sm bg-slate-500 p-2 my-5">
            <h1 className="text-white text-center border-b-2">Bookmark: {bookmarks.length}</h1>
            
        <div className="">
            {
             bookmarks.map(bookmark => <Cart key={bookmark.id} bookmark={bookmark}> time  </Cart>)
            }
        </div>
        </div>
    );
};
Bookmark.propTypes = {
    bookmarks : PropTypes.array
  };
  

export default Bookmark;