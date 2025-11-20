import React, { useState } from 'react';
import { Users, Target, Heart } from 'lucide-react';
import './DashboardStyle/AudienceTarget.css';

const AudienceTargeting = () => {
  const [selectedGender, setSelectedGender] = useState('All');
  const [ageRange, setAgeRange] = useState([18, 65]);
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    instagram: true,
    facebook: false,
    twitter: true,
    linkedin: false,
    tiktok: false,
  });

  const platforms = [
    { id: 'instagram', name: 'Instagram', reach: '2.1M' },
    { id: 'facebook', name: 'Facebook', reach: '3.5M' },
    { id: 'twitter', name: 'Twitter', reach: '890K' },
    { id: 'linkedin', name: 'LinkedIn', reach: '1.2M' },
    { id: 'tiktok', name: 'TikTok', reach: '1.8M' },
  ];

  const togglePlatform = (platformId) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [platformId]: !prev[platformId],
    }));
  };

  return (

<div className="audience-targeting">
      <div className="audience-container">
        <div className="audience-header">
          <h1 className="audience-title">Audience Targeting</h1>
          <p className="audience-subtitle">
            Define and reach your ideal audience across social media platforms
          </p>
        </div>

        <div className="audience-grid">
          <div className="audience-left">
            <div className="card">
              <div className="card-header">
                <Users className="card-icon" />
                <h2 className="card-title">Demographics</h2>
              </div>

              <div className="demographics-section">
                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <div className="gender-buttons">
                    {['All', 'Male', 'Female', 'Other'].map((gender) => (
                      <button
                        key={gender}
                        onClick={() => setSelectedGender(gender)}
                        className={`gender-btn ${selectedGender === gender ? 'active' : ''}`}
                      >
                        {gender}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Age Range: {ageRange[0]} - {ageRange[1]} years
                  </label>
                  <div className="age-range-container">
                    <input
                      type="range"
                      min="18"
                      max="65"
                      value={ageRange[0]}
                      onChange={(e) =>
                        setAgeRange([parseInt(e.target.value), ageRange[1]])
                      }
                      className="age-slider"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Location</label>
                  <select className="form-select">
                    <option>Select location</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Language</label>
                  <select className="form-select">
                    <option>Select language</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <Target className="card-icon" />
                <h2 className="card-title">Target Platforms</h2>
              </div>

              <div className="platforms-grid">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => togglePlatform(platform.id)}
                    className={`platform-card ${selectedPlatforms[platform.id] ? 'active' : ''}`}
                  >
                    <div className="platform-content">
                      <div className="platform-info">
                        <div className="platform-name">{platform.name}</div>
                        <div className="platform-reach">Reach: {platform.reach}</div>
                      </div>
                      <div className={`checkbox ${selectedPlatforms[platform.id] ? 'checked' : ''}`}>
                        {selectedPlatforms[platform.id] && (
                          <svg
                            className="checkbox-icon"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <Heart className="card-icon" />
                <h2 className="card-title">Interests & Behaviors</h2>
              </div>
            </div>
          </div>

          <div className="audience-right">
            <div className="card">
              <h2 className="card-title" style={{ marginBottom: '1.5rem' }}>
                Audience Summary
              </h2>

              <div className="summary-card">
                <div className="summary-item">
                  <div className="summary-label">Estimated Reach</div>
                  <div className="summary-reach">
                    <span className="reach-high">2.4M</span>
                    <span className="reach-separator"> - </span>
                    <span className="reach-high">3.8M</span>
                  </div>
                </div>

                <div className="summary-item">
                  <div className="summary-label">Selected Platforms</div>
                  <div className="summary-platforms">
                    <span className="tag">Instagram</span>
                    <span className="tag">Twitter</span>
                  </div>
                </div>

                <div className="summary-item">
                  <div className="summary-label">Interests</div>
                  <div className="summary-interests">
                    <span className="tag">Technology</span>
                    <span className="tag">Fitness & Health</span>
                  </div>
                </div>

                <div className="summary-item">
                  <div className="summary-label">Age Range</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>
                    18 - 65 years
                  </div>
                </div>
              </div>

              <div className="button-group">
                <button className="btn btn-primary">Save Audience</button>
                <button className="btn btn-secondary">Export Data</button>
              </div>
            </div>

            <div className="card">
              <h2 className="card-title" style={{ marginBottom: '1rem' }}>
                Audience Insights
              </h2>
              <div className="insights-card">
                <div className="insight-item">
                  <span className="insight-bullet">•</span>
                  <span className="insight-text">
                    Peak engagement times: 9-11 AM, 6-8 PM
                  </span>
                </div>
                <div className="insight-item">
                  <span className="insight-bullet">•</span>
                  <span className="insight-text">
                    Most active on Instagram and Twitter
                  </span>
                </div>
                <div className="insight-item">
                  <span className="insight-bullet">•</span>
                  <span className="insight-text">
                    Video content performs 2.3x better
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
{/* Scoped CSS */}

<style>{`
    `}</style>
      
export default AudienceTargeting;
