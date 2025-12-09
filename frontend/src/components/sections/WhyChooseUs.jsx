import '../../styles/sections/why-choose-us.css';

export default function WhyChooseUs() {
  const features = [
    {
      icon: '',
      title: 'Lightning Fast Development',
      description: 'We use modern tech stack and best practices to deliver your project quickly without compromising quality.'
    },
    {
      icon: '',
      title: 'Tailored Solutions',
      description: 'Every business is unique. We create custom solutions that perfectly fit your specific needs and goals.'
    },
    {
      icon: '',
      title: 'Security First',
      description: 'Your data security is our priority. We implement industry-standard security practices across all projects.'
    },
    {
      icon: '',
      title: 'Responsive Design',
      description: 'All our products work seamlessly across all devices - desktop, tablet, and mobile phones.'
    },
    {
      icon: '',
      title: 'Future Ready',
      description: 'We build scalable solutions that grow with your business and adapt to future technology changes.'
    },
    {
      icon: '',
      title: '24/7 Support',
      description: 'Our dedicated support team is always here to help you. Questions? We have answers.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            Here's what makes us the best choice for your next project
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
