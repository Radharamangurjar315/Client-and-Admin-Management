import { useNavigate } from 'react-router-dom';

export default function AdminSidebar({ activeTab, setActiveTab }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const menuItems = [
    { id: 'dashboard', label: ' Dashboard' },
    { id: 'projects', label: ' Projects' },
    { id: 'clients', label: ' Clients' },
    { id: 'contacts', label: ' Contacts' },
    { id: 'newsletters', label: ' Newsletters' }
  ];

  return (
    <div style={{
      width: '250px',
      background: '#222',
      color: 'white',
      padding: '20px',
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto',
      boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '30px', fontSize: '20px', fontWeight: 'bold', color: 'white' }}> Admin Panel</h2>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              background: activeTab === item.id ? '#007bff' : 'transparent',
              color: 'white',
              border: 'none',
              padding: '12px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '14px',
              fontWeight: activeTab === item.id ? '600' : '400',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== item.id) e.currentTarget.style.background = '#444';
            }}
            onMouseLeave={(e) => {
              if (activeTab !== item.id) e.currentTarget.style.background = 'transparent';
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        style={{
          background: '#dc3545',
          color: 'white',
          border: 'none',
          padding: '12px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          width: '100%',
          marginTop: '30px',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'background 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#c82333'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#dc3545'}
      >
         Logout
      </button>
    </div>
  );
}
