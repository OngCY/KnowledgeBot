import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Knowledge Bot</h2>
      <div className="links">
        <Link to="/" style={{ 
          color: 'white',
          fontWeight: "bold",
          paddingRight: "1em"
        }}>Main</Link>
        <Link to="/createBot" style={{ 
          color: 'white',
          fontWeight: "bold",
          paddingRight: "1em"
        }}>Create Bot</Link>
      </div>
    </nav> 
  );
}
 
export default Navbar;