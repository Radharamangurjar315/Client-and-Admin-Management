import '../../styles/sections/services.css';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with latest technologies.',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that users love to interact with.',
    },
    {
      title: 'API Development',
      description: 'Robust and scalable APIs for seamless backend integration.',
    },
    {
      title: 'Database Design',
      description: 'Efficient database architecture optimized for performance.',
    },
    {
      title: 'DevOps & Deployment',
      description: 'Secure deployment, monitoring, and maintenance of your applications.',
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions for all your digital needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
