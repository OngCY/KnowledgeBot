import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Knowledge Bot</h2>
      <div className="links">
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Main</Link>
        <Link to="/createBot" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Create Bot</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;