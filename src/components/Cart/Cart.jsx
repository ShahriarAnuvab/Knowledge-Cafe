import PropTypes  from "prop-types";
const Cart = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div className="bg-[#FFF] rounded-lg w-10/12 p-4 m-5 mx-auto">
            <div>
                <h1>{bookmark.title}</h1>
            </div>
            
        </div>
    );
};
Cart.propTypes ={
    bookmark : PropTypes.object
}
export default Cart;