import { useState, useEffect } from 'react';
import API from '../services/api';

export default function ClientsSection() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const { data } = await API.get('/clients');
      setClients(data.data || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="loading-wrapper">
      <div className="loading"></div>
      <p>Loading clients...</p>
    </div>
  );

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Happy Clients</h2>
          <p className="section-subtitle">
            Meet some of our valued clients who trusted us with their projects
          </p>
        </div>
        
        {clients.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">👥</div>
            <p>No clients to display yet</p>
          </div>
        ) : (
          <div className="clients-grid">
            {clients.map(client => (
              <div key={client._id} className="client-card">
                <div className="client-avatar-wrapper">
                  <img src={client.image} alt={client.name} className="client-avatar" />
                  <div className="client-badge">✓</div>
                </div>
                <h3 className="client-name">{client.name}</h3>
                <p className="client-designation">{client.designation}</p>
                <p className="client-description">{client.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
