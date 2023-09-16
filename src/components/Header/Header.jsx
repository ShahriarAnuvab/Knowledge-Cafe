import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <div className='container mx-auto flex items-center justify-between p-5 border-b-2  '>
            <h1 className="text-[#111] text-2xl md:text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;