import {
  Search,
  Settings,
  Clock,
  Download,
  FileText,
  Target,
  Users,
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  ArrowRight
} from 'lucide-react';

function Analytics() {
  const switchTab = (e) => {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
  };

  return (
    <>
      <style>{`
        
        .Analytics-container{
            max-width: 1500px;
            margin: 0 auto;
        }

        .header-anly{
          padding:20px 30px;
        }

        .header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .header .subtitle {
            color: #6e6e73;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .header-anly .subtitle::before {
            font-size: 1.2rem;
        }

        .toolbar {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 32px;
            flex-wrap: wrap;
        }

        .search-box {
            flex: 1;
            min-width: 280px;
            position: relative;
        }

        .search-box input {
            width: 50%;
            padding: 12px 16px 12px 44px;
            border: 1px solid #d2d2d7;
            border-radius: 22px;
            font-size: 0.95rem;
            outline: none;
            transition: all 0.2s;
        }

        .search-box input:focus {
            border-color: #7c3aed;
            box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
        }

        .search-icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #6e6e73;
        }

        .filters-btn, .download-btn {
            padding: 12px 20px;
            border: 1px solid #d2d2d7;
            border-radius: 12px;
            background: white;
            cursor: pointer;
            font-size: 0.95rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s;
        }

        .filters-btn:hover, .download-btn:hover {
            border-color: #7c3aed;
        }

        .date-dropdown {
            padding: 12px 20px;
            border: 1px solid #7c3aed;
            border-radius: 12px;
            background: #7c3aed;
            color: white;
            cursor: pointer;
            font-size: 0.95rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 32px;
        }

        .metric-card {
            background: white;
            border-radius: 16px;
            padding: 28px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            transition: transform 0.2s;
        }

        .metric-card:hover {
            transform: translateY(-2px);
        }

        .metric-card.featured {
            background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
            color: white;
        }

        .metric-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .metric-title {
            font-size: 0.95rem;
            font-weight: 500;
            opacity: 0.9;
        }

        .metric-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .featured .metric-icon {
            background: rgba(255, 255, 255, 0.2);
        }

        .metric-value {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .metric-change {
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .metric-change.positive {
            color: #10b981;
        }

        .metric-change.negative {
            color: #ef4444;
        }

        .featured .metric-change {
            color: rgba(255, 255, 255, 0.9);
        }

        .dashboard-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 20px;
            margin-bottom: 32px;
        }

        .card {
            background: white;
            border-radius: 16px;
            padding: 28px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 24px;
        }

        .card-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .card-subtitle {
            color: #6e6e73;
            font-size: 0.9rem;
        }

        .tab-buttons {
            display: flex;
            gap: 8px;
        }

        .tab-btn {
            padding: 6px 16px;
            border: 1px solid #d2d2d7;
            border-radius: 8px;
            background: white;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.2s;
        }

        .tab-btn.active {
            background: #f3e8ff;
            border-color: #7c3aed;
            color: #7c3aed;
        }

        .chart-container {
            position: relative;
            height: 320px;
        }

        .bar-chart {
            display: flex;
            align-items: flex-end;
            justify-content: space-around;
            height: 280px;
            position: relative;
        }

        .bar-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
        }

        .bar {
            width: 60px;
            background: #06b6d4;
            border-radius: 6px 6px 0 0;
            transition: all 0.3s;
            position: relative;
        }

        .bar:hover {
            opacity: 0.8;
        }

        .bar-label {
            margin-top: 12px;
            font-size: 0.85rem;
            color: #6e6e73;
        }

        .line-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 280px;
            pointer-events: none;
        }

        .line-path {
            fill: none;
            stroke: #7c3aed;
            stroke-width: 3;
        }

        .line-fill {
            fill: url(#gradient);
            opacity: 0.2;
        }

        .radar-chart {
            width: 100%;
            height: 280px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .horizontal-bars {
            margin-top: 20px;
        }

        .bar-item {
            margin-bottom: 20px;
        }

        .bar-item-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
        }

        .bar-item-label {
            font-size: 0.95rem;
            font-weight: 500;
        }

        .bar-item-value {
            font-size: 0.85rem;
            color: #6e6e73;
        }

        .bar-track {
            width: 100%;
            height: 32px;
            background: #f5f5f7;
            border-radius: 8px;
            overflow: hidden;
        }

        .bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #7c3aed 0%, #a855f7 100%);
            border-radius: 8px;
            transition: width 0.6s ease;
        }

        .donut-chart {
            width: 200px;
            height: 200px;
            margin: 20px auto;
        }

        .legend {
            margin-top: 24px;
        }

        .legend-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .legend-label {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .legend-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        .legend-value {
            font-weight: 600;
            font-size: 1.1rem;
        }

        .legend-percent {
            font-size: 0.85rem;
            color: #6e6e73;
        }

        .platform-list {
            margin-top: 24px;
        }

        .platform-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            background: #f9fafb;
            border-radius: 12px;
            margin-bottom: 12px;
            transition: all 0.2s;
        }

        .platform-item:hover {
            background: #f3f4f6;
            transform: translateX(4px);
        }

        .platform-info {
            display: flex;
            align-items: center;
            gap: 16px;
            flex: 1;
        }

        .platform-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .platform-details h4 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .platform-details p {
            font-size: 0.85rem;
            color: #6e6e73;
        }

        .platform-stats {
            display: flex;
            gap: 40px;
            align-items: center;
        }

        .stat-item {
            text-align: right;
        }

        .stat-label {
            font-size: 0.8rem;
            color: #6e6e73;
            margin-bottom: 4px;
        }

        .stat-value {
            font-size: 1.1rem;
            font-weight: 600;
        }

        .arrow-icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .full-report-btn {
            padding: 12px 24px;
            background: #7c3aed;
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s;
        }

        .full-report-btn:hover {
            background: #6d28d9;
            transform: translateY(-1px);
        }

        .view-all-link {
            color: #7c3aed;
            font-size: 0.9rem;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
        }

        .view-all-link:hover {
            text-decoration: underline;
        }

        .line-chart-area {
            position: relative;
            height: 280px;
            margin-top: 20px;
        }

        @media (max-width: 1024px) {
            .dashboard-grid {
                grid-template-columns: 1fr;
            }

            .platform-stats {
                gap: 20px;
            }
        }

        @media (max-width: 768px) {
            .container {
                padding: 20px 16px;
            }

            .header h1 {
                font-size: 1.8rem;
            }

            .metrics-grid {
                grid-template-columns: 1fr;
            }

            .toolbar {
                flex-direction: column;
                align-items: stretch;
            }

            .platform-stats {
                flex-direction: column;
                gap: 12px;
                align-items: flex-end;
            }
        }
      `}</style>

      <div className="Analytics-container">
        <div className="header-anly">
          <h1>Analytics Overview</h1>
          <div className="subtitle">Real-time insights across all platforms</div>
        </div>

        <div className="toolbar">
          <div className="search-box">
            <Search className="search-icon" size={18} />
            <input type="text" placeholder="Search metrics..." />
          </div>
          <button className="filters-btn">
            <Settings size={18} /> Filters
          </button>
          <button className="date-dropdown">
            <Clock size={18} /> Last 30 days ▾
          </button>
          <button className="download-btn">
            <Download size={18} />
          </button>
        </div>

        <div className="metrics-grid">
          <div className="metric-card featured">
            <div className="metric-header">
              <div className="metric-title">Total Content</div>
              <div className="metric-icon">
                <FileText size={24} />
              </div>
            </div>
            <div className="metric-value">2,847</div>
            <div className="metric-change positive">
              <TrendingUp size={16} /> 23.5% vs last month
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-title">Engagement Rate</div>
              <div className="metric-icon">
                <Target size={24} />
              </div>
            </div>
            <div className="metric-value">8.9%</div>
            <div className="metric-change positive">
              <TrendingUp size={16} /> 12.3% vs last month
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-title">Total Reach</div>
              <div className="metric-icon">
                <Users size={24} />
              </div>
            </div>
            <div className="metric-value">126.5K</div>
            <div className="metric-change positive">
              <TrendingUp size={16} /> 18.7% vs last month
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-title">Revenue (MRR)</div>
              <div className="metric-icon">
                <DollarSign size={24} />
              </div>
            </div>
            <div className="metric-value">$42.8K</div>
            <div className="metric-change negative">
              <TrendingDown size={16} /> 2.4% vs last month
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="card">
            <div className="card-header">
              <div>
                <div className="card-title">Performance Overview</div>
                <div className="card-subtitle">Engagement metrics across all platforms</div>
              </div>
              <div className="tab-buttons">
                <button className="tab-btn active" onClick={switchTab}>Posts</button>
                <button className="tab-btn" onClick={switchTab}>Engagement</button>
              </div>
            </div>
            <div className="chart-container">
              <div className="bar-chart">
                <div className="bar-group">
                  <div className="bar" style={{height: '25%'}}></div>
                  <div className="bar-label">Jan 1</div>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{height: '45%'}}></div>
                  <div className="bar-label">Jan 5</div>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{height: '35%'}}></div>
                  <div className="bar-label">Jan 10</div>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{height: '55%'}}></div>
                  <div className="bar-label">Jan 15</div>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{height: '60%'}}></div>
                  <div className="bar-label">Jan 20</div>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{height: '70%'}}></div>
                  <div className="bar-label">Jan 25</div>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{height: '80%'}}></div>
                  <div className="bar-label">Jan 30</div>
                </div>
              </div>
              <svg className="line-overlay" viewBox="0 0 700 280" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#7c3aed', stopOpacity:0.3}} />
                    <stop offset="100%" style={{stopColor:'#7c3aed', stopOpacity:0}} />
                  </linearGradient>
                </defs>
                <path className="line-fill" d="M 0 200 L 100 180 L 200 160 L 300 120 L 400 90 L 500 60 L 600 30 L 700 10 L 700 280 L 0 280 Z" />
                <path className="line-path" d="M 0 200 L 100 180 L 200 160 L 300 120 L 400 90 L 500 60 L 600 30 L 700 10" />
              </svg>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div>
                <div className="card-title">Performance Score</div>
                <div className="card-subtitle">Overall health metrics</div>
              </div>
            </div>
            <div className="radar-chart">
              <svg width="280" height="280" viewBox="0 0 280 280">
                <defs>
                  <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#a855f7', stopOpacity:0.6}} />
                    <stop offset="100%" style={{stopColor:'#7c3aed', stopOpacity:0.6}} />
                  </linearGradient>
                </defs>
                <polygon points="140,40 220,90 220,190 140,240 60,190 60,90" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                <polygon points="140,70 195,105 195,175 140,210 85,175 85,105" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                <polygon points="140,100 170,120 170,160 140,180 110,160 110,120" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                <polygon points="140,50 210,95 200,185 140,225 70,185 80,95" fill="url(#radarGradient)" stroke="#7c3aed" strokeWidth="2"/>
                <text x="140" y="25" textAnchor="middle" fill="#6e6e73" fontSize="11">Engagement Rate</text>
                <text x="235" y="95" textAnchor="start" fill="#6e6e73" fontSize="11">Content</text>
                <text x="235" y="195" textAnchor="start" fill="#6e6e73" fontSize="11">Posting Freq.</text>
                <text x="140" y="265" textAnchor="middle" fill="#6e6e73" fontSize="11">Audience Growth</text>
                <text x="40" y="195" textAnchor="end" fill="#6e6e73" fontSize="11">Response Time</text>
                <text x="40" y="95" textAnchor="end" fill="#6e6e73" fontSize="11">Conversion Rate</text>
              </svg>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="card">
            <div className="card-header">
              <div>
                <div className="card-title">Content Performance by Type</div>
                <div className="card-subtitle">Engagement and conversion rates</div>
              </div>
              <a href="#" className="view-all-link">View All</a>
            </div>
            <div className="horizontal-bars">
              <div className="bar-item">
                <div className="bar-item-header">
                  <span className="bar-item-label">Video</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{width: '45%'}}></div>
                </div>
              </div>
              <div className="bar-item">
                <div className="bar-item-header">
                  <span className="bar-item-label">Image</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="bar-item">
                <div className="bar-item-header">
                  <span className="bar-item-label">Carousel</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{width: '35%'}}></div>
                </div>
              </div>
              <div className="bar-item">
                <div className="bar-item-header">
                  <span className="bar-item-label">Story</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{width: '50%'}}></div>
                </div>
              </div>
              <div className="bar-item">
                <div className="bar-item-header">
                  <span className="bar-item-label">Reels</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div>
                <div className="card-title">Revenue Sources</div>
                <div className="card-subtitle">Distribution by type</div>
              </div>
            </div>
            <svg className="donut-chart" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#7c3aed" strokeWidth="40" strokeDasharray="226 251" transform="rotate(-90 100 100)"/>
              <circle cx="100" cy="100" r="80" fill="none" stroke="#06b6d4" strokeWidth="40" strokeDasharray="126 351" strokeDashoffset="-226" transform="rotate(-90 100 100)"/>
              <circle cx="100" cy="100" r="80" fill="none" stroke="#10b981" strokeWidth="40" strokeDasharray="101 376" strokeDashoffset="-352" transform="rotate(-90 100 100)"/>
              <circle cx="100" cy="100" r="80" fill="none" stroke="#f59e0b" strokeWidth="40" strokeDasharray="50 427" strokeDashoffset="-453" transform="rotate(-90 100 100)"/>
            </svg>
            <div className="legend">
              <div className="legend-item">
                <div className="legend-label">
                  <span className="legend-dot" style={{background: '#7c3aed'}}></span>
                  <span>Subscriptions</span>
                </div>
                <div>
                  <div className="legend-value">$45.0K</div>
                  <div className="legend-percent">45%</div>
                </div>
              </div>
              <div className="legend-item">
                <div className="legend-label">
                  <span className="legend-dot" style={{background: '#06b6d4'}}></span>
                  <span>One-time</span>
                </div>
                <div>
                  <div className="legend-value">$25.0K</div>
                  <div className="legend-percent">25%</div>
                </div>
              </div>
              <div className="legend-item">
                <div className="legend-label">
                  <span className="legend-dot" style={{background: '#10b981'}}></span>
                  <span>Premium</span>
                </div>
                <div>
                  <div className="legend-value">$20.0K</div>
                  <div className="legend-percent">20%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{marginBottom: '32px'}}>
          <div className="card-header">
            <div>
              <div className="card-title">Platform Performance</div>
              <div className="card-subtitle">Cross-platform analytics breakdown</div>
            </div>
            <button className="full-report-btn">
              <BarChart3 size={18} /> Full Report
            </button>
          </div>
          <div className="platform-list">
            <div className="platform-item">
              <div className="platform-info">
                <div className="platform-icon">
                  <BarChart3 size={24} color="#7c3aed" />
                </div>
                <div className="platform-details">
                  <h4>Instagram</h4>
                  <p>234 posts this month</p>
                </div>
              </div>
              <div className="platform-stats">
                <div className="stat-item">
                  <div className="stat-label">Followers</div>
                  <div className="stat-value">45.6K</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Growth</div>
                  <div className="stat-value" style={{color: '#10b981'}}>
                    <TrendingUp size={16} style={{display: 'inline', marginRight: '4px'}} /> 12.5%
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Engagement</div>
                  <div className="stat-value" style={{color: '#7c3aed'}}>8.9%</div>
                </div>
              </div>
              <div className="arrow-icon">
                <ArrowRight size={18} />
              </div>
            </div>

            <div className="platform-item">
              <div className="platform-info">
                <div className="platform-icon">
                  <BarChart3 size={24} color="#7c3aed" />
                </div>
                <div className="platform-details">
                  <h4>Twitter</h4>
                  <p>456 posts this month</p>
                </div>
              </div>
              <div className="platform-stats">
                <div className="stat-item">
                  <div className="stat-label">Followers</div>
                  <div className="stat-value">32.4K</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Growth</div>
                  <div className="stat-value" style={{color: '#10b981'}}>
                    <TrendingUp size={16} style={{display: 'inline', marginRight: '4px'}} /> 8.3%
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Engagement</div>
                  <div className="stat-value" style={{color: '#7c3aed'}}>6.2%</div>
                </div>
              </div>
              <div className="arrow-icon">
                <ArrowRight size={18} />
              </div>
            </div>

            <div className="platform-item">
              <div className="platform-info">
                <div className="platform-icon">
                  <BarChart3 size={24} color="#7c3aed" />
                </div>
                <div className="platform-details">
                  <h4>LinkedIn</h4>
                  <p>128 posts this month</p>
                </div>
              </div>
              <div className="platform-stats">
                <div className="stat-item">
                  <div className="stat-label">Followers</div>
                  <div className="stat-value">18.9K</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Growth</div>
                  <div className="stat-value" style={{color: '#10b981'}}>
                    <TrendingUp size={16} style={{display: 'inline', marginRight: '4px'}} /> 15.7%
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Engagement</div>
                  <div className="stat-value" style={{color: '#7c3aed'}}>12.4%</div>
                </div>
              </div>
              <div className="arrow-icon">
                <ArrowRight size={18} />
              </div>
            </div>

            <div className="platform-item">
              <div className="platform-info">
                <div className="platform-icon">
                  <BarChart3 size={24} color="#7c3aed" />
                </div>
                <div className="platform-details">
                  <h4>Facebook</h4>
                  <p>189 posts this month</p>
                </div>
              </div>
              <div className="platform-stats">
                <div className="stat-item">
                  <div className="stat-label">Followers</div>
                  <div className="stat-value">28.3K</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Growth</div>
                  <div className="stat-value" style={{color: '#10b981'}}>
                    <TrendingUp size={16} style={{display: 'inline', marginRight: '4px'}} /> 6.8%
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Engagement</div>
                  <div className="stat-value" style={{color: '#7c3aed'}}>5.7%</div>
                </div>
              </div>
              <div className="arrow-icon">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="card-title">Best Time to Post</div>
            <div className="card-subtitle">Hourly audience activity patterns</div>
          </div>
          <div className="line-chart-area">
            <svg width="100%" height="280" viewBox="0 0 1200 280" preserveAspectRatio="none">
              <defs>
                <linearGradient id="timeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#7c3aed', stopOpacity:0.3}} />
                  <stop offset="100%" style={{stopColor:'#7c3aed', stopOpacity:0}} />
                </linearGradient>
              </defs>
              <path d="M 0 200 L 150 220 L 300 240 L 450 200 L 600 150 L 750 100 L 900 60 L 1050 40 L 1200 20 L 1200 280 L 0 280 Z" fill="url(#timeGradient)" />
              <path d="M 0 200 L 150 220 L 300 240 L 450 200 L 600 150 L 750 100 L 900 60 L 1050 40 L 1200 20" fill="none" stroke="#7c3aed" strokeWidth="3" />
            </svg>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 20px', marginTop: '-20px'}}>
              <span style={{fontSize: '0.85rem', color: '#6e6e73'}}>12AM</span>
              <span style={{fontSize: '0.85rem', color: '#6e6e73'}}>4AM</span>
              <span style={{fontSize: '0.85rem', color: '#6e6e73'}}>8AM</span>
              <span style={{fontSize: '0.85rem', color: '#6e6e73'}}>12PM</span>
              <span style={{fontSize: '0.85rem', color: '#6e6e73'}}>4PM</span>
              <span style={{fontSize: '0.85rem', color: '#6e6e73'}}>8PM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
