import { useState, useEffect } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import LogoutButton from '../components/LogoutButton';
import API from '../services/api';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(false);

  // Form states
  const [projectForm, setProjectForm] = useState({ name: '', description: '', image: '' });
  const [clientForm, setClientForm] = useState({ name: '', designation: '', description: '', image: '' });
  
  // Edit states
  const [editingProject, setEditingProject] = useState(null);
  const [editingClient, setEditingClient] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showClientModal, setShowClientModal] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [proj, clie, cont, news] = await Promise.all([
        API.get('/projects'),
        API.get('/clients'),
        API.get('/contacts'),
        API.get('/newsletters')
      ]);
      setProjects(proj.data.data || []);
      setClients(clie.data.data || []);
      setContacts(cont.data.data || []);
      setNewsletters(news.data.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error loading data. Make sure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  // PROJECT HANDLERS
  const handleOpenProjectModal = (project = null) => {
    if (project) {
      setEditingProject(project);
      setProjectForm({
        name: project.name,
        description: project.description,
        image: project.image
      });
    } else {
      setEditingProject(null);
      setProjectForm({ name: '', description: '', image: '' });
    }
    setShowProjectModal(true);
  };

  const handleCloseProjectModal = () => {
    setShowProjectModal(false);
    setEditingProject(null);
    setProjectForm({ name: '', description: '', image: '' });
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    try {
      if (editingProject) {
        // UPDATE
        await API.put(`/projects/${editingProject._id}`, projectForm);
        alert('Project updated successfully!');
      } else {
        // CREATE
        await API.post('/projects', projectForm);
        alert('Project added successfully!');
      }
      handleCloseProjectModal();
      fetchAllData();
    } catch (error) {
      alert('Error saving project: ' + error.response?.data?.error);
    }
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await API.delete(`/projects/${id}`);
        alert('Project deleted successfully!');
        fetchAllData();
      } catch (error) {
        alert('Error deleting project'+ error.response?.data?.error);
      }
    }
  };

  // CLIENT HANDLERS
  const handleOpenClientModal = (client = null) => {
    if (client) {
      setEditingClient(client);
      setClientForm({
        name: client.name,
        designation: client.designation,
        description: client.description,
        image: client.image
      });
    } else {
      setEditingClient(null);
      setClientForm({ name: '', designation: '', description: '', image: '' });
    }
    setShowClientModal(true);
  };

  const handleCloseClientModal = () => {
    setShowClientModal(false);
    setEditingClient(null);
    setClientForm({ name: '', designation: '', description: '', image: '' });
  };

  const handleSaveClient = async (e) => {
    e.preventDefault();
    try {
      if (editingClient) {
        // UPDATE
        await API.put(`/clients/${editingClient._id}`, clientForm);
        alert('Client updated successfully!');
      } else {
        // CREATE
        await API.post('/clients', clientForm);
        alert('Client added successfully!');
      }
      handleCloseClientModal();
      fetchAllData();
    } catch (error) {
      alert('Error saving client: ' + error.response?.data?.error);
    }
  };

  const handleDeleteClient = async (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      try {
        await API.delete(`/clients/${id}`);
        alert('Client deleted successfully!');
        fetchAllData();
      } catch (error) {
        alert('Error deleting client'+ error.response?.data?.error);
      }
    }
  };

  // MODAL COMPONENT
  const Modal = ({ isOpen, title, onClose, children }) => {
    if (!isOpen) return null;
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}>
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '8px',
          maxWidth: '600px',
          width: '90%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>{title}</h3>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#999'
              }}
            >
              ✕
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (loading && activeTab !== 'dashboard') {
      return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;
    }

    // DASHBOARD
    if (activeTab === 'dashboard') {
      return (
        <div style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: 'bold' }}> Dashboard</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px', textAlign: 'center', border: '1px solid #bbdefb' }}>
              <h3 style={{ fontSize: '32px', color: '#1976d2', fontWeight: 'bold' }}>{projects.length}</h3>
              <p style={{ color: '#555', marginTop: '10px' }}> Total Projects</p>
            </div>
            <div style={{ background: '#f3e5f5', padding: '20px', borderRadius: '8px', textAlign: 'center', border: '1px solid #e1bee7' }}>
              <h3 style={{ fontSize: '32px', color: '#7b1fa2', fontWeight: 'bold' }}>{clients.length}</h3>
              <p style={{ color: '#555', marginTop: '10px' }}> Total Clients</p>
            </div>
            <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '8px', textAlign: 'center', border: '1px solid #ffe0b2' }}>
              <h3 style={{ fontSize: '32px', color: '#f57c00', fontWeight: 'bold' }}>{contacts.length}</h3>
              <p style={{ color: '#555', marginTop: '10px' }}> Contact Forms</p>
            </div>
            <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '8px', textAlign: 'center', border: '1px solid #c8e6c9' }}>
              <h3 style={{ fontSize: '32px', color: '#388e3c', fontWeight: 'bold' }}>{newsletters.length}</h3>
              <p style={{ color: '#555', marginTop: '10px' }}> Subscribers</p>
            </div>
          </div>
        </div>
      );
    }

    // PROJECTS TAB
    if (activeTab === 'projects') {
      return (
        <div style={{ padding: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}> Project Management</h2>
            <button
              onClick={() => handleOpenProjectModal()}
              className="btn btn-primary"
            >
               Add New Project
            </button>
          </div>

          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            overflowX: 'auto'
          }}>
            {projects.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center', padding: '40px' }}>
                 No projects yet. Click "Add New Project" to get started!
              </p>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #ddd', background: '#f9f9f9' }}>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Image</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Name</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Description</th>
                    <th style={{ textAlign: 'center', padding: '12px', fontWeight: '600' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(proj => (
                    <tr key={proj._id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '12px' }}>
                        <img src={proj.image} alt={proj.name} style={{ width: '50px', height: '50px', borderRadius: '4px', objectFit: 'cover' }} />
                      </td>
                      <td style={{ padding: '12px', fontWeight: '500' }}>{proj.name}</td>
                      <td style={{ padding: '12px', color: '#666' }}>{proj.description.substring(0, 40)}...</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button
                          onClick={() => handleOpenProjectModal(proj)}
                          className="btn btn-primary"
                          style={{ padding: '6px 12px', fontSize: '12px', marginRight: '5px' }}
                        >
                           Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProject(proj._id)}
                          className="btn btn-danger"
                          style={{ padding: '6px 12px', fontSize: '12px' }}
                        >
                           Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <Modal
            isOpen={showProjectModal}
            title={editingProject ? ' Edit Project' : ' Add New Project'}
            onClose={handleCloseProjectModal}
          >
            <form onSubmit={handleSaveProject}>
              <div className="form-group">
                <label>Project Name *</label>
                <input
                  type="text"
                  value={projectForm.name}
                  onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                  placeholder="Enter project name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Project Description *</label>
                <textarea
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  placeholder="Enter project description"
                  required
                />
              </div>

              <div className="form-group">
                <label>Image URL *</label>
                <input
                  type="text"
                  value={projectForm.image}
                  onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                  placeholder="https://via.placeholder.com/400x300"
                  required
                />
              </div>

              {projectForm.image && (
                <div style={{ marginBottom: '15px' }}>
                  <img src={projectForm.image} alt="Preview" style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px', maxHeight: '200px' }} />
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={handleCloseProjectModal}
                  className="btn"
                  style={{ background: '#ddd', color: '#333' }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingProject ? 'Update Project' : 'Add Project'}
                </button>
              </div>
            </form>
          </Modal>
        </div>
      );
    }

    // CLIENTS TAB
    if (activeTab === 'clients') {
      return (
        <div style={{ padding: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}> Client Management</h2>
            <button
              onClick={() => handleOpenClientModal()}
              className="btn btn-primary"
            >
               Add New Client
            </button>
          </div>

          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            overflowX: 'auto'
          }}>
            {clients.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center', padding: '40px' }}>
                 No clients yet. Click "Add New Client" to get started!
              </p>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #ddd', background: '#f9f9f9' }}>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Image</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Name</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Designation</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Description</th>
                    <th style={{ textAlign: 'center', padding: '12px', fontWeight: '600' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map(client => (
                    <tr key={client._id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '12px' }}>
                        <img src={client.image} alt={client.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                      </td>
                      <td style={{ padding: '12px', fontWeight: '500' }}>{client.name}</td>
                      <td style={{ padding: '12px', color: '#666' }}>{client.designation}</td>
                      <td style={{ padding: '12px', color: '#666' }}>{client.description.substring(0, 30)}...</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button
                          onClick={() => handleOpenClientModal(client)}
                          className="btn btn-primary"
                          style={{ padding: '6px 12px', fontSize: '12px', marginRight: '5px' }}
                        >
                           Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClient(client._id)}
                          className="btn btn-danger"
                          style={{ padding: '6px 12px', fontSize: '12px' }}
                        >
                           Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <Modal
            isOpen={showClientModal}
            title={editingClient ? ' Edit Client' : ' Add New Client'}
            onClose={handleCloseClientModal}
          >
            <form onSubmit={handleSaveClient}>
              <div className="form-group">
                <label>Client Name *</label>
                <input
                  type="text"
                  value={clientForm.name}
                  onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                  placeholder="Enter client name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Designation (CEO, Developer, Designer, etc.) *</label>
                <input
                  type="text"
                  value={clientForm.designation}
                  onChange={(e) => setClientForm({ ...clientForm, designation: e.target.value })}
                  placeholder="e.g., CEO, Full Stack Developer, UI/UX Designer"
                  required
                />
              </div>

              <div className="form-group">
                <label>Description *</label>
                <textarea
                  value={clientForm.description}
                  onChange={(e) => setClientForm({ ...clientForm, description: e.target.value })}
                  placeholder="Enter client description or testimonial"
                  required
                />
              </div>

              <div className="form-group">
                <label>Image URL *</label>
                <input
                  type="text"
                  value={clientForm.image}
                  onChange={(e) => setClientForm({ ...clientForm, image: e.target.value })}
                  placeholder="https://via.placeholder.com/150x150"
                  required
                />
              </div>

              {clientForm.image && (
                <div style={{ marginBottom: '15px', textAlign: 'center' }}>
                  <img src={clientForm.image} alt="Preview" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={handleCloseClientModal}
                  className="btn"
                  style={{ background: '#ddd', color: '#333' }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingClient ? 'Update Client' : 'Add Client'}
                </button>
              </div>
            </form>
          </Modal>
        </div>
      );
    }

    // CONTACTS TAB
    if (activeTab === 'contacts') {
      return (
        <div style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: 'bold' }}> Contact Form Submissions ({contacts.length})</h2>
          <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
            {contacts.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center', padding: '40px' }}>
                 No contact submissions yet.
              </p>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #ddd', background: '#f9f9f9' }}>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Name</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Email</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Mobile</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>City</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <tr key={contact._id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '12px', fontWeight: '500' }}>{contact.fullName}</td>
                      <td style={{ padding: '12px' }}>{contact.email}</td>
                      <td style={{ padding: '12px' }}>{contact.mobileNumber}</td>
                      <td style={{ padding: '12px' }}>{contact.city}</td>
                      <td style={{ padding: '12px', fontSize: '12px', color: '#666' }}>
                        {new Date(contact.submittedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      );
    }

    // NEWSLETTERS TAB
    if (activeTab === 'newsletters') {
      return (
        <div style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '10px', fontWeight: 'bold' }}> Newsletter Subscribers</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>Total: {newsletters.length}</p>
          <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
            {newsletters.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center', padding: '40px' }}>
                 No newsletter subscribers yet.
              </p>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '400px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #ddd', background: '#f9f9f9' }}>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Email</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>Subscribed Date</th>
                  </tr>
                </thead>
                <tbody>
                  {newsletters.map(news => (
                    <tr key={news._id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '12px', fontWeight: '500' }}>{news.email}</td>
                      <td style={{ padding: '12px', fontSize: '12px', color: '#666' }}>
                        {new Date(news.subscribedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f5f5' }}>
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {renderContent()}
      </div>
    </div>
  );
}
