import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#111828] shadow-md z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="GeekFood Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-sky-600">GeekFood</span>
        </a>

        <ul className="hidden md:flex space-x-6 text-white  font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="text-blue-600 cursor-pointer">Quote</li>
          <li className="hover:text-blue-600 cursor-pointer">Restaurants</li>
          <li className="hover:text-blue-600 cursor-pointer">Foods</li>
          <li className="hover:text-blue-600 cursor-pointer">Contacts</li>
        </ul>

        <div className="flex items-center space-x-4">

          <button className="bg-blue-600 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-semibold transition">Get Started</button>

          {/* <i className="fa-solid fa-bars text-2xl hidden md:block cursor-pointer"></i> */}
            <div>
            <i className="fa-solid fa-hamburger sm:hidden text-2xl text-gray-300"></i>
            </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
