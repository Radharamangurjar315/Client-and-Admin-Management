import { useState, useEffect } from 'react';
import API from '../services/api';

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await API.get('/projects');
      setProjects(data.data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="loading-wrapper">
      <div className="loading"></div>
      <p>Loading projects...</p>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            Explore our portfolio of successful projects delivered to satisfied clients
          </p>
        </div>
        
        {projects.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📂</div>
            <p>No projects available yet</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project._id} className="project-card">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.name} className="project-image" />
                  <div className="project-overlay">
                    <button className="btn btn-primary btn-sm">View Details</button>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href="#" className="project-link">Learn More →</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
