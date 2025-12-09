import '../../styles/sections/testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, Tech Startup',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fe7FMx5mP8CnnWrpYM9EkncKFOCiPDmKow&s',
      text: 'RG Tech team delivered our project on time and exceeded our expectations. Highly recommended!'
    },
    {
      name: 'Priya Sharma',
      role: 'Product Manager',
      image: 'data:image/jpeg;base64,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',
      text: 'Great communication, excellent code quality, and amazing support throughout the project.'
    },
    {
      name: 'Amit Patel',
      role: 'Founder, Digital Agency',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICC6mX5VsHIGRJprrUhWXcWXuyXWAGdRcWw36mNIA1Af3Puww4N4ySso&s',
      text: 'The best investment we made for our business. Professional team with great technical skills.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {'⭐'.repeat(5)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
