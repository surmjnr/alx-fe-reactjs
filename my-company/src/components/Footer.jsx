import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: '#ffffff',
      padding: '40px 20px',
      marginTop: '60px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        marginBottom: '30px'
      }}>
        <div>
          <h3 style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
            My Company
          </h3>
          <p style={{ 
            color: '#bdc3c7', 
            lineHeight: '1.8',
            fontSize: '0.95rem'
          }}>
            Delivering excellence in technology, marketing, and consultancy 
            services since 1990.
          </p>
        </div>
        <div>
          <h3 style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
            Quick Links
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            color: '#bdc3c7'
          }}>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/" style={{ color: '#bdc3c7', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/about" style={{ color: '#bdc3c7', textDecoration: 'none' }}>
                About
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/services" style={{ color: '#bdc3c7', textDecoration: 'none' }}>
                Services
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/contact" style={{ color: '#bdc3c7', textDecoration: 'none' }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
            Contact Info
          </h3>
          <p style={{ color: '#bdc3c7', marginBottom: '10px', fontSize: '0.95rem' }}>
            Email: contact@ourcompany.com
          </p>
          <p style={{ color: '#bdc3c7', marginBottom: '10px', fontSize: '0.95rem' }}>
            Phone: +1 (555) 123-4567
          </p>
          <p style={{ color: '#bdc3c7', fontSize: '0.95rem' }}>
            Address: 123 Business Street, City, State 12345
          </p>
        </div>
      </div>
      <div style={{
        borderTop: '1px solid #34495e',
        paddingTop: '20px',
        textAlign: 'center',
        color: '#bdc3c7',
        fontSize: '0.9rem'
      }}>
        <p>&copy; 2024 My Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

