import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import './UserDashboardLayout.css';
import {
  Menu, X, Bell, Mail, User, LogOut, HelpCircle,
  Sun, Moon, LayoutDashboard, CreditCard, BarChart3,
  Target, Sparkles, Calendar, MessageSquare, Zap, Settings
} from 'lucide-react';

const UserDashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState('light');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [activeSidebarItem, setActiveSidebarItem] = useState('');
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  // Initialize theme and sidebar state
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);

    const savedSidebar = localStorage.getItem('sidebarExpanded') === 'true';
    setSidebarExpanded(savedSidebar);
  }, []);

  // Update activeTab based on current route
  useEffect(() => {
    const path = location.pathname;

    // Check if it's a top nav route
    if (path === '/dashboard' || path === '/dashboard/') {
      setActiveTab('Dashboard');
      setActiveSidebarItem('');
    } else if (path.includes('/dashboard/payments')) {
      setActiveTab('Payments');
      setActiveSidebarItem('');
    } else if (path.includes('/dashboard/analytics')) {
      setActiveTab('Analytics');
      setActiveSidebarItem('');
    } else if (path.includes('/dashboard/profile')) {
      setActiveTab('');
      setActiveSidebarItem('');
    } else if (path.includes('/dashboard/settings')) {
      setActiveTab('');
      setActiveSidebarItem('');
    } else {
      // It's a sidebar route
      setActiveTab('');
      const sidebarItem = sidebarNavItems.find(item => path.includes(item.route));
      if (sidebarItem) {
        setActiveSidebarItem(sidebarItem.text);
      }
    }
  }, [location.pathname]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleSidebar = () => {
    const newState = !sidebarExpanded;
    setSidebarExpanded(newState);
    localStorage.setItem('sidebarExpanded', newState);
  };

  const openMobileSidebar = () => {
    setMobileSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
    document.body.style.overflow = '';
  };

  const handleDropdownItemClick = (route) => {
    navigate(route);
    setShowUserDropdown(false);
  };

  // Sidebar routes
  const sidebarNavItems = [
    { icon: Target, text: 'Audience Targeting', route: 'audience-targeting' },
    { icon: Sparkles, text: 'Generate content', route: 'generate-content' },
    { icon: Calendar, text: 'Scheduling', route: 'scheduling' },
    { icon: MessageSquare, text: 'Auto Dm', route: 'auto-dm' },
    { icon: Zap, text: 'Ai Advisor', route: 'ai-advisor' },
  ];

  // Top navigation tabs
  const topNavTabs = [
    { icon: LayoutDashboard, text: 'Dashboard', route: '/dashboard' },
    { icon: CreditCard, text: 'Payments', route: '/dashboard/payments' },
    { icon: BarChart3, text: 'Analytics', route: '/dashboard/analytics' },
  ];

  return (
    <>

      <div
        className={`mobile-sidebar-overlay ${mobileSidebarOpen ? 'active' : ''}`}
        onClick={closeMobileSidebar}
      ></div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${mobileSidebarOpen ? 'active' : ''}`}>
        <div className="mobile-sidebar-header">
          <div className="logo">S Socialvi Ai</div>
          <button className="mobile-close-btn" onClick={closeMobileSidebar}>
            <X size={20} />
          </button>
        </div>
        <div className="mobile-sidebar-content">
          <div className="mobile-sidebar-nav">
            {sidebarNavItems.map((item) => (
              <div
                key={item.text}
                className={`sidebar-item ${activeSidebarItem === item.text ? 'active' : ''}`}
                onClick={() => {
                  navigate(`/dashboard/${item.route}`);
                  closeMobileSidebar();
                }}
              >
                <div className="sidebar-item-icon">
                  <item.icon size={20} />
                </div>
                <span className="sidebar-item-text">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mobile-sidebar-bottom">
            <div className="sidebar-item">
              <div className="sidebar-item-icon">
                <HelpCircle size={20} />
              </div>
              <span className="sidebar-item-text">Faq</span>
            </div>
            <button className="sidebar-item-cta-button" id='cta-button'>✨ Upgrade to Pro</button>

            <div className="theme-toggle">
              <div
                className={`sidebar-item ${theme === 'light' ? 'theme-active' : ''}`}
                onClick={() => toggleTheme('light')}
              >
                <div className="sidebar-item-icon">
                  <Sun size={16} />
                </div>
              </div>
              <div
                className={`sidebar-item ${theme === 'dark' ? 'theme-active' : ''}`}
                onClick={() => toggleTheme('dark')}
              >
                <div className="sidebar-item-icon">
                  <Moon size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        {/* Top Navigation */}
        <div className="top-nav fade-in">
          <div className="nav-left">
            <button className="mobile-menu-btn" onClick={openMobileSidebar}>
              <Menu size={20} />
            </button>
            <div className="logo">Λ</div>
            <div className="nav-tabs">
              {topNavTabs.map((tab) => (
                <div
                  key={tab.text}
                  className={`nav-tab ${activeTab === tab.text ? 'active' : ''}`}
                  onClick={() => navigate(tab.route)}
                >
                  <tab.icon size={18} />
                  {tab.text}
                </div>
              ))}
            </div>
          </div>
          <div className="nav-right">
            {/* Notifications */}
            <button className="cta-button">✨ Upgrade to Pro</button>

            <div className="nav-icon">
              <Bell size={20} />
              <div className="notification-badge"></div>
            </div>

            <div className="nav-icon">
              <Mail size={20} />
            </div>

            {/* User Dropdown */}
            <div className={`user-dropdown ${showUserDropdown ? 'show' : ''}`}>
              <div
                className="user-avatar"
                onClick={() => setShowUserDropdown(!showUserDropdown)}
              >
                JD
              </div>
              {showUserDropdown && (
                <div className="dropdown-content">
                  <a onClick={() => handleDropdownItemClick('/dashboard/profile')}>
                    <User size={18} /> Profile
                  </a>
                  <a onClick={() => handleDropdownItemClick('/dashboard/settings')}>
                    <Settings size={18} /> Settings
                  </a>
                  <a href="#"><LogOut size={18} /> Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Main Area */}
        <div className="main-area">
          {/* Sidebar */}
          <div className={`sidebar fade-in ${sidebarExpanded ? 'expanded' : ''}`}>
            <div className="sidebar-header">
              <div className="sidebar-toggle" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            </div>
            <div className="sidebar-content">
              <div className="sidebar-nav">
                {sidebarNavItems.map((item) => (
                  <div
                    key={item.text}
                    className={`sidebar-item ${activeSidebarItem === item.text ? 'active' : ''}`}
                    onClick={() => navigate(`/dashboard/${item.route}`)}
                  >
                    <div className="sidebar-item-icon">
                      <item.icon size={20} />
                    </div>
                    <span className="sidebar-item-text">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="sidebar-bottom">
                {/* FAQ */}
                <div className="sidebar-item">
                  <div className="sidebar-item-icon">
                    <HelpCircle size={20} />
                  </div>
                  <span className="sidebar-item-text">Faq</span>
                </div>

                {/* Theme Toggle */}
                <div className="theme-toggle">
                  <div
                    className={`sidebar-item ${theme === 'light' ? 'theme-active' : ''}`}
                    onClick={() => toggleTheme('light')}
                  >
                    <div className="sidebar-item-icon">
                      <Sun size={16} />
                    </div>
                  </div>
                  <div
                    className={`sidebar-item ${theme === 'dark' ? 'theme-active' : ''}`}
                    onClick={() => toggleTheme('dark')}
                  >
                    <div className="sidebar-item-icon">
                      <Moon size={16} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Content Area */}
          <div className="content-area">
            <div className="main-content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="bottom-nav">
        {topNavTabs.map((tab) => (
          <div
            key={tab.text}
            className={`bottom-nav-item ${activeTab === tab.text ? 'active' : ''}`}
            onClick={() => navigate(tab.route)}
          >
            <tab.icon size={20} />
            {tab.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default UserDashboardLayout;
