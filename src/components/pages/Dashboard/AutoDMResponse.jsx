import { useState } from 'react';

export default function AutoDMResponse() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoResponseActive, setIsAutoResponseActive] = useState(true);
  const [isSettingsAutoResponseActive, setIsSettingsAutoResponseActive] = useState(true);
  const [confidenceThreshold, setConfidenceThreshold] = useState(85);

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '30px',
    },
    headerContent: {
      flex: 1,
    },
    headerContentH1: {
      fontSize: '32px',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#1d1d1f',
    },
    headerContentP: {
      fontSize: '16px',
      color: '#6e6e73',
    },
    configureBtn: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '15px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
    statusCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '30px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    statusLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    statusIcon: {
      width: '52px',
      height: '52px',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
    },
    statusTextH3: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '4px',
    },
    statusTextP: {
      fontSize: '14px',
      color: '#6e6e73',
    },
    toggleSwitch: {
      position: 'relative',
      width: '50px',
      height: '28px',
      backgroundColor: '#1d1d1f',
      borderRadius: '14px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginBottom: '30px',
    },
    statCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
    statHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '12px',
    },
    statIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
    },
    statIconBlue: {
      backgroundColor: '#e3f2fd',
      color: '#2196f3',
    },
    statIconGreen: {
      backgroundColor: '#e8f5e9',
      color: '#4caf50',
    },
    statIconPurple: {
      backgroundColor: '#f3e5f5',
      color: '#9c27b0',
    },
    statIconOrange: {
      backgroundColor: '#fff3e0',
      color: '#ff9800',
    },
    statLabel: {
      fontSize: '14px',
      color: '#6e6e73',
    },
    statValue: {
      fontSize: '32px',
      fontWeight: '600',
      color: '#1d1d1f',
    },
    tabs: {
      display: 'flex',
      gap: '8px',
      marginBottom: '30px',
      borderBottom: '1px solid #e5e5e7',
    },
    tab: {
      padding: '12px 20px',
      background: 'none',
      border: 'none',
      fontSize: '15px',
      fontWeight: '500',
      color: '#6e6e73',
      cursor: 'pointer',
      borderBottom: '2px solid transparent',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    tabActive: {
      color: '#1d1d1f',
      borderBottomColor: '#1d1d1f',
    },
    tabContent: {
      display: 'none',
    },
    tabContentActive: {
      display: 'block',
    },
    conversationsLayout: {
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      gap: '20px',
      background: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      height: '600px',
    },
    conversationsSidebar: {
      background: '#fafafa',
      borderRight: '1px solid #e5e5e7',
      display: 'flex',
      flexDirection: 'column',
    },
    searchBox: {
      padding: '16px',
      borderBottom: '1px solid #e5e5e7',
    },
    searchInput: {
      width: '100%',
      padding: '10px 16px 10px 40px',
      border: '1px solid #e5e5e7',
      borderRadius: '8px',
      fontSize: '14px',
      backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236e6e73\' stroke-width=\'2\'><circle cx=\'11\' cy=\'11\' r=\'8\'/><path d=\'m21 21-4.35-4.35\'/></svg>")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '12px center',
      backgroundColor: 'white',
    },
    conversationList: {
      flex: 1,
      overflowY: 'auto',
    },
    conversationItem: {
      padding: '16px',
      borderBottom: '1px solid #e5e5e7',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      backgroundColor: '#fafafa',
    },
    conversationItemActive: {
      backgroundColor: 'white',
    },
    conversationHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '8px',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '14px',
      color: 'white',
      flexShrink: 0,
    },
    conversationInfo: {
      flex: 1,
      minWidth: 0,
    },
    conversationName: {
      fontWeight: '600',
      fontSize: '14px',
      marginBottom: '2px',
    },
    conversationTime: {
      fontSize: '12px',
      color: '#6e6e73',
    },
    conversationMessage: {
      fontSize: '14px',
      color: '#6e6e73',
      marginBottom: '8px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    conversationMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    platformBadge: {
      fontSize: '11px',
      fontWeight: '600',
      padding: '2px 8px',
      borderRadius: '4px',
      backgroundColor: '#ffe0f0',
      color: '#e4405f',
    },
    platformBadgeTwitter: {
      backgroundColor: '#e3f2fd',
      color: '#1da1f2',
    },
    platformBadgeFacebook: {
      backgroundColor: '#e3f2fd',
      color: '#1877f2',
    },
    platformBadgeLinkedin: {
      backgroundColor: '#e3f2fd',
      color: '#0a66c2',
    },
    autoBadge: {
      fontSize: '11px',
      padding: '2px 8px',
      borderRadius: '4px',
      backgroundColor: '#f5f5f7',
      color: '#6e6e73',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    unreadBadge: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: '#8b5cf6',
      color: 'white',
      fontSize: '11px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chatArea: {
      display: 'flex',
      flexDirection: 'column',
      background: 'white',
    },
    chatHeader: {
      padding: '20px 24px',
      borderBottom: '1px solid #e5e5e7',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    chatHeaderLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    chatHeaderInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    chatHeaderInfoH3: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '2px',
    },
    chatStatus: {
      fontSize: '13px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    statusIndicator: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#4caf50',
    },
    chatMessages: {
      flex: 1,
      padding: '24px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    message: {
      display: 'flex',
      gap: '12px',
      maxWidth: '80%',
    },
    messageSent: {
      marginLeft: 'auto',
      flexDirection: 'row-reverse',
    },
    messageAvatar: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '14px',
      color: 'white',
    },
    messageContent: {
      flex: 1,
    },
    messageBubble: {
      padding: '12px 16px',
      borderRadius: '12px',
      fontSize: '14px',
      lineHeight: '1.5',
    },
    messageBubbleReceived: {
      backgroundColor: '#f5f5f7',
      color: '#1d1d1f',
      borderBottomLeftRadius: '4px',
    },
    messageBubbleSent: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      color: 'white',
      borderBottomRightRadius: '4px',
    },
    messageTime: {
      fontSize: '12px',
      color: '#6e6e73',
      marginTop: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    messageTimeSent: {
      justifyContent: 'flex-end',
    },
    aiResponseLabel: {
      backgroundColor: '#f5f5f7',
      color: '#6e6e73',
      fontSize: '11px',
      fontWeight: '600',
      padding: '2px 8px',
      borderRadius: '4px',
    },
    moreMenu: {
      background: 'none',
      border: 'none',
      fontSize: '20px',
      color: '#6e6e73',
      cursor: 'pointer',
      padding: '4px 8px',
    },
    templatesSection: {
      background: 'white',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
    templatesHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '24px',
    },
    templatesHeaderContent: {
      flex: 1,
    },
    templatesHeaderH2: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '8px',
    },
    templatesHeaderP: {
      fontSize: '14px',
      color: '#6e6e73',
    },
    newTemplateBtn: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
    templateFilters: {
      display: 'flex',
      gap: '12px',
      marginBottom: '24px',
    },
    filterBtn: {
      padding: '8px 16px',
      border: '1px solid #e5e5e7',
      background: 'white',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      color: '#6e6e73',
      transition: 'all 0.2s',
    },
    filterBtnActive: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      color: 'white',
      borderColor: 'transparent',
    },
    templateCard: {
      border: '1px solid #e5e5e7',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '16px',
      transition: 'all 0.2s',
    },
    templateCardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px',
    },
    templateTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    templateTitleH3: {
      fontSize: '16px',
      fontWeight: '600',
    },
    templateBadge: {
      fontSize: '11px',
      fontWeight: '600',
      padding: '4px 8px',
      borderRadius: '6px',
    },
    templateBadgeGreeting: {
      backgroundColor: '#f3e5f5',
      color: '#9c27b0',
    },
    templateBadgeSales: {
      backgroundColor: '#e8f5e9',
      color: '#4caf50',
    },
    templateBadgeActive: {
      backgroundColor: '#e8f5e9',
      color: '#4caf50',
    },
    editBtn: {
      background: 'none',
      border: 'none',
      fontSize: '18px',
      color: '#6e6e73',
      cursor: 'pointer',
      padding: '4px 8px',
    },
    templateTrigger: {
      fontSize: '13px',
      color: '#6e6e73',
      marginBottom: '12px',
    },
    templateTriggerStrong: {
      color: '#1d1d1f',
      fontWeight: '600',
    },
    templateMessage: {
      backgroundColor: '#fafafa',
      padding: '16px',
      borderRadius: '8px',
      fontSize: '14px',
      lineHeight: '1.6',
      marginBottom: '12px',
    },
    templateFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '13px',
      color: '#6e6e73',
    },
    viewAnalytics: {
      color: '#8b5cf6',
      textDecoration: 'none',
      fontWeight: '500',
      cursor: 'pointer',
    },
    settingsSection: {
      background: 'white',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
    settingsGroup: {
      marginBottom: '40px',
    },
    settingsGroupHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px',
      paddingBottom: '16px',
      borderBottom: '1px solid #e5e5e7',
    },
    settingsIcon: {
      width: '32px',
      height: '32px',
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
    },
    settingsGroupHeaderContent: {
      display: 'flex',
      flexDirection: 'column',
    },
    settingsGroupHeaderH3: {
      fontSize: '18px',
      fontWeight: '600',
    },
    settingsGroupHeaderP: {
      fontSize: '14px',
      color: '#6e6e73',
      marginTop: '4px',
    },
    settingItem: {
      padding: '20px 0',
      borderBottom: '1px solid #f5f5f7',
    },
    settingItemLast: {
      borderBottom: 'none',
    },
    settingRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
    },
    settingLabel: {
      fontWeight: '600',
      fontSize: '15px',
      marginBottom: '4px',
    },
    settingDescription: {
      fontSize: '14px',
      color: '#6e6e73',
    },
    dropdown: {
      width: '100%',
      maxWidth: '400px',
      padding: '10px 16px',
      border: '1px solid #e5e5e7',
      borderRadius: '8px',
      fontSize: '14px',
      background: 'white',
      cursor: 'pointer',
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'><path fill=\'%236e6e73\' d=\'M6 9L1 4h10z\'/></svg>")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      paddingRight: '36px',
    },
    sliderContainer: {
      width: '100%',
    },
    sliderHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
    },
    sliderValue: {
      fontWeight: '600',
      color: '#8b5cf6',
    },
    slider: {
      width: '100%',
      height: '6px',
      borderRadius: '3px',
      background: '#e5e5e7',
      outline: 'none',
      cursor: 'pointer',
      WebkitAppearance: 'none',
      appearance: 'none',
    },
    sliderNote: {
      fontSize: '13px',
      color: '#6e6e73',
      marginTop: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerContentH1}>Auto DM Response</h1>
          <p style={styles.headerContentP}>Automatically respond to direct messages across all platforms with AI-powered replies</p>
        </div>
        <button style={styles.configureBtn}>⚙ Configure AI</button>
      </div>

      <div style={styles.statusCard}>
        <div style={styles.statusLeft}>
          <div style={styles.statusIcon}>🤖</div>
          <div>
            <h3 style={styles.statusTextH3}>Auto DM Response Active</h3>
            <p style={styles.statusTextP}>AI is currently responding to messages automatically with 95% accuracy</p>
          </div>
        </div>
        <div
          style={{
            ...styles.toggleSwitch,
            ...(isAutoResponseActive ? { backgroundColor: '#34d399' } : {}),
          }}
          onClick={() => setIsAutoResponseActive(!isAutoResponseActive)}
        >
          <div style={{
            position: 'absolute',
            width: '24px',
            height: '24px',
            background: 'white',
            borderRadius: '50%',
            top: '2px',
            right: isAutoResponseActive ? '2px' : 'auto',
            left: isAutoResponseActive ? 'auto' : '2px',
            transition: 'all 0.3s',
          }}></div>
        </div>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <div style={{ ...styles.statIcon, ...styles.statIconBlue }}>💬</div>
            <span style={styles.statLabel}>Messages Today</span>
          </div>
          <div style={styles.statValue}>127</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <div style={{ ...styles.statIcon, ...styles.statIconGreen }}>⚡</div>
            <span style={styles.statLabel}>Auto Responded</span>
          </div>
          <div style={styles.statValue}>98</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <div style={{ ...styles.statIcon, ...styles.statIconPurple }}>🕐</div>
            <span style={styles.statLabel}>Avg Response Time</span>
          </div>
          <div style={styles.statValue}>45s</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <div style={{ ...styles.statIcon, ...styles.statIconOrange }}>📈</div>
            <span style={styles.statLabel}>Satisfaction Rate</span>
          </div>
          <div style={styles.statValue}>95%</div>
        </div>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 0 ? styles.tabActive : {}),
          }}
          onClick={() => setActiveTab(0)}
        >
          <span>💬</span> Conversations
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 1 ? styles.tabActive : {}),
          }}
          onClick={() => setActiveTab(1)}
        >
          <span>��</span> Response Templates
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 2 ? styles.tabActive : {}),
          }}
          onClick={() => setActiveTab(2)}
        >
          <span>⚙</span> AI Settings
        </button>
      </div>

      <div style={activeTab === 0 ? styles.tabContentActive : styles.tabContent}>
        <div style={styles.conversationsLayout}>
          <div style={styles.conversationsSidebar}>
            <div style={styles.searchBox}>
              <input type="text" style={styles.searchInput} placeholder="Search conversations..." />
            </div>
            <div style={styles.conversationList}>
              <div style={{ ...styles.conversationItem, ...styles.conversationItemActive }}>
                <div style={styles.conversationHeader}>
                  <div style={{ ...styles.avatar, background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)' }}>SJ</div>
                  <div style={styles.conversationInfo}>
                    <div style={styles.conversationName}>Sarah Johnson</div>
                    <div style={styles.conversationTime}>2 min ago</div>
                  </div>
                </div>
                <div style={styles.conversationMessage}>Thanks for the quick response!</div>
                <div style={styles.conversationMeta}>
                  <span style={styles.platformBadge}>Instagram</span>
                  <span style={styles.autoBadge}>🤖 Auto</span>
                </div>
              </div>

              <div style={styles.conversationItem}>
                <div style={styles.conversationHeader}>
                  <div style={{ ...styles.avatar, background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)' }}>MC</div>
                  <div style={styles.conversationInfo}>
                    <div style={styles.conversationName}>Mike Chen</div>
                    <div style={styles.conversationTime}>5 min ago</div>
                  </div>
                </div>
                <div style={styles.conversationMessage}>Is this product available in blue?</div>
                <div style={styles.conversationMeta}>
                  <span style={{ ...styles.platformBadge, ...styles.platformBadgeTwitter }}>Twitter</span>
                  <span style={styles.unreadBadge}>1</span>
                </div>
              </div>

              <div style={styles.conversationItem}>
                <div style={styles.conversationHeader}>
                  <div style={{ ...styles.avatar, background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)' }}>EW</div>
                  <div style={styles.conversationInfo}>
                    <div style={styles.conversationName}>Emma Wilson</div>
                    <div style={styles.conversationTime}>12 min ago</div>
                  </div>
                </div>
                <div style={styles.conversationMessage}>Perfect, exactly what I needed!</div>
                <div style={styles.conversationMeta}>
                  <span style={{ ...styles.platformBadge, ...styles.platformBadgeFacebook }}>Facebook</span>
                  <span style={styles.autoBadge}>🤖 Auto</span>
                </div>
              </div>

              <div style={styles.conversationItem}>
                <div style={styles.conversationHeader}>
                  <div style={{ ...styles.avatar, background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)' }}>AR</div>
                  <div style={styles.conversationInfo}>
                    <div style={styles.conversationName}>Alex Rodriguez</div>
                    <div style={styles.conversationTime}>23 min ago</div>
                  </div>
                </div>
                <div style={styles.conversationMessage}>Can you tell me more about pricing?</div>
                <div style={styles.conversationMeta}>
                  <span style={{ ...styles.platformBadge, ...styles.platformBadgeLinkedin }}>LinkedIn</span>
                  <span style={styles.unreadBadge}>2</span>
                </div>
              </div>

              <div style={styles.conversationItem}>
                <div style={styles.conversationHeader}>
                  <div style={{ ...styles.avatar, background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)' }}>JB</div>
                  <div style={styles.conversationInfo}>
                    <div style={styles.conversationName}>John Brown</div>
                    <div style={styles.conversationTime}>1 hr ago</div>
                  </div>
                </div>
                <div style={styles.conversationMessage}>Great service, thank you!</div>
                <div style={styles.conversationMeta}>
                  <span style={styles.platformBadge}>Instagram</span>
                  <span style={styles.autoBadge}>🤖 Auto</span>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.chatArea}>
            <div style={styles.chatHeader}>
              <div style={styles.chatHeaderLeft}>
                <div style={{ ...styles.avatar, background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)' }}>SJ</div>
                <div style={styles.chatHeaderInfo}>
                  <h3 style={styles.chatHeaderInfoH3}>Sarah Johnson</h3>
                  <div style={styles.chatStatus}>
                    <span style={styles.platformBadge}>Instagram</span>
                    <span style={styles.statusIndicator}></span>
                    <span>Active now</span>
                  </div>
                </div>
              </div>
              <button style={styles.moreMenu}>⋮</button>
            </div>

            <div style={styles.chatMessages}>
              <div style={styles.message}>
                <div style={{ ...styles.messageAvatar, background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)' }}>SJ</div>
                <div style={styles.messageContent}>
                  <div style={{ ...styles.messageBubble, ...styles.messageBubbleReceived }}>Hi! I'm interested in your product. Can you tell me more about it?</div>
                  <div style={styles.messageTime}>
                    <span>👤</span>
                    10:30 AM
                  </div>
                </div>
              </div>

              <div style={{ ...styles.message, ...styles.messageSent }}>
                <div style={{ ...styles.messageAvatar, background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' }}>🤖</div>
                <div style={styles.messageContent}>
                  <div style={{ ...styles.messageBubble, ...styles.messageBubbleSent }}>Hello! Thank you for your interest. Our product is designed to help businesses streamline their social media management with AI-powered features. What specific aspect would you like to know more about?</div>
                  <div style={{ ...styles.messageTime, ...styles.messageTimeSent }}>
                    10:30 AM
                    <span style={styles.aiResponseLabel}>AI Response</span>
                  </div>
                </div>
              </div>

              <div style={styles.message}>
                <div style={{ ...styles.messageAvatar, background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)' }}>SJ</div>
                <div style={styles.messageContent}>
                  <div style={{ ...styles.messageBubble, ...styles.messageBubbleReceived }}>How much does it cost?</div>
                  <div style={styles.messageTime}>
                    <span>👤</span>
                    10:32 AM
                  </div>
                </div>
              </div>

              <div style={{ ...styles.message, ...styles.messageSent }}>
                <div style={{ ...styles.messageAvatar, background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' }}>🤖</div>
                <div style={styles.messageContent}>
                  <div style={{ ...styles.messageBubble, ...styles.messageBubbleSent }}>
                    We offer three pricing tiers:<br /><br />
                    • Starter: $29/month - Perfect for individuals<br />
                    • Professional: $79/month - For growing teams<br />
                    • Enterprise: Custom pricing - For large organizations<br /><br />
                    All plans include a 14-day free trial. Would you like to start with a trial?
                  </div>
                  <div style={{ ...styles.messageTime, ...styles.messageTimeSent }}>
                    10:32 AM
                    <span style={styles.aiResponseLabel}>AI Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={activeTab === 1 ? styles.tabContentActive : styles.tabContent}>
        <div style={styles.templatesSection}>
          <div style={styles.templatesHeader}>
            <div style={styles.templatesHeaderContent}>
              <h2 style={styles.templatesHeaderH2}>Response Templates</h2>
              <p style={styles.templatesHeaderP}>Create and manage automated response templates for common inquiries</p>
            </div>
            <button style={styles.newTemplateBtn}>+ New Template</button>
          </div>

          <div style={styles.templateFilters}>
            <button style={{ ...styles.filterBtn, ...styles.filterBtnActive }}>All</button>
            <button style={styles.filterBtn}>Greeting</button>
            <button style={styles.filterBtn}>Sales</button>
            <button style={styles.filterBtn}>Support</button>
            <button style={styles.filterBtn}>Follow-up</button>
          </div>

          <div style={styles.templateCard}>
            <div style={styles.templateCardHeader}>
              <div style={styles.templateTitle}>
                <h3 style={styles.templateTitleH3}>Welcome Message</h3>
                <span style={{ ...styles.templateBadge, ...styles.templateBadgeGreeting }}>Greeting</span>
                <span style={{ ...styles.templateBadge, ...styles.templateBadgeActive }}>Active</span>
              </div>
              <button style={styles.editBtn}>✏️</button>
            </div>
            <div style={styles.templateTrigger}>
              <strong style={styles.templateTriggerStrong}>Trigger:</strong> First message from new user
            </div>
            <div style={styles.templateMessage}>
              Hi {'{'} name {'}'} 👋 Thanks for reaching out. How can we help you today?
            </div>
            <div style={styles.templateFooter}>
              <span>Used 145 times</span>
              <a href="#" style={styles.viewAnalytics}>View Analytics</a>
            </div>
          </div>

          <div style={styles.templateCard}>
            <div style={styles.templateCardHeader}>
              <div style={styles.templateTitle}>
                <h3 style={styles.templateTitleH3}>Pricing Inquiry</h3>
                <span style={{ ...styles.templateBadge, ...styles.templateBadgeSales }}>Sales</span>
                <span style={{ ...styles.templateBadge, ...styles.templateBadgeActive }}>Active</span>
              </div>
              <button style={styles.editBtn}>✏️</button>
            </div>
            <div style={styles.templateTrigger}>
              <strong style={styles.templateTriggerStrong}>Trigger:</strong> Keywords: price, cost, pricing, how much
            </div>
            <div style={styles.templateMessage}>
              We offer three pricing tiers:<br />
              • Starter: $29/month - Perfect for individuals<br />
              • Professional: $79/month - For growing teams<br />
              • Enterprise: Custom pricing - For large organizations<br /><br />
              All plans include a 14-day free trial. Would you like to start with a trial?
            </div>
            <div style={styles.templateFooter}>
              <span>Used 89 times</span>
              <a href="#" style={styles.viewAnalytics}>View Analytics</a>
            </div>
          </div>
        </div>
      </div>

      <div style={activeTab === 2 ? styles.tabContentActive : styles.tabContent}>
        <div style={styles.settingsSection}>
          <div style={styles.settingsGroup}>
            <div style={styles.settingsGroupHeader}>
              <div style={styles.settingsIcon}>🤖</div>
              <div style={styles.settingsGroupHeaderContent}>
                <h3 style={styles.settingsGroupHeaderH3}>AI Response Behavior</h3>
                <p style={styles.settingsGroupHeaderP}>Configure how the AI responds to messages</p>
              </div>
            </div>

            <div style={styles.settingItem}>
              <div style={styles.settingRow}>
                <div>
                  <div style={styles.settingLabel}>Enable Auto-Response</div>
                  <div style={styles.settingDescription}>Automatically respond to incoming messages</div>
                </div>
                <div
                  style={{
                    ...styles.toggleSwitch,
                    ...(isSettingsAutoResponseActive ? { backgroundColor: '#34d399' } : {}),
                  }}
                  onClick={() => setIsSettingsAutoResponseActive(!isSettingsAutoResponseActive)}
                >
                  <div style={{
                    position: 'absolute',
                    width: '24px',
                    height: '24px',
                    background: 'white',
                    borderRadius: '50%',
                    top: '2px',
                    right: isSettingsAutoResponseActive ? '2px' : 'auto',
                    left: isSettingsAutoResponseActive ? 'auto' : '2px',
                    transition: 'all 0.3s',
                  }}></div>
                </div>
              </div>
            </div>

            <div style={styles.settingItem}>
              <div style={styles.settingLabel}>Response Tone</div>
              <select style={styles.dropdown}>
                <option>Friendly</option>
                <option>Professional</option>
                <option>Casual</option>
                <option>Formal</option>
              </select>
            </div>

            <div style={styles.settingItem}>
              <div style={styles.settingLabel}>Response Length</div>
              <select style={styles.dropdown}>
                <option>Short (1 sentence)</option>
                <option>Medium (2-4 sentences)</option>
                <option>Long (5+ sentences)</option>
              </select>
            </div>

            <div style={styles.settingItem}>
              <div style={styles.sliderContainer}>
                <div style={styles.sliderHeader}>
                  <div style={styles.settingLabel}>AI Confidence Threshold</div>
                  <div style={styles.sliderValue}>{confidenceThreshold}%</div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={confidenceThreshold}
                  style={styles.slider}
                  onChange={(e) => setConfidenceThreshold(e.target.value)}
                />
                <div style={styles.sliderNote}>Only auto-respond when AI is at least this confident</div>
              </div>
            </div>
          </div>

          <div style={styles.settingsGroup}>
            <div style={{ ...styles.settingsGroupHeader }}>
              <div style={{ ...styles.settingsIcon, background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)' }}>🕐</div>
              <div style={styles.settingsGroupHeaderContent}>
                <h3 style={styles.settingsGroupHeaderH3}>Timing & Delays</h3>
                <p style={styles.settingsGroupHeaderP}>Control when and how fast the AI responds</p>
              </div>
            </div>

            <div style={styles.settingItem}>
              <div style={styles.settingLabel}>Response Delay</div>
              <select style={styles.dropdown}>
                <option>Instant</option>
                <option>2-5 seconds</option>
                <option>5-10 seconds</option>
                <option>10-30 seconds</option>
              </select>
              <div style={{ ...styles.settingDescription, marginTop: '8px' }}>Add a natural delay before responding</div>
            </div>

            <div style={styles.settingItem}>
              <div style={styles.settingLabel}>Active Hours</div>
              <select style={styles.dropdown}>
                <option>24/7</option>
                <option>Business Hours (9am - 5pm)</option>
                <option>Custom Schedule</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
