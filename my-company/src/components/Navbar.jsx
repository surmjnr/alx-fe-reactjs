import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '15px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link 
          to="/" 
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          My Company
        </Link>
        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }}>
          <Link 
            to="/" 
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1rem',
              padding: '8px 15px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1rem',
              padding: '8px 15px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            About
          </Link>
          <Link 
            to="/services" 
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1rem',
              padding: '8px 15px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1rem',
              padding: '8px 15px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

