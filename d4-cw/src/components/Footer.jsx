const Footer = () => {
  return (
    <footer className="bg-gray-50 text-center py-12 px-4">
      {/* Logo + Name */}
      <div className="flex flex-row justify-center gap-2 space-y-2 mb-6">
        <i className="fa-solid fa-water text-3xl text-teal-700"></i>
        <span className="text-teal-700 font-bold text-xl">logoipsum</span>
      </div>

      {/* Description */}
      <div className="text-gray-500 mb-8">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Incidunt consequuntur amet culpa cum itaque neque.</p>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-700 font-medium mb-8">
        <a href="#" className="hover:text-teal-700">About</a>
        <a href="#" className="hover:text-teal-700">Careers</a>
        <a href="#" className="hover:text-teal-700">History</a>
        <a href="#" className="hover:text-teal-700">Services</a>
        <a href="#" className="hover:text-teal-700">Projects</a>
        <a href="#" className="hover:text-teal-700">Blog</a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-gray-600 text-xl">
        <i className="fab fa-facebook hover:text-teal-700 cursor-pointer"></i>
        <i className="fab fa-instagram hover:text-teal-700 cursor-pointer"></i>
        <i className="fab fa-twitter hover:text-teal-700 cursor-pointer"></i>
        <i className="fab fa-github hover:text-teal-700 cursor-pointer"></i>
        <i className="fab fa-dribbble hover:text-teal-700 cursor-pointer"></i>
      </div>
    </footer>
  );
};

export default Footer;
