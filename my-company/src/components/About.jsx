function About() {
  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '1200px', 
      margin: '0 auto'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        color: '#2c3e50', 
        marginBottom: '30px',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        About Us
      </h1>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555', 
          lineHeight: '1.8',
          marginBottom: '20px'
        }}>
          Our company has been providing top-notch services since 1990. We specialize 
          in various fields including technology, marketing, and consultancy.
        </p>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555', 
          lineHeight: '1.8',
          marginBottom: '20px'
        }}>
          Over the years, we have grown from a small startup to a leading industry 
          player, serving clients across the globe. Our commitment to quality and 
          innovation has earned us numerous awards and the trust of thousands of clients.
        </p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Our Mission</h3>
          <p style={{ color: '#666' }}>
            To deliver exceptional value and innovative solutions to our clients.
          </p>
        </div>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Our Vision</h3>
          <p style={{ color: '#666' }}>
            To be the leading provider of technology and consulting services globally.
          </p>
        </div>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Our Values</h3>
          <p style={{ color: '#666' }}>
            Integrity, excellence, innovation, and customer-centricity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

