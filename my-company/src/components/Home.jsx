function Home() {
  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '1200px', 
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        color: '#2c3e50', 
        marginBottom: '20px',
        fontWeight: 'bold'
      }}>
        Welcome to Our Company
      </h1>
      <p style={{ 
        fontSize: '1.2rem', 
        color: '#555', 
        lineHeight: '1.8',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        We are dedicated to delivering excellence in all our services.
      </p>
      <div style={{
        marginTop: '40px',
        padding: '30px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Why Choose Us?</h2>
        <p style={{ color: '#666', lineHeight: '1.8' }}>
          With over 30 years of experience, we have built a reputation for excellence, 
          innovation, and customer satisfaction. Our team of experts is committed to 
          helping you achieve your goals.
        </p>
      </div>
    </div>
  );
}

export default Home;

