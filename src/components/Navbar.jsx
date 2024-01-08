import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = ["about", "contact-us"];
  return (
    <header className="w-full h-[10vh] flex justify-between items-center px-6 shadow-md">
      <div className="logo h-full w-[100px]">
        <img className="w-full h-full" src="logo.png" alt="site logo" />
      </div>
      <nav className="nav-bar">
        <ul className="nav-links flex gap-8">
          {navLinks.map((link, index) => (
            <li key={link + index} className="nav-link">
              <Link to={`#${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
