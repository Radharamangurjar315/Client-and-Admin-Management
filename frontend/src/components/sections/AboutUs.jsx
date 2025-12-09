import '../../styles/sections/about-us.css';

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop" 
                alt="About Us" 
                className="about-img"
              />
              <div className="about-badge">
                <div className="badge-content">
                  <span className="badge-number">5+</span>
                  <span className="badge-text">Years</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '32px' }}>
              <h2 className="section-title" style={{ textAlign: 'left' }}>About Us</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '16px 0 0' }}>
                Your trusted partner in digital transformation
              </p>
            </div>
            <p>
              RG Tech is a team of passionate full-stack developers dedicated to creating 
              exceptional digital experiences. Since 2020, we've been helping startups and 
              enterprises build scalable, beautiful, and user-friendly web applications.
            </p>
            
            <p>
              Our mission is simple: transform your ideas into reality with cutting-edge 
              technology and creative problem-solving. We believe in collaboration, 
              transparency, and delivering beyond expectations.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon"></div>
                <div className="highlight-info">
                  <span className="highlight-number">5+</span>
                  <span className="highlight-text">Years of Experience</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"></div>
                <div className="highlight-info">
                  <span className="highlight-number">50+</span>
                  <span className="highlight-text">Projects Completed</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"></div>
                <div className="highlight-info">
                  <span className="highlight-number">30+</span>
                  <span className="highlight-text">Happy Clients</span>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary btn-lg">
               Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
