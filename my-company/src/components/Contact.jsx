import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! Thank you for contacting us.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '800px', 
      margin: '0 auto'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        color: '#2c3e50', 
        marginBottom: '30px',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        Contact Us
      </h1>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="name" 
              style={{ 
                display: 'block', 
                marginBottom: '8px', 
                color: '#2c3e50',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ 
                width: '100%',
                padding: '12px',
                fontSize: '1rem',
                border: '2px solid #ddd',
                borderRadius: '5px',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3498db'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="email" 
              style={{ 
                display: 'block', 
                marginBottom: '8px', 
                color: '#2c3e50',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ 
                width: '100%',
                padding: '12px',
                fontSize: '1rem',
                border: '2px solid #ddd',
                borderRadius: '5px',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3498db'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <label 
              htmlFor="message" 
              style={{ 
                display: 'block', 
                marginBottom: '8px', 
                color: '#2c3e50',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{ 
                width: '100%',
                padding: '12px',
                fontSize: '1rem',
                border: '2px solid #ddd',
                borderRadius: '5px',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                resize: 'vertical',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3498db'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>
          
          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '1.1rem',
              backgroundColor: '#3498db',
              color: '#ffffff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
          >
            Send Message
          </button>
        </form>
        
        <div style={{
          marginTop: '40px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '5px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Other Ways to Reach Us</h3>
          <p style={{ color: '#666', marginBottom: '10px' }}>
            <strong>Email:</strong> contact@ourcompany.com
          </p>
          <p style={{ color: '#666', marginBottom: '10px' }}>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p style={{ color: '#666' }}>
            <strong>Address:</strong> 123 Business Street, City, State 12345
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

