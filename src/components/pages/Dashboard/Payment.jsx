import { useState } from 'react';

function Payment() {
  const [activeTab, setActiveTab] = useState('plans');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <style>{`
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .icon-box {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
        }

        .header-title h1 {
            font-size: 18px;
            font-weight: 600;
            color: #1a202c;
        }

        .header-title p {
            font-size: 13px;
            color: #718096;
        }

        .header-actions {
            display: flex;
            gap: 10px;
        }

        .btn {
            padding: 10px 20px;
            border-radius: 8px;
            border: none;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
        }

        .btn-secondary {
            background: white;
            color: #4a5568;
            border: 1px solid #e2e8f0;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .featured-plan {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 16px;
            padding: 24px;
            color: white;
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
        }

        .featured-plan::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 300px;
            height: 300px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
        }

        .featured-content {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            position: relative;
            z-index: 1;
        }

        .plan-info h2 {
            font-size: 24px;
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .badge {
            background: rgba(255, 255, 255, 0.3);
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
        }

        .plan-info p {
            font-size: 14px;
            opacity: 0.9;
            margin-bottom: 16px;
        }

        .plan-stats {
            display: flex;
            gap: 20px;
            margin-top: 12px;
        }

        .stat {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
        }

        .price-box {
            text-align: right;
        }

        .price {
            font-size: 48px;
            font-weight: 700;
            line-height: 1;
        }

        .price-small {
            font-size: 18px;
            opacity: 0.9;
        }

        .action-buttons {
            display: flex;
            gap: 15px;
            margin-top: 20px;
            flex-wrap: wrap;
        }

        .btn-white {
            background: white;
            color: #667eea;
            padding: 10px 24px;
            border-radius: 8px;
            border: none;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }

        .icon-btn {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            padding: 10px 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .tabs-nav {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
            background: white;
            padding: 15px 20px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
        }

        .tab-btn {
            padding: 10px 20px;
            border: none;
            background: white;
            color: #4a5568;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
            white-space: nowrap;
        }

        .tab-btn.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .billing-toggle {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 30px;
        }

        .toggle-option {
            padding: 8px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            color: #4a5568;
        }

        .toggle-option.active {
            background: white;
            color: #667eea;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .pricing-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 50px;
        }

        .pricing-card {
            background: white;
            border-radius: 16px;
            padding: 20px;
            border: 2px solid #e2e8f0;
            position: relative;
        }

        .pricing-card.featured {
            border: 3px solid #667eea;
            box-shadow: 0 10px 40px rgba(102, 126, 234, 0.2);
            transform: scale(1.05);
        }

        .card-header {
            text-align: center;
            margin-bottom: 24px;
        }

        .card-icon {
            width: 48px;
            height: 48px;
            margin: 0 auto 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
        }

        .pricing-card.starter .card-icon {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .pricing-card.enterprise .card-icon {
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        .card-title {
            font-size: 22px;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 4px;
        }

        .card-subtitle {
            font-size: 13px;
            color: #718096;
            margin-bottom: 16px;
        }

        .card-price {
            font-size: 36px;
            font-weight: 700;
            color: #1a202c;
        }

        .card-price span {
            font-size: 16px;
            color: #718096;
            font-weight: 400;
        }

        .feature-list {
            list-style: none;
            margin: 24px 0;
        }

        .feature-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
            font-size: 14px;
            color: #4a5568;
        }

        .check-icon {
            width: 20px;
            height: 20px;
            background: #10b981;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 12px;
            flex-shrink: 0;
        }

        .card-footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
        }

        .btn-card {
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #667eea;
            background: white;
            color: #667eea;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }

        .btn-card:hover {
            background: #667eea;
            color: white;
        }

        .current-plan {
            margin-top: 12px;
            font-size: 13px;
            color: #10b981;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
        }

        .comparison-section {
            background: white;
            border-radius: 16px;
            padding: 30px;
            border: 2px solid #e2e8f0;
        }

        .comparison-header h3 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 6px;
        }

        .comparison-header p {
            font-size: 14px;
            color: #718096;
            margin-bottom: 24px;
        }

        .comparison-table {
            width: 100%;
            border-collapse: collapse;
        }

        .comparison-table thead {
            border-bottom: 2px solid #e2e8f0;
        }

        .comparison-table th {
            padding: 16px;
            text-align: left;
            font-weight: 600;
            font-size: 14px;
            color: #1a202c;
        }

        .comparison-table th:not(:first-child) {
            text-align: center;
        }

        .comparison-table td {
            padding: 16px;
            border-bottom: 1px solid #f7fafc;
            font-size: 14px;
            color: #4a5568;
        }

        .comparison-table td:not(:first-child) {
            text-align: center;
        }

        .comparison-table .highlight {
            color: #667eea;
            font-weight: 600;
        }

        .check-mark {
            width: 24px;
            height: 24px;
            background: #e6f4ea;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #10b981;
            font-size: 14px;
        }

        .check-mark.purple {
            background: #f3f0ff;
            color: #8b5cf6;
        }

        .payment-cards-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 30px;
        }

        .payment-card {
            background: white;
            border-radius: 16px;
            padding: 20px;
            border: 2px solid #e2e8f0;
            position: relative;
        }

        .payment-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            border-radius: 16px 16px 0 0;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        }

        .payment-card.mastercard::before {
            background: linear-gradient(90deg, #ff1654 0%, #ff6b9d 100%);
        }

        .payment-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .card-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .card-icon-small {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
        }

        .payment-card.mastercard .card-icon-small {
            background: linear-gradient(135deg, #ff1654 0%, #ff6b9d 100%);
        }

        .card-details h4 {
            font-size: 16px;
            font-weight: 600;
            color: #1a202c;
        }

        .card-details p {
            font-size: 13px;
            color: #718096;
        }

        .badge-default {
            background: #10b981;
            color: white;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
        }

        .payment-actions {
            display: flex;
            gap: 10px;
        }

        .payment-btn {
            flex: 1;
            padding: 10px 16px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            background: white;
            color: #667eea;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
        }

        .payment-btn.remove {
            color: #ef4444;
            border-color: #fecaca;
        }

        .add-payment {
            background: white;
            border-radius: 16px;
            padding: 40px;
            border: 2px dashed #cbd5e0;
            text-align: center;
            margin-bottom: 30px;
        }

        .add-payment-icon {
            width: 60px;
            height: 60px;
            background: #f3f0ff;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
            font-size: 32px;
        }

        .add-payment h3 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .add-payment p {
            font-size: 13px;
            color: #718096;
        }

        .secure-section {
            background: #f3f0ff;
            border-radius: 16px;
            padding: 20px;
            display: flex;
            gap: 16px;
            align-items: flex-start;
        }

        .secure-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
            flex-shrink: 0;
        }

        .secure-text h3 {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .secure-text p {
            font-size: 13px;
            color: #667eea;
        }

        .billing-settings {
            background: white;
            border-radius: 16px;
            padding: 30px;
            border: 2px solid #e2e8f0;
            margin-top: 30px;
        }

        .settings-header h3 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .settings-header p {
            font-size: 13px;
            color: #718096;
            margin-bottom: 24px;
        }

        .setting-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            margin-bottom: 12px;
        }

        .setting-info h4 {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .setting-info p {
            font-size: 13px;
            color: #718096;
        }

        .toggle {
            width: 50px;
            height: 28px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 14px;
            cursor: pointer;
            position: relative;
        }

        .toggle::after {
            content: '';
            position: absolute;
            right: 2px;
            top: 2px;
            width: 24px;
            height: 24px;
            background: white;
            border-radius: 50%;
            transition: all 0.3s;
        }

        .history-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .history-header h2 {
            font-size: 24px;
            font-weight: 700;
        }

        .history-header p {
            font-size: 13px;
            color: #718096;
        }

        .download-btn {
            background: white;
            border: 1px solid #e2e8f0;
            color: #1a202c;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }

        .invoices-list {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            border: 2px solid #e2e8f0;
            margin-bottom: 30px;
        }

        .invoice-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            border-bottom: 1px solid #e2e8f0;
        }

        .invoice-item:last-child {
            border-bottom: none;
        }

        .invoice-left {
            display: flex;
            align-items: center;
            gap: 16px;
            flex: 1;
        }

        .invoice-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
            flex-shrink: 0;
        }

        .invoice-details h4 {
            font-size: 14px;
            font-weight: 600;
            color: #1a202c;
        }

        .invoice-details p {
            font-size: 12px;
            color: #718096;
        }

        .invoice-right {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .invoice-amount {
            font-size: 16px;
            font-weight: 700;
            color: #1a202c;
            min-width: 80px;
        }

        .paid-badge {
            background: #dcfce7;
            color: #16a34a;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
        }

        .download-icon {
            cursor: pointer;
            font-size: 18px;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 30px;
        }

        .stat-card {
            border-radius: 16px;
            padding: 25px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .stat-card.blue {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        }

        .stat-card.purple {
            background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
        }

        .stat-card.green {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .stat-label {
            font-size: 13px;
            opacity: 0.9;
            margin-bottom: 8px;
        }

        .stat-value {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .stat-desc {
            font-size: 12px;
            opacity: 0.8;
        }

        .usage-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 40px;
        }

        .usage-card {
            background: white;
            border-radius: 16px;
            padding: 25px;
            border: 2px solid #e2e8f0;
        }

        .usage-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .usage-title {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .usage-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
        }

        .usage-card.posts .usage-icon {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        }

        .usage-card.ai .usage-icon {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .usage-card.team .usage-icon {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        }

        .usage-name h4 {
            font-size: 14px;
            font-weight: 600;
        }

        .usage-limit {
            font-size: 16px;
            font-weight: 600;
            color: #1a202c;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: #e2e8f0;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 12px;
        }

        .progress-fill {
            height: 100%;
            background: #1a202c;
            border-radius: 4px;
        }

        .usage-text {
            font-size: 12px;
            color: #718096;
        }

        .info-box {
            background: #dbeafe;
            border-radius: 8px;
            padding: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 12px;
        }

        .info-box p {
            font-size: 12px;
            color: #1e40af;
        }

        .trends-section {
            background: white;
            border-radius: 16px;
            padding: 25px;
            border: 2px solid #e2e8f0;
        }

        .trends-header h3 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .trends-header p {
            font-size: 13px;
            color: #718096;
            margin-bottom: 24px;
        }

        .trend-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            margin-bottom: 12px;
        }

        .trend-month {
            font-size: 14px;
            font-weight: 600;
        }

        .trend-stats {
            display: flex;
            gap: 30px;
            align-items: center;
        }

        .trend-stat {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: #4a5568;
        }

        @media (max-width: 968px) {
            .pricing-cards {
                grid-template-columns: 1fr;
            }

            .pricing-card.featured {
                transform: scale(1);
            }

            .payment-cards-container {
                grid-template-columns: 1fr;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .usage-grid {
                grid-template-columns: 1fr;
            }

            .tabs-nav {
                overflow-x: auto;
            }

            .tab-btn {
                white-space: nowrap;
            }
        }
      `}</style>

        <div className="header">
          <div className="header-left">
            <div className="icon-box">⚡</div>
            <div className="header-title">
              <h1>Billing & Payments</h1>
              <p>Manage your subscriptions and billing</p>
            </div>
          </div>
          <div className="header-actions">
            <button className="btn btn-secondary">📥 Download Invoice</button>
            <button className="btn btn-primary">Upgrade Plan</button>
          </div>
        </div>

        <div className="featured-plan">
          <div className="featured-content">
            <div className="plan-info">
              <h2>
                Professional Plan
                <span className="badge">25% OFF</span>
              </h2>
              <p>Next billing date: February 1, 2025</p>
              <div className="plan-stats">
                <div className="stat">👥 3 of 5 users</div>
                <div className="stat">💾 15 of 50 accounts</div>
                <div className="stat">✅ 182 goals this month</div>
              </div>
            </div>
            <div className="price-box">
              <div className="price">$79<span className="price-small">/mo</span></div>
            </div>
          </div>
          <div className="action-buttons">
            <button className="btn-white">🔄 Renew & Billing</button>
            <button className="btn-white icon-btn">💳 Payment Methods</button>
            <button className="btn-white icon-btn">📄 Billing History</button>
            <button className="btn-white icon-btn">👤 Usage & Limits</button>
          </div>
        </div>

        <div className="tabs-nav">
          <button className={`tab-btn ${activeTab === 'plans' ? 'active' : ''}`} onClick={() => openTab('plans')}>📊 Plans & Pricing</button>
          <button className={`tab-btn ${activeTab === 'payment' ? 'active' : ''}`} onClick={() => openTab('payment')}>💳 Payment Methods</button>
          <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => openTab('history')}>📋 Billing History</button>
          <button className={`tab-btn ${activeTab === 'usage' ? 'active' : ''}`} onClick={() => openTab('usage')}>📈 Usage & Limits</button>
        </div>

        <div id="plans" className={`tab-content ${activeTab === 'plans' ? 'active' : ''}`}>
          <div className="billing-toggle">
            <div className="toggle-option active">Monthly billing</div>
            <div className="toggle-option">Yearly billing</div>
          </div>

          <div className="pricing-cards">
            <div className="pricing-card starter">
              <div className="card-header">
                <div className="card-icon">🚀</div>
                <div className="card-title">Starter</div>
                <div className="card-subtitle">For individuals and small teams</div>
                <div className="card-price">$29<span>/mo</span></div>
              </div>
              <ul className="feature-list">
                <li><span className="check-icon">✓</span>Up to 5 local accounts</li>
                <li><span className="check-icon">✓</span>50 scheduled posts/month</li>
                <li><span className="check-icon">✓</span>2 users</li>
                <li><span className="check-icon">✓</span>Auto-scheduling</li>
                <li><span className="check-icon">✓</span>Email support</li>
              </ul>
              <div className="card-footer">
                <button className="btn-card">Upgrade to Starter →</button>
              </div>
            </div>

            <div className="pricing-card featured">
              <div className="card-header">
                <div className="card-icon">👑</div>
                <div className="card-title">Professional</div>
                <div className="card-subtitle">For growing businesses and agencies</div>
                <div className="card-price">$79<span>/mo</span></div>
              </div>
              <ul className="feature-list">
                <li><span className="check-icon">✓</span>Up to 30 social accounts</li>
                <li><span className="check-icon">✓</span>Unlimited scheduled posts</li>
                <li><span className="check-icon">✓</span>Dedicated AI content assistant</li>
                <li><span className="check-icon">✓</span>Auto-scheduling & Auto-posting</li>
                <li><span className="check-icon">✓</span>AI Actions & Analytics</li>
                <li><span className="check-icon">✓</span>Team CRM extension</li>
                <li><span className="check-icon">✓</span>Priority support</li>
                <li><span className="check-icon">✓</span>Up to 5 users</li>
              </ul>
              <div className="card-footer">
                <div className="current-plan">
                  <span>✓</span> Current Plan
                </div>
              </div>
            </div>

            <div className="pricing-card enterprise">
              <div className="card-header">
                <div className="card-icon">🏢</div>
                <div className="card-title">Enterprise</div>
                <div className="card-subtitle">For large teams and organizations</div>
                <div className="card-price">$199<span>/mo</span></div>
              </div>
              <ul className="feature-list">
                <li><span className="check-icon">✓</span>Unlimited social accounts</li>
                <li><span className="check-icon">✓</span>Unlimited scheduled posts</li>
                <li><span className="check-icon">✓</span>White-label AI content</li>
                <li><span className="check-icon">✓</span>All automation features</li>
                <li><span className="check-icon">✓</span>Team training</li>
                <li><span className="check-icon">✓</span>White-label options</li>
                <li><span className="check-icon">✓</span>Dedicated account manager</li>
                <li><span className="check-icon">✓</span>Unlimited users</li>
                <li><span className="check-icon">✓</span>API access</li>
              </ul>
              <div className="card-footer">
                <button className="btn-card">Contact Sales →</button>
              </div>
            </div>
          </div>

          <div className="comparison-section">
            <div className="comparison-header">
              <h3>Plan Features Comparison</h3>
              <p>Compare all features across different plans</p>
            </div>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th className="highlight">Professional</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Social Accounts</td>
                  <td>5</td>
                  <td className="highlight">30</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Scheduled Posts</td>
                  <td>50/month</td>
                  <td className="highlight">Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>AI Content Assistant</td>
                  <td>—</td>
                  <td className="highlight">Advanced</td>
                  <td>Premium</td>
                </tr>
                <tr>
                  <td>Auto-Scheduling</td>
                  <td><span className="check-mark">✓</span></td>
                  <td><span className="check-mark purple">✓</span></td>
                  <td><span className="check-mark">✓</span></td>
                </tr>
                <tr>
                  <td>Auto-Posting</td>
                  <td>—</td>
                  <td><span className="check-mark purple">✓</span></td>
                  <td><span className="check-mark">✓</span></td>
                </tr>
                <tr>
                  <td>AI Advisor</td>
                  <td>—</td>
                  <td><span className="check-mark purple">✓</span></td>
                  <td><span className="check-mark">✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="payment" className={`tab-content ${activeTab === 'payment' ? 'active' : ''}`}>
          <div className="payment-cards-container">
            <div className="payment-card">
              <div className="payment-header">
                <div className="card-info">
                  <div className="card-icon-small">💳</div>
                  <div className="card-details">
                    <h4>Visa •••• 4242</h4>
                    <p>Expires 12/2026</p>
                  </div>
                </div>
                <span className="badge-default">Default</span>
              </div>
              <div className="payment-actions">
                <button className="payment-btn">Edit</button>
                <button className="payment-btn remove">Remove</button>
              </div>
            </div>

            <div className="payment-card mastercard">
              <div className="payment-header">
                <div className="card-info">
                  <div className="card-icon-small">💳</div>
                  <div className="card-details">
                    <h4>Mastercard •••• 8888</h4>
                    <p>Expires 08/2025</p>
                  </div>
                </div>
              </div>
              <div className="payment-actions">
                <button className="payment-btn">Set as Default</button>
                <button className="payment-btn">Edit</button>
                <button className="payment-btn remove">Remove</button>
              </div>
            </div>
          </div>

          <div className="add-payment">
            <div className="add-payment-icon">💳</div>
            <h3>Add Payment Method</h3>
            <p>Add a new credit or debit card</p>
          </div>

          <div className="secure-section">
            <div className="secure-icon">🔒</div>
            <div className="secure-text">
              <h3>Secure Payment Processing</h3>
              <p>All payment information is encrypted and securely processed. We never store your full credit card details on our servers. Payments are processed through industry-leading payment providers with PCI DSS Level 1 certification.</p>
            </div>
          </div>

          <div className="billing-settings">
            <div className="settings-header">
              <h3>Billing Settings</h3>
              <p>Manage your subscription preferences</p>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <h4>Auto-renewal</h4>
                <p>Automatically renew your subscription each billing cycle</p>
              </div>
              <div className="toggle"></div>
            </div>
          </div>
        </div>

        <div id="history" className={`tab-content ${activeTab === 'history' ? 'active' : ''}`}>
          <div className="history-header">
            <div>
              <h2>Payment History</h2>
              <p>View and download your invoices</p>
            </div>
            <button className="download-btn">⬇️ Download All</button>
          </div>

          <div className="invoices-list">
            <div className="invoice-item">
              <div className="invoice-left">
                <div className="invoice-icon">💵</div>
                <div className="invoice-details">
                  <h4>INV-2026-001</h4>
                  <p>January 1, 2026 • Professional</p>
                </div>
              </div>
              <div className="invoice-right">
                <div className="invoice-amount">$79.00</div>
                <span className="paid-badge">✓ paid</span>
                <div className="download-icon">⬇️</div>
              </div>
            </div>

            <div className="invoice-item">
              <div className="invoice-left">
                <div className="invoice-icon">💵</div>
                <div className="invoice-details">
                  <h4>INV-2025-012</h4>
                  <p>December 1, 2025 • Professional</p>
                </div>
              </div>
              <div className="invoice-right">
                <div className="invoice-amount">$79.00</div>
                <span className="paid-badge">✓ paid</span>
                <div className="download-icon">⬇️</div>
              </div>
            </div>

            <div className="invoice-item">
              <div className="invoice-left">
                <div className="invoice-icon">💵</div>
                <div className="invoice-details">
                  <h4>INV-2025-011</h4>
                  <p>November 1, 2025 • Professional</p>
                </div>
              </div>
              <div className="invoice-right">
                <div className="invoice-amount">$79.00</div>
                <span className="paid-badge">✓ paid</span>
                <div className="download-icon">⬇️</div>
              </div>
            </div>

            <div className="invoice-item">
              <div className="invoice-left">
                <div className="invoice-icon">💵</div>
                <div className="invoice-details">
                  <h4>INV-2025-010</h4>
                  <p>October 1, 2025 • Professional</p>
                </div>
              </div>
              <div className="invoice-right">
                <div className="invoice-amount">$79.00</div>
                <span className="paid-badge">✓ paid</span>
                <div className="download-icon">⬇️</div>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card blue">
              <div className="stat-label">Total Spent</div>
              <div className="stat-value">$316</div>
              <div className="stat-desc">Last 4 months</div>
            </div>

            <div className="stat-card purple">
              <div className="stat-label">Member Since</div>
              <div className="stat-value">Oct 2025</div>
              <div className="stat-desc">4 months ago</div>
            </div>

            <div className="stat-card green">
              <div className="stat-label">Payment Status</div>
              <div className="stat-value">Active</div>
              <div className="stat-desc">All payments current</div>
            </div>
          </div>
        </div>

        <div id="usage" className={`tab-content ${activeTab === 'usage' ? 'active' : ''}`}>
          <div className="usage-grid">
            <div className="usage-card">
              <div className="usage-header">
                <div className="usage-title">
                  <div className="usage-icon">🌐</div>
                  <div className="usage-name">
                    <h4>Social Accounts</h4>
                  </div>
                </div>
                <div className="usage-limit">12 of 20</div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '60%', background: '#1a202c'}}></div>
              </div>
              <div className="usage-text">8 remaining (60% used)</div>
            </div>

            <div className="usage-card posts">
              <div className="usage-header">
                <div className="usage-title">
                  <div className="usage-icon">📝</div>
                  <div className="usage-name">
                    <h4>Posts This Month</h4>
                  </div>
                </div>
                <div className="usage-limit">Unlimited</div>
              </div>
              <div className="info-box">
                <span>∞</span>
                <p>Unlimited usage available</p>
              </div>
            </div>

            <div className="usage-card ai">
              <div className="usage-header">
                <div className="usage-title">
                  <div className="usage-icon">✨</div>
                  <div className="usage-name">
                    <h4>AI Content Generated</h4>
                  </div>
                </div>
                <div className="usage-limit">Unlimited</div>
              </div>
              <div className="info-box">
                <span>∞</span>
                <p>Unlimited usage available</p>
              </div>
            </div>

            <div className="usage-card team">
              <div className="usage-header">
                <div className="usage-title">
                  <div className="usage-icon">👥</div>
                  <div className="usage-name">
                    <h4>Team Members</h4>
                  </div>
                </div>
                <div className="usage-limit">3 of 5</div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '60%', background: '#f97316'}}></div>
              </div>
              <div className="usage-text">2 remaining (60% used)</div>
            </div>
          </div>

          <div className="trends-section">
            <div className="trends-header">
              <h3>Monthly Usage Trends</h3>
              <p>Your usage over the last 6 months</p>
            </div>

            <div className="trend-item">
              <div className="trend-month">January 2026</div>
              <div className="trend-stats">
                <div className="trend-stat">📝 156 posts</div>
                <div className="trend-stat">🌐 12 accounts</div>
                <div className="trend-stat">✨ 89 AI</div>
              </div>
            </div>

            <div className="trend-item">
              <div className="trend-month">December 2025</div>
              <div className="trend-stats">
                <div className="trend-stat">📝 142 posts</div>
                <div className="trend-stat">🌐 11 accounts</div>
                <div className="trend-stat">✨ 78 AI</div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Payment;
