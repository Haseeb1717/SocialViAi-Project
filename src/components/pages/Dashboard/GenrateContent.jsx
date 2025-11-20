import { useState, useRef } from 'react';
import { ChevronRight, Sparkles, History, Upload, ChevronDown, X } from 'lucide-react';
import './DashboardStyle/GenrateContent.css';

export default function ContentGenerator() {
  const [content, setContent] = useState('');
  const [selectedType, setSelectedType] = useState('Video');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [history, setHistory] = useState([
    {
      id: '1',
      content: 'Create a promotional video about our new product launch',
      type: 'Video',
      timestamp: new Date(Date.now() - 3600000),
      hasImage: false
    },
    {
      id: '2',
      content: 'Write an engaging social media post for Instagram',
      type: 'Social Post',
      timestamp: new Date(Date.now() - 7200000),
      hasImage: true
    },
    {
      id: '3',
      content: 'Generate a blog article about AI trends in 2024',
      type: 'Blog Article',
      timestamp: new Date(Date.now() - 86400000),
      hasImage: false
    }
  ]);

  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  const contentTypes = [
    'Video',
    'Social Post',
    'Blog Article',
    'Ad Copy',
    'Caption',
    'Email'
  ];

  const handleTextChange = (e) => {
    setContent(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.max(60, textareaRef.current.scrollHeight) + 'px';
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        setTimeout(() => {
          setUploadedImage(event.target.result);
          setIsLoading(false);
        }, 1000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = () => {
    if (content.trim()) {
      const newItem = {
        id: Date.now().toString(),
        content: content,
        type: selectedType,
        timestamp: new Date(),
        hasImage: !!uploadedImage
      };
      setHistory([newItem, ...history]);
      console.log(`Generating ${selectedType}:`, content);
    } else {
      textareaRef.current?.focus();
    }
  };

  const formatTime = (date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <div className="content-generator-container">
      <div className="background-iframe-wrapper">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-EnKkVOizbGqW06WwYMKtb3XD/"
          className="background-iframe"
          title="background"
        />
        <button className="background-button-overlay" />
      </div>

      <div className="main-content-wrapper">
        <div className="header-container">
          <div className="header-left">
            <div className="breadcrumb">
              <span>Home Page</span>
              <ChevronRight size={16} />
              <span>Dashboard</span>
            </div>
            <h1 className="page-title">Welcome back, John! 👋</h1>
          </div>

          <div className="header-buttons">
            <button className="credits-button">
              Credits (5)
            </button>
            <button
              onClick={() => setIsHistoryOpen(true)}
              className="history-button"
            >
              <History size={16} />
              History
            </button>
          </div>
        </div>

        <button className="about-button">
          About Content Generation
        </button>

        <div className="generator-box">
          <textarea
            ref={textareaRef}
            value={content}
            onChange={handleTextChange}
            placeholder="Type your idea here..."
            spellCheck={false}
            className="content-textarea"
          />

          {isLoading && (
            <div className="loading-container">
              <div className="loading-spinner" />
              <div className="loading-text">Uploading image...</div>
            </div>
          )}

          {uploadedImage && (
            <div className="uploaded-image-container">
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="uploaded-image"
              />
              <button
                onClick={() => {
                  setUploadedImage(null);
                  if (fileInputRef.current) fileInputRef.current.value = '';
                }}
                className="remove-image-button"
              >
                <X size={20} />
              </button>
            </div>
          )}

          <div className="controls-container">
            <div className="controls-left">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="upload-button"
              >
                <Upload size={16} />
                Upload
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="file-input-hidden"
              />

              <div className="dropdown-wrapper">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className="dropdown-button"
                >
                  <ChevronDown size={16} />
                  <span>{selectedType}</span>
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    {contentTypes.map((type) => (
                      <div
                        key={type}
                        onClick={() => {
                          setSelectedType(type);
                          setIsDropdownOpen(false);
                        }}
                        className="dropdown-item"
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleCreate}
              className="create-button"
            >
              <Sparkles size={16} />
              Create {selectedType}
            </button>
          </div>
        </div>
      </div>

      {isHistoryOpen && (
        <>
          <div
            onClick={() => setIsHistoryOpen(false)}
            className="history-overlay"
          />
          <div className="history-panel">
            <div className="history-header">
              <h2 className="history-title">History</h2>
              <button
                onClick={() => setIsHistoryOpen(false)}
                className="history-close-button"
              >
                <X size={20} />
              </button>
            </div>
            <div className="history-content">
              {history.length === 0 ? (
                <div className="history-empty">
                  <History size={48} className="history-empty-icon" />
                  <p>No history yet</p>
                </div>
              ) : (
                <div className="history-items">
                  {history.map((item) => (
                    <div
                      key={item.id}
                      className="history-item"
                    >
                      <div className="history-item-header">
                        <span className="history-item-type">
                          {item.type}
                        </span>
                        <span className="history-item-time">{formatTime(item.timestamp)}</span>
                      </div>
                      <p className="history-item-content">{item.content}</p>
                      {item.hasImage && (
                        <span className="history-item-attachment">📎 Image attached</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
