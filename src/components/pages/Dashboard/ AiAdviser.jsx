import { useState } from 'react';

function Aiadviser() {
  const [activeTab, setActiveTab] = useState('posting-plan');

  return (
    <>
      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f7;
            color: #1d1d1f;
            line-height: 1.5;
        }

        .main-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 32px;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }

        .header-title {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .header-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
        }

        .header-title h1 {
            font-size: 24px;
            font-weight: 600;
        }

        .header-subtitle {
            color: #6b7280;
            font-size: 15px;
            margin-top: 8px;
        }

        .generate-btn {
            background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: transform 0.2s;
        }

        .generate-btn:hover {
            transform: translateY(-2px);
        }

        .insight-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 20px;
            margin-bottom: 24px;
        }

        .insight-card {
            background: white;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .insight-card-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .insight-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }

        .insight-icon.purple {
            background-color: #f3e8ff;
            color: #a855f7;
        }

        .insight-icon.green {
            background-color: #d1fae5;
            color: #10b981;
        }

        .insight-icon.blue {
            background-color: #dbeafe;
            color: #3b82f6;
        }

        .insight-card h3 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .insight-card p {
            color: #6b7280;
            font-size: 14px;
        }

        .banner {
            background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%);
            border-radius: 20px;
            padding: 32px;
            margin-bottom: 32px;
            color: white;
            position: relative;
            overflow: hidden;
        }

        .banner-content {
            display: flex;
            gap: 24px;
            align-items: flex-start;
        }

        .banner-icon {
            width: 56px;
            height: 56px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            flex-shrink: 0;
        }

        .banner-text h2 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .new-badge {
            background: rgba(255, 255, 255, 0.3);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }

        .banner-text p {
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 24px;
            opacity: 0.95;
        }

        .banner-buttons {
            display: flex;
            gap: 12px;
        }

        .btn-primary {
            background: white;
            color: #a855f7;
            border: none;
            padding: 12px 24px;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
        }

        .tabs {
            display: flex;
            gap: 32px;
            border-bottom: 1px solid #e5e7eb;
            margin-bottom: 32px;
        }

        .tab {
            padding: 12px 0;
            font-size: 15px;
            font-weight: 600;
            color: #6b7280;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .tab.active {
            color: #1d1d1f;
            border-bottom-color: #a855f7;
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .content-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: 24px;
            margin-bottom: 32px;
        }

        .content-card {
            background: white;
            border-radius: 16px;
            padding: 28px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .content-card-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }

        .content-card-icon {
            font-size: 20px;
        }

        .content-card-icon.purple { color: #a855f7; }
        .content-card-icon.pink { color: #ec4899; }
        .content-card-icon.green { color: #10b981; }

        .content-card h3 {
            font-size: 18px;
            font-weight: 600;
        }

        .content-card-subtitle {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 24px;
        }

        .platform-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .platform-info {
            flex: 1;
        }

        .platform-name {
            font-weight: 600;
            font-size: 15px;
            margin-bottom: 8px;
        }

        .platform-bar {
            height: 6px;
            background: #f3f4f6;
            border-radius: 3px;
            overflow: hidden;
            margin-bottom: 6px;
        }

        .platform-bar-fill {
            height: 100%;
            background: #1d1d1f;
            border-radius: 3px;
        }

        .platform-percentage {
            font-size: 13px;
            color: #6b7280;
        }

        .platform-badge {
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            margin-left: 12px;
        }

        .badge-purple {
            background: #f3e8ff;
            color: #a855f7;
        }

        .badge-blue {
            background: #dbeafe;
            color: #3b82f6;
        }

        .content-item {
            margin-bottom: 24px;
        }

        .content-item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }

        .content-item-name {
            font-weight: 600;
            font-size: 15px;
        }

        .content-item-percentage {
            font-weight: 600;
            color: #a855f7;
        }

        .content-item-bar {
            height: 8px;
            background: #f3f4f6;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 6px;
        }

        .content-item-bar-fill {
            height: 100%;
            border-radius: 4px;
        }

        .bar-purple { background: #a855f7; }
        .bar-blue { background: #3b82f6; }
        .bar-gray { background: #9ca3af; }
        .bar-orange { background: #f97316; }

        .content-item-label {
            font-size: 13px;
            color: #6b7280;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .label-icon {
            font-size: 12px;
        }

        .label-success { color: #10b981; }
        .label-warning { color: #f97316; }

        .impact-item {
            background: #f9fafb;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 16px;
        }

        .impact-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .impact-label {
            font-size: 15px;
            color: #6b7280;
        }

        .impact-value {
            font-size: 20px;
            font-weight: 700;
            color: #10b981;
        }

        .impact-bar {
            height: 6px;
            background: #e5e7eb;
            border-radius: 3px;
            overflow: hidden;
        }

        .impact-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #1d1d1f 0%, #10b981 100%);
            border-radius: 3px;
        }

        .schedule-section {
            background: white;
            border-radius: 16px;
            padding: 32px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .schedule-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }

        .schedule-header h3 {
            font-size: 20px;
            font-weight: 600;
        }

        .export-btn {
            background: white;
            border: 1px solid #e5e7eb;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s;
        }

        .export-btn:hover {
            background: #f9fafb;
        }

        .schedule-subtitle {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 32px;
        }

        .calendar {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 16px;
        }

        .calendar-day {
            text-align: center;
        }

        .calendar-day-header {
            font-weight: 600;
            font-size: 15px;
            margin-bottom: 8px;
        }

        .calendar-day-date {
            font-size: 13px;
            color: #6b7280;
            margin-bottom: 12px;
        }

        .calendar-slot {
            border-radius: 12px;
            padding: 16px 12px;
            margin-bottom: 12px;
            color: white;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
        }

        .slot-purple {
            background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);
        }

        .slot-blue {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        }

        .slot-green {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .calendar-slot-time {
            font-size: 15px;
            margin-bottom: 4px;
        }

        .calendar-slot-platform {
            font-size: 13px;
            opacity: 0.9;
        }

        .best-times-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .best-time-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            background: white;
            border-radius: 12px;
            border-left: 4px solid #a855f7;
        }

        .best-time-item.twitter {
            border-left-color: #3b82f6;
        }

        .best-time-item.facebook {
            border-left-color: #3b82f6;
        }

        .best-time-left {
            display: flex;
            align-items: center;
            gap: 16px;
            flex: 1;
        }

        .best-time-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }

        .best-time-icon.green {
            background: #d1fae5;
            color: #10b981;
        }

        .best-time-icon.purple {
            background: #f3e8ff;
            color: #a855f7;
        }

        .best-time-info h4 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .best-time-info p {
            font-size: 14px;
            color: #6b7280;
        }

        .best-time-right {
            display: flex;
            align-items: center;
            gap: 32px;
        }

        .engagement-score {
            text-align: right;
        }

        .engagement-value {
            font-size: 24px;
            font-weight: 700;
            color: #1d1d1f;
        }

        .engagement-label {
            font-size: 13px;
            color: #6b7280;
        }

        .score-badge {
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            color: white;
        }

        .badge-peak {
            background: #10b981;
        }

        .badge-high {
            background: #a855f7;
        }

        .best-times-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 24px;
        }

        .best-times-header h3 {
            font-size: 20px;
            font-weight: 600;
        }

        .best-times-header p {
            color: #6b7280;
            font-size: 14px;
            margin-top: 4px;
        }

        .updated-badge {
            background: #f3e8ff;
            color: #a855f7;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
        }

        @media (max-width: 768px) {
            .main-container {
                padding: 16px;
            }

            .content-grid {
                grid-template-columns: 1fr;
            }

            .calendar {
                grid-template-columns: repeat(3, 1fr);
            }

            .best-time-right {
                gap: 16px;
            }

            .best-time-item {
                flex-direction: column;
                align-items: flex-start;
            }
        }
      `}</style>

      <div className="main-container">
        <div className="header">
          <div>
            <div className="header-title">
              <div className="header-icon">✦</div>
              <h1>AI Adviser</h1>
            </div>
            <p className="header-subtitle">Get AI-powered insights and recommendations for optimal social media performance</p>
          </div>
          <button className="generate-btn">
            <span>✦</span>
            Generate New Plan
          </button>
        </div>

        <div className="insight-cards">
          <div className="insight-card">
            <div className="insight-card-header">
              <div className="insight-icon purple">🕐</div>
              <div>
                <h3>Optimal Posting Window</h3>
              </div>
            </div>
            <p>Your audience is most active between 9 AM - 3 PM on weekdays</p>
          </div>

          <div className="insight-card">
            <div className="insight-card-header">
              <div className="insight-icon green">📈</div>
              <div>
                <h3>Content Performance</h3>
              </div>
            </div>
            <p>Video content generates 2.4x more engagement than images</p>
          </div>

          <div className="insight-card">
            <div className="insight-card-header">
              <div className="insight-icon blue">👥</div>
              <div>
                <h3>Audience Growth</h3>
              </div>
            </div>
            <p>Posting 5x/week can increase followers by 34% in 30 days</p>
          </div>
        </div>

        <div className="banner">
          <div className="banner-content">
            <div className="banner-icon">✦</div>
            <div className="banner-text">
              <h2>
                AI-Generated Posting Plan Ready
                <span className="new-badge">New</span>
              </h2>
              <p>Based on your audience analysis and engagement patterns, we've created an optimized posting schedule for the next 30 days. This plan is expected to increase your reach by 34% and engagement by 28%.</p>
              <div className="banner-buttons">
                <button className="btn-primary">View Complete Plan →</button>
                <button className="btn-secondary">Customize</button>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs">
          <div
            className={`tab ${activeTab === 'posting-plan' ? 'active' : ''}`}
            onClick={() => setActiveTab('posting-plan')}
          >
            <span>📅</span>
            Posting Plan
          </div>
          <div
            className={`tab ${activeTab === 'best-times' ? 'active' : ''}`}
            onClick={() => setActiveTab('best-times')}
          >
            <span>🕐</span>
            Best Times
          </div>
        </div>

        <div id="posting-plan" className={`tab-content ${activeTab === 'posting-plan' ? 'active' : ''}`}>
          <div className="content-grid">
            <div className="content-card">
              <div className="content-card-header">
                <span className="content-card-icon purple">⚡</span>
                <h3>Posting Frequency</h3>
              </div>
              <p className="content-card-subtitle">AI-recommended schedule</p>

              <div className="platform-item">
                <div className="platform-info">
                  <div className="platform-name">Instagram</div>
                  <div className="platform-bar">
                    <div className="platform-bar-fill" style={{ width: '71%' }}></div>
                  </div>
                  <div className="platform-percentage">71% of optimal frequency</div>
                </div>
                <div className="platform-badge badge-purple">5x/week</div>
              </div>

              <div className="platform-item">
                <div className="platform-info">
                  <div className="platform-name">Twitter</div>
                  <div className="platform-bar">
                    <div className="platform-bar-fill" style={{ width: '100%' }}></div>
                  </div>
                  <div className="platform-percentage">Perfect frequency</div>
                </div>
                <div className="platform-badge badge-blue">Daily</div>
              </div>

              <div className="platform-item">
                <div className="platform-info">
                  <div className="platform-name">LinkedIn</div>
                  <div className="platform-bar">
                    <div className="platform-bar-fill" style={{ width: '60%' }}></div>
                  </div>
                  <div className="platform-percentage">60% of optimal frequency</div>
                </div>
                <div className="platform-badge badge-purple">3x/week</div>
              </div>

              <div className="platform-item">
                <div className="platform-info">
                  <div className="platform-name">Facebook</div>
                  <div className="platform-bar">
                    <div className="platform-bar-fill" style={{ width: '80%' }}></div>
                  </div>
                  <div className="platform-percentage">80% of optimal frequency</div>
                </div>
                <div className="platform-badge badge-purple">4x/week</div>
              </div>
            </div>

            <div className="content-card">
              <div className="content-card-header">
                <span className="content-card-icon pink">📊</span>
                <h3>Content Mix</h3>
              </div>
              <p className="content-card-subtitle">Optimal content distribution</p>

              <div className="content-item">
                <div className="content-item-header">
                  <span className="content-item-name">Video Content</span>
                  <span className="content-item-percentage">40%</span>
                </div>
                <div className="content-item-bar">
                  <div className="content-item-bar-fill bar-purple" style={{ width: '40%' }}></div>
                </div>
                <div className="content-item-label label-success">
                  <span>🚀</span>
                  Highest engagement
                </div>
              </div>

              <div className="content-item">
                <div className="content-item-header">
                  <span className="content-item-name">Images</span>
                  <span className="content-item-percentage">35%</span>
                </div>
                <div className="content-item-bar">
                  <div className="content-item-bar-fill bar-blue" style={{ width: '35%' }}></div>
                </div>
                <div className="content-item-label">
                  Strong performance
                </div>
              </div>

              <div className="content-item">
                <div className="content-item-header">
                  <span className="content-item-name">Text Posts</span>
                  <span className="content-item-percentage">15%</span>
                </div>
                <div className="content-item-bar">
                  <div className="content-item-bar-fill bar-gray" style={{ width: '15%' }}></div>
                </div>
                <div className="content-item-label">
                  Moderate reach
                </div>
              </div>

              <div className="content-item">
                <div className="content-item-header">
                  <span className="content-item-name">Stories/Reels</span>
                  <span className="content-item-percentage">10%</span>
                </div>
                <div className="content-item-bar">
                  <div className="content-item-bar-fill bar-orange" style={{ width: '10%' }}></div>
                </div>
                <div className="content-item-label label-warning">
                  <span>📈</span>
                  Growing format
                </div>
              </div>
            </div>

            <div className="content-card">
              <div className="content-card-header">
                <span className="content-card-icon green">📈</span>
                <h3>Predicted Impact</h3>
              </div>
              <p className="content-card-subtitle">Expected results in 30 days</p>

              <div className="impact-item">
                <div className="impact-header">
                  <span className="impact-label">Reach Increase</span>
                  <span className="impact-value">+34%</span>
                </div>
                <div className="impact-bar">
                  <div className="impact-bar-fill" style={{ width: '34%' }}></div>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-header">
                  <span className="impact-label">Engagement Rate</span>
                  <span className="impact-value">+28%</span>
                </div>
                <div className="impact-bar">
                  <div className="impact-bar-fill" style={{ width: '28%' }}></div>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-header">
                  <span className="impact-label">Follower Growth</span>
                  <span className="impact-value">+19%</span>
                </div>
                <div className="impact-bar">
                  <div className="impact-bar-fill" style={{ width: '19%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="schedule-section">
            <div className="schedule-header">
              <div>
                <h3>Recommended Weekly Schedule</h3>
              </div>
              <button className="export-btn">
                <span>📅</span>
                Export Schedule
              </button>
            </div>
            <p className="schedule-subtitle">AI-optimized posting schedule based on your audience behavior</p>

            <div className="calendar">
              <div className="calendar-day">
                <div className="calendar-day-header">Mon</div>
                <div className="calendar-day-date">Jan 6</div>
                <div className="calendar-slot slot-purple">
                  <div className="calendar-slot-time">🕐 9:00 AM</div>
                  <div className="calendar-slot-platform">Instagram</div>
                </div>
                <div className="calendar-slot slot-blue">
                  <div className="calendar-slot-time">🕐 2:00 PM</div>
                  <div className="calendar-slot-platform">Twitter</div>
                </div>
              </div>

              <div className="calendar-day">
                <div className="calendar-day-header">Tue</div>
                <div className="calendar-day-date">Jan 7</div>
                <div className="calendar-slot slot-purple">
                  <div className="calendar-slot-time">🕐 9:00 AM</div>
                  <div className="calendar-slot-platform">Instagram</div>
                </div>
                <div className="calendar-slot slot-blue">
                  <div className="calendar-slot-time">🕐 2:00 PM</div>
                  <div className="calendar-slot-platform">Twitter</div>
                </div>
              </div>

              <div className="calendar-day">
                <div className="calendar-day-header">Wed</div>
                <div className="calendar-day-date">Jan 8</div>
                <div className="calendar-slot slot-purple">
                  <div className="calendar-slot-time">🕐 9:00 AM</div>
                  <div className="calendar-slot-platform">Instagram</div>
                </div>
                <div className="calendar-slot slot-blue">
                  <div className="calendar-slot-time">🕐 2:00 PM</div>
                  <div className="calendar-slot-platform">Twitter</div>
                </div>
                <div className="calendar-slot slot-green">
                  <div className="calendar-slot-time">🕐 6:00 PM</div>
                  <div className="calendar-slot-platform">LinkedIn</div>
                </div>
              </div>

              <div className="calendar-day">
                <div className="calendar-day-header">Thu</div>
                <div className="calendar-day-date">Jan 9</div>
                <div className="calendar-slot slot-purple">
                  <div className="calendar-slot-time">🕐 9:00 AM</div>
                  <div className="calendar-slot-platform">Instagram</div>
                </div>
                <div className="calendar-slot slot-blue">
                  <div className="calendar-slot-time">🕐 2:00 PM</div>
                  <div className="calendar-slot-platform">Twitter</div>
                </div>
              </div>

              <div className="calendar-day">
                <div className="calendar-day-header">Fri</div>
                <div className="calendar-day-date">Jan 10</div>
                <div className="calendar-slot slot-purple">
                  <div className="calendar-slot-time">🕐 9:00 AM</div>
                  <div className="calendar-slot-platform">Instagram</div>
                </div>
                <div className="calendar-slot slot-blue">
                  <div className="calendar-slot-time">🕐 2:00 PM</div>
                  <div className="calendar-slot-platform">Twitter</div>
                </div>
              </div>

              <div className="calendar-day">
                <div className="calendar-day-header">Sat</div>
                <div className="calendar-day-date">Jan 11</div>
                <div className="calendar-slot slot-purple">
                  <div className="calendar-slot-time">🕐 9:00 AM</div>
                  <div className="calendar-slot-platform">Instagram</div>
                </div>
              </div>

              <div className="calendar-day">
                <div className="calendar-day-header">Sun</div>
                <div className="calendar-day-date">Jan 12</div>
                <div className="calendar-slot slot-purple">
                  <div className="calendar-slot-time">🕐 9:00 AM</div>
                  <div className="calendar-slot-platform">Instagram</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="best-times" className={`tab-content ${activeTab === 'best-times' ? 'active' : ''}`}>
          <div className="content-card">
            <div className="best-times-header">
              <div>
                <h3>Optimal Posting Times</h3>
                <p>Times when your audience is most active and engaged</p>
              </div>
              <div className="updated-badge">
                <span>🔄</span>
                Updated Daily
              </div>
            </div>

            <div className="best-times-list">
              <div className="best-time-item">
                <div className="best-time-left">
                  <div className="best-time-icon green">🕐</div>
                  <div className="best-time-info">
                    <h4>Monday</h4>
                    <p>10:00 AM • Instagram</p>
                  </div>
                </div>
                <div className="best-time-right">
                  <div className="engagement-score">
                    <div className="engagement-value">92%</div>
                    <div className="engagement-label">Engagement Score</div>
                  </div>
                  <span className="score-badge badge-peak">Peak Time</span>
                </div>
              </div>

              <div className="best-time-item">
                <div className="best-time-left">
                  <div className="best-time-icon purple">🕐</div>
                  <div className="best-time-info">
                    <h4>Monday</h4>
                    <p>2:00 PM • LinkedIn</p>
                  </div>
                </div>
                <div className="best-time-right">
                  <div className="engagement-score">
                    <div className="engagement-value">87%</div>
                    <div className="engagement-label">Engagement Score</div>
                  </div>
                  <span className="score-badge badge-high">High</span>
                </div>
              </div>

              <div className="best-time-item twitter">
                <div className="best-time-left">
                  <div className="best-time-icon green">🕐</div>
                  <div className="best-time-info">
                    <h4>Wednesday</h4>
                    <p>11:00 AM • Twitter</p>
                  </div>
                </div>
                <div className="best-time-right">
                  <div className="engagement-score">
                    <div className="engagement-value">95%</div>
                    <div className="engagement-label">Engagement Score</div>
                  </div>
                  <span className="score-badge badge-peak">Peak Time</span>
                </div>
              </div>

              <div className="best-time-item facebook">
                <div className="best-time-left">
                  <div className="best-time-icon purple">🕐</div>
                  <div className="best-time-info">
                    <h4>Wednesday</h4>
                    <p>3:00 PM • Facebook</p>
                  </div>
                </div>
                <div className="best-time-right">
                  <div className="engagement-score">
                    <div className="engagement-value">89%</div>
                    <div className="engagement-label">Engagement Score</div>
                  </div>
                  <span className="score-badge badge-high">High</span>
                </div>
              </div>

              <div className="best-time-item">
                <div className="best-time-left">
                  <div className="best-time-icon green">🕐</div>
                  <div className="best-time-info">
                    <h4>Friday</h4>
                    <p>9:00 AM • Instagram</p>
                  </div>
                </div>
                <div className="best-time-right">
                  <div className="engagement-score">
                    <div className="engagement-value">88%</div>
                    <div className="engagement-label">Engagement Score</div>
                  </div>
                  <span className="score-badge badge-high">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aiadviser;
