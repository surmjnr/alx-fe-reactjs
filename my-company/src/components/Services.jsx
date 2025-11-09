function Services() {
  const services = [
    {
      title: 'Technology Consulting',
      description: 'Expert guidance on technology strategy, implementation, and optimization to help your business stay ahead of the curve.'
    },
    {
      title: 'Market Analysis',
      description: 'Comprehensive market research and analysis to help you make informed business decisions and identify new opportunities.'
    },
    {
      title: 'Product Development',
      description: 'End-to-end product development services from concept to launch, ensuring your products meet market needs.'
    }
  ];

  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '1200px', 
      margin: '0 auto'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        color: '#2c3e50', 
        marginBottom: '40px',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        Our Services
      </h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginTop: '30px'
      }}>
        {services.map((service, index) => (
          <div 
            key={index}
            style={{
              padding: '30px',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              borderTop: '4px solid #3498db'
            }}
          >
            <h2 style={{ 
              color: '#2c3e50', 
              marginBottom: '15px',
              fontSize: '1.5rem'
            }}>
              {service.title}
            </h2>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.8',
              fontSize: '1rem'
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: '50px',
        padding: '30px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>
          Additional Services
        </h2>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <li style={{
            padding: '10px 20px',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            color: '#555'
          }}>
            Digital Transformation
          </li>
          <li style={{
            padding: '10px 20px',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            color: '#555'
          }}>
            Cloud Solutions
          </li>
          <li style={{
            padding: '10px 20px',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            color: '#555'
          }}>
            Data Analytics
          </li>
          <li style={{
            padding: '10px 20px',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            color: '#555'
          }}>
            Business Strategy
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;

