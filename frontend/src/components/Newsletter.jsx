import { useState } from 'react';
import API from '../services/api';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await API.post('/newsletters', { email });
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    } catch (err) {
      setError(err.response?.data?.error || 'Error subscribing');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon"></div>
          <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
          <p className="newsletter-text">
            Get the latest updates, articles, and resources delivered to your inbox weekly
          </p>
        </div>
        
        {subscribed && (
          <div className="alert alert-success">
             Thank you for subscribing! Check your inbox for confirmation.
          </div>
        )}
        {error && (
          <div className="alert alert-error">
            ❌ {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="newsletter-input"
          />
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={loading}
          >
            {loading ? 'Subscribing...' : ' Subscribe'}
          </button>
        </form>
        
        <p className="newsletter-privacy">
           We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
