import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import {
  Menu, X, Bell, Mail, User, LogOut, HelpCircle,
  Sun, Moon, LayoutDashboard, CreditCard, BarChart3,
  Target, Sparkles, Calendar, MessageSquare, Zap
} from 'lucide-react';

const UserDashboardLayout = () => {
  const [theme, setTheme] = useState('light');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [activeSidebarItem, setActiveSidebarItem] = useState('Audience Targeting');
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const savedState = localStorage.getItem('sidebarExpanded');
    if (savedState === 'true') {
      setSidebarExpanded(true);
    }
  }, []);

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

  const sidebarNavItems = [
    { icon: Target, text: 'Audience Targeting' },
    { icon: Sparkles, text: 'Generate content' },
    { icon: Calendar, text: 'Scheduling' },
    { icon: MessageSquare, text: 'Auto Dm' },
    { icon: Zap, text: 'Ai Advisor' },
  ];

  const topNavTabs = [
    { icon: LayoutDashboard, text: 'Dashboard' },
    { icon: CreditCard, text: 'Payments' },
    { icon: BarChart3, text: 'Analytics' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        :root {
          --primary: #1a1a1a;
          --primary-light: #374151;
          --primary-dark: #111827;
          --secondary: #6b7280;
          --success: #10b981;
          --warning: #f59e0b;
          --error: #ef4444;
          --background: #f5f6fa;
          --surface: #ffffff;
          --surface-hover: #f9fafb;
          --text-primary: #1a1a1a;
          --text-secondary: #6b7280;
          --border: #e5e7eb;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --sidebar-width-collapsed: 90px;
          --sidebar-width-expanded: 240px;
          --theme-active: #f97316;
          --theme-inactive: #6b7280;
        }

        [data-theme="dark"] {
          --background: #0f0f23;
          --surface: #1a1a2e;
          --surface-hover: #16213e;
          --text-primary: #ffffff;
          --text-secondary: #a1a1aa;
          --border: #27272a;
          --theme-active: #1a1a1a;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: var(--background);
          height: 100vh;
          overflow: hidden;
          color: var(--text-primary);
          line-height: 1.5;
          transition: all 0.3s ease;
        }

        .dashboard-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: relative;
        }

        /* Animated Background Elements */
        .bg-decoration {
          position: fixed;
          pointer-events: none;
          z-index: 0;
        }

        .bg-decoration::before {
          content: '';
          position: absolute;
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, rgba(26, 26, 26, 0.03), rgba(107, 114, 128, 0.02));
          border-radius: 50%;
          filter: blur(60px);
          animation: float 25s infinite ease-in-out;
        }

        .bg-decoration:nth-child(1) { top: 10%; left: 10%; }
        .bg-decoration:nth-child(2) { top: 60%; right: 10%; animation-delay: -12s; }
        .bg-decoration:nth-child(3) { bottom: 20%; left: 50%; animation-delay: -8s; }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(90deg); }
          50% { transform: translate(-15px, 15px) rotate(180deg); }
          75% { transform: translate(-20px, -10px) rotate(270deg); }
        }

        /* Top Navigation */
        .top-nav {
          height: 80px;
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 100;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition: padding-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .logo {
          font-size: 28px;
          font-weight: 800;
          color: var(--primary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .logo::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .logo:hover::after {
          width: 100%;
        }

        .nav-tabs {
          display: flex;
          gap: 8px;
          background: var(--background);
          padding: 6px;
          border-radius: 12px;
          border: 1px solid var(--border);
        }

        .nav-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .nav-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(26, 26, 26, 0.05), transparent);
          transition: left 0.5s;
        }

        .nav-tab:hover::before {
          left: 100%;
        }

        .nav-tab.active {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
          box-shadow: var(--shadow);
        }

        .nav-tab:hover:not(.active) {
          background: var(--surface-hover);
          color: var(--text-primary);
          transform: translateY(-1px);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .nav-icon {
          width: 24px;
          height: 24px;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-icon:hover {
          color: var(--primary);
          transform: scale(1.1);
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 8px;
          height: 8px;
          background: var(--error);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }

        .user-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: white;
          border: 3px solid var(--border);
        }

        .user-avatar:hover {
          transform: scale(1.05);
          box-shadow: var(--shadow-hover);
          border-color: var(--primary);
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          width: 40px;
          height: 40px;
          border: none;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 12px;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        /* Sidebar */
        .main-area {
          display: flex;
          flex: 1;
          overflow: hidden;
        }

        .sidebar {
          width: var(--sidebar-width-collapsed);
          background: var(--surface);
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 5;
        }

        .sidebar.expanded {
          width: var(--sidebar-width-expanded);
        }

        .sidebar-header {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 20px;
          border-bottom: 1px solid var(--border);
        }

        .sidebar-toggle {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--text-secondary);
          background: var(--background);
          border: 1px solid var(--border);
        }

        .sidebar-toggle:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          transform: scale(1.05);
        }

        .sidebar-toggle svg {
          transition: transform 0.3s ease;
        }

        .sidebar.expanded .sidebar-toggle svg {
          transform: rotate(180deg);
        }

        .sidebar-content {
          flex: 1;
          padding: 30px 0 0 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          padding: 0 20px;
          overflow: visible;
        }

        .sidebar-item {
          height: 48px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          color: var(--text-secondary);
          background: transparent;
          padding: 0 14px;
          overflow: hidden;
        }

        .sidebar-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 16px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .sidebar-item:hover::before,
        .sidebar-item.active::before {
          opacity: 1;
        }

        .sidebar-item:hover,
        .sidebar-item.active {
          color: white;
          transform: scale(1.02);
        }

        .sidebar-item-icon {
          position: relative;
          z-index: 2;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sidebar-item-icon svg {
          width: 20px;
          height: 20px;
        }

        .sidebar-item-text {
          position: relative;
          z-index: 2;
          margin-left: 16px;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.1s;
        }

        .sidebar.expanded .sidebar-item-text {
          opacity: 1;
          transform: translateX(0);
        }

        /* Collapsed state - center icons */
        .sidebar:not(.expanded) .sidebar-item {
          justify-content: center;
          padding: 0;
          width: 48px;
          margin: 0 auto;
        }

        .sidebar:not(.expanded) .sidebar-item-text {
          display: none;
        }

        .sidebar-bottom {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 20px;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2px;
          gap: 5px;
        }

        .sidebar.expanded .theme-toggle {
          flex-direction: row;
          justify-content: center;
        }

        .sidebar:not(.expanded) .theme-toggle {
          flex-direction: column;
          align-items: center;
        }

        .theme-toggle .sidebar-item {
          width: 32px;
          height: 32px;
          border-radius: 12px;
          margin: 0;
          padding: 0;
          justify-content: center;
          background: transparent;
        }

        .theme-toggle .sidebar-item::before {
          display: none;
        }

        .theme-toggle .sidebar-item.theme-active {
          color: var(--theme-active);
        }

        .theme-toggle .sidebar-item:not(.theme-active) {
          color: var(--theme-inactive);
        }

        .theme-toggle .sidebar-item:hover {
          transform: scale(1.1);
          color: var(--theme-active);
        }

        .theme-toggle .sidebar-item-icon svg {
          width: 16px;
          height: 16px;
        }

        /* Content Area */
        .content-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: var(--background);
          overflow: hidden;
          transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .main-content {
          flex: 1;
          padding: 40px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-size: 18px;
        }

        .main-content::-webkit-scrollbar {
          width: 6px;
        }

        .main-content::-webkit-scrollbar-track {
          background: transparent;
        }

        .main-content::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 3px;
        }

        /* Loading Animation */
        .loading-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          background: var(--primary);
          animation: loading 3s infinite;
          z-index: 100;
        }

        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }

        /* Smooth entrance animations */
        .fade-in {
          animation: fadeIn 0.6s ease forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* Mobile Sidebar Overlay */
        .mobile-sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 90;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-sidebar-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 280px;
          height: 100vh;
          background: var(--surface);
          border-right: 1px solid var(--border);
          z-index: 95;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          transform: translateX(-100%);
        }

        .mobile-sidebar.active {
          transform: translateX(0);
        }

        .mobile-sidebar-header {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          border-bottom: 1px solid var(--border);
        }

        .mobile-close-btn {
          width: 40px;
          height: 40px;
          border: none;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 12px;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-close-btn:hover {
          background: var(--error);
          color: white;
          border-color: var(--error);
        }

        .mobile-sidebar-content {
          flex: 1;
          padding: 30px 0 0 0;
          display: flex;
          flex-direction: column;
        }

        .mobile-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          padding: 0 20px;
        }

        .mobile-sidebar-nav .sidebar-item {
          padding: 0 14px;
          width: auto;
          margin: 0;
          justify-content: flex-start;
        }

        .mobile-sidebar-nav .sidebar-item-text {
          opacity: 1;
          transform: translateX(0);
          margin-left: 16px;
        }

        .mobile-sidebar-bottom {
          margin-top: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .mobile-sidebar-bottom .theme-toggle {
          flex-direction: row;
          justify-content: center;
        }

        /* Bottom Navigation for Mobile */
        .bottom-nav {
          display: none;
          height: 80px;
          background: var(--surface);
          border-top: 1px solid var(--border);
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 20;
          padding: 0 20px;
          justify-content: space-around;
          align-items: center;
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 12px;
          transition: all 0.3s ease;
          color: var(--text-secondary);
          font-size: 12px;
          font-weight: 500;
          min-width: 60px;
        }

        .bottom-nav-item.active {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
        }

        .bottom-nav-item:hover:not(.active) {
          background: var(--surface-hover);
          color: var(--text-primary);
        }

        .bottom-nav-item svg {
          width: 20px;
          height: 20px;
        }

        .user-dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          top: 110%;
          right: 0;
          background: var(--surface);
          min-width: 180px;
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: var(--shadow-lg);
          z-index: 1;
          overflow: hidden;
        }

        .dropdown-content a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          text-decoration: none;
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .dropdown-content a:hover {
          background: var(--surface-hover);
        }

        .user-dropdown.show .dropdown-content {
          display: block;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .top-nav {
            padding: 0 20px;
          }

          .nav-left {
            gap: 20px;
          }

          .nav-tabs {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .sidebar {
            display: none;
          }

          .main-area {
            padding-bottom: 80px;
          }

          .bottom-nav {
            display: flex;
          }

          .main-content {
            padding: 20px;
          }
        }
      `}</style>

      {/* Background Decorations */}
      <div className="bg-decoration"></div>
      <div className="bg-decoration"></div>
      <div className="bg-decoration"></div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`mobile-sidebar-overlay ${mobileSidebarOpen ? 'active' : ''}`}
        onClick={closeMobileSidebar}
      ></div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${mobileSidebarOpen ? 'active' : ''}`}>
        <div className="mobile-sidebar-header">
          <div className="logo">Λ</div>
          <button className="mobile-close-btn" onClick={closeMobileSidebar}>
            <X size={20} />
          </button>
        </div>

        <div className="mobile-sidebar-content">
          <div className="mobile-sidebar-nav">
            {sidebarNavItems.map((item) => (
              <div
              key={item.text}
              className={`sidebar-item ${location.pathname.includes(item.route) ? 'active' : ''}`}
              onClick={() => navigate(`/dashboard/${item.route}`)}
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
        {/* Loading Bar */}
        <div className="loading-bar"></div>

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
                  onClick={() => setActiveTab(tab.text)}
                >
                  <tab.icon size={18} />
                  {tab.text}
                </div>
              ))}
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-icon">
              <Bell size={20} />
              <div className="notification-badge"></div>
            </div>
            <div className="nav-icon">
              <Mail size={20} />
            </div>
            <div className={`user-dropdown ${showUserDropdown ? 'show' : ''}`}>
              <div
                className="user-avatar"
                onClick={() => setShowUserDropdown(!showUserDropdown)}
              >
                JD
              </div>
              <div className="dropdown-content">
                <a href="#">
                  <User size={18} />
                  Profile
                </a>
                <a href="#">
                  <LogOut size={18} />
                  Logout
                </a>
              </div>
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
                    onClick={() => setActiveSidebarItem(item.text)}
                  >
                    <div className="sidebar-item-icon">
                      <item.icon size={20} />
                    </div>
                    <span className="sidebar-item-text">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="sidebar-bottom">
                <div className="sidebar-item">
                  <div className="sidebar-item-icon">
                    <HelpCircle size={20} />
                  </div>
                  <span className="sidebar-item-text">Faq</span>
                </div>

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
              {/* Empty main content area */}
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
            onClick={() => setActiveTab(tab.text)}
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
