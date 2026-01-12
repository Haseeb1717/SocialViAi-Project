import { useState } from 'react';

function Profile() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      <style>{`
        .container {
            max-width:1200px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin-top: 30px;
        }

        .gradient-header {
            height: 80px;
            background:   radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.1) 0%, transparent 50%);
        }

        .profile-header {
            padding: 0 40px;
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 40px;
        }

        .profile-info {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .profile-photo {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 4px solid white;
            object-fit: cover;
            background: #ddd;
        }

        .profile-details h2 {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 4px;
        }

        .profile-details p {
            font-size: 14px;
            color: #666;
        }

        .edit-btn {
            background:linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%);
            color: white;
            border: none;
            padding: 10px 28px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s;
        }

        .edit-btn:hover {
            background: #2563eb;
        }

        .tabs-container {
            display: flex;
            border-bottom: 2px solid #e5e5e5;
            background: #fafafa;
            padding: 0 40px;
        }

        .tab-button {
            padding: 16px 24px;
            border: none;
            background: transparent;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            color: #666;
            transition: all 0.2s;
            border-bottom: 3px solid transparent;
            margin-bottom: -2px;
            position: relative;
        }

        .tab-button:hover {
            color: #1a1a1a;
        }

        .tab-button.active {
            color: #3b82f6;
            border-bottom-color: #3b82f6;
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .form-section {
            padding: 0 40px 40px;
            margin-top:50px;
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            margin-bottom: 40px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-group label {
            font-size: 14px;
            font-weight: 500;
            color: #1a1a1a;
            margin-bottom: 8px;
        }

        .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
        }

        .input-icon {
            position: absolute;
            left: 14px;
            color: #999;
            font-size: 16px;
            pointer-events: none;
        }

        .form-group input,
        .form-group select {
            width: 100%;
            padding: 12px 120px;
            padding-left: 40px;
            border: 1px solid #e5e5e5;
            border-radius: 8px;
            font-size: 14px;
            color: #1a1a1a;
            background: #fafafa;
            transition: all 0.2s;
            appearance: none;
        }

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #3b82f6;
            background: white;
        }

        .form-group input::placeholder {
            color: #bbb;
        }

        .form-group select {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 14px center;
            padding-right: 40px;
            cursor: pointer;
        }

        .email-section {
            border-top: 1px solid #f0f0f0;
            padding-top: 32px;
        }

        .email-section h3 {
            font-size: 16px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 20px;
        }

        .email-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px;
            background: #fafafa;
            border-radius: 8px;
            margin-bottom: 16px;
        }

        .email-icon {
            width: 40px;
            height: 40px;
            background: #3b82f6;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .email-icon svg {
            width: 20px;
            height: 20px;
            fill: white;
        }

        .email-content {
            flex: 1;
        }

        .email-content .email-address {
            font-size: 14px;
            font-weight: 500;
            color: #1a1a1a;
            margin-bottom: 2px;
        }

        .email-content .email-time {
            font-size: 13px;
            color: #999;
        }

        .add-email-btn {
            display: inline-block;
            color: #3b82f6;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            padding: 12px 16px;
            background: #f0f7ff;
            border-radius: 8px;
            transition: background 0.2s;
        }

        .add-email-btn:hover {
            background: #e0f0ff;
        }

        .settings-group {
            margin-bottom: 32px;
        }

        .settings-group h3 {
            font-size: 16px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 16px;
        }

        .settings-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            background: #fafafa;
            border-radius: 8px;
            margin-bottom: 12px;
        }

        .settings-item-content {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .settings-item-title {
            font-size: 14px;
            font-weight: 500;
            color: #1a1a1a;
        }

        .settings-item-desc {
            font-size: 13px;
            color: #999;
        }

        .toggle-switch {
            position: relative;
            width: 48px;
            height: 28px;
            background: #d1d5db;
            border-radius: 14px;
            cursor: pointer;
            transition: background 0.2s;
            border: none;
            padding: 0;
        }

        .toggle-switch.active {
            background: #3b82f6;
        }

        .toggle-switch::after {
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            background: white;
            border-radius: 50%;
            top: 2px;
            left: 2px;
            transition: left 0.2s;
        }

        .toggle-switch.active::after {
            left: 22px;
        }

        @media (max-width: 768px) {
            .form-grid {
                grid-template-columns: 1fr;
            }

            .profile-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
            }

            .container {
                margin: 0;
            }

            .form-section,
            .profile-header,
            .tabs-container {
                padding: 0 20px 20px;
            }

            .tabs-container {
                padding: 0;
            }
        }
      `}</style>

      <div className="container">
        <div className="gradient-header"></div>

        <div className="profile-header">
          <div className="profile-info">
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Profile Photo" className="profile-photo" />
            <div className="profile-details">
              <h2>Alexa Rawles</h2>
              <p>alexarawles@gmail.com</p>
            </div>
          </div>
          <button className="edit-btn">Edit</button>
        </div>

        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        <div className={`tab-content ${activeTab === 'profile' ? 'active' : ''}`}>
          <div className="form-section">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input type="text" id="fullname" placeholder="Your First Name" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="nickname">Nick Name</label>
                <div className="input-wrapper">
                  <span className="input-icon">✏️</span>
                  <input type="text" id="nickname" placeholder="Your First Name" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <div className="input-wrapper">
                  <span className="input-icon">⚥</span>
                  <select id="gender">
                    <option value="">Your First Name</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="country">Country</label>
                <div className="input-wrapper">
                  <span className="input-icon">🌍</span>
                  <select id="country">
                    <option value="">Your First Name</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="language">Language</label>
                <div className="input-wrapper">
                  <span className="input-icon">🗣️</span>
                  <select id="language">
                    <option value="">Your First Name</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="timezone">Time Zone</label>
                <div className="input-wrapper">
                  <span className="input-icon">🕐</span>
                  <select id="timezone">
                    <option value="">Your First Name</option>
                    <option value="est">EST (UTC-5)</option>
                    <option value="pst">PST (UTC-8)</option>
                    <option value="gmt">GMT (UTC+0)</option>
                    <option value="cet">CET (UTC+1)</option>
                  </select>
                </div>
              </div>
            </div>
</div>
              </div>

        <div className={`tab-content ${activeTab === 'settings' ? 'active' : ''}`}>
          <div className="form-section">
            <div className="settings-group">
              <h3>Privacy & Security</h3>
              <div className="settings-item">
                <div className="settings-item-content">
                  <div className="settings-item-title">Two-Factor Authentication</div>
                  <div className="settings-item-desc">Add an extra layer of security to your account</div>
                </div>
                <button className="toggle-switch"></button>
              </div>
              <div className="settings-item">
                <div className="settings-item-content">
                  <div className="settings-item-title">Email Notifications</div>
                  <div className="settings-item-desc">Receive email updates about your account activity</div>
                </div>
                <button className="toggle-switch active"></button>
              </div>
              <div className="settings-item">
                <div className="settings-item-content">
                  <div className="settings-item-title">Profile Visibility</div>
                  <div className="settings-item-desc">Make your profile visible to other users</div>
                </div>
                <button className="toggle-switch active"></button>
              </div>
            </div>

            <div className="settings-group">
              <h3>Preferences</h3>
              <div className="settings-item">
                <div className="settings-item-content">
                  <div className="settings-item-title">Dark Mode</div>
                  <div className="settings-item-desc">Enable dark theme for better visibility at night</div>
                </div>
                <button className="toggle-switch"></button>
              </div>
              <div className="settings-item">
                <div className="settings-item-content">
                  <div className="settings-item-title">Marketing Emails</div>
                  <div className="settings-item-desc">Receive news and updates from our team</div>
                </div>
                <button className="toggle-switch"></button>
              </div>
            </div>

            <div className="settings-group">
              <h3>Account</h3>
              <div className="settings-item">
                <div className="settings-item-content">
                  <div className="settings-item-title">Delete Account</div>
                  <div className="settings-item-desc">Permanently remove your account and all data</div>
                </div>
                <button style={{ background: '#ef4444', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', transition: 'background 0.2s' }}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
