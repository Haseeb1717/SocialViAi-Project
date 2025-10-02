import React from "react";

const DashboardHome = () => {
  return (
    <>
      <div className="content-area">
        {/* Header Section */}
        <div className="content-header slide-up">
          <div className="breadcrumb">
            <div className="breadcrumb-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              Home Page
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
            <div className="breadcrumb-item">Dashboard</div>
          </div>

          <h1 className="page-title">Welcome back, John! 👋</h1>
          <p className="page-subtitle">
            Here's what's happening with your business today.
          </p>
        </div>
</div>
      
      {/* Scoped CSS */}
      <style>{`
        .content-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: var(--background);
          overflow: hidden;
        }

        .content-header {
          padding: 40px 40px 0;
          background: var(--background);
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .page-title {
          font-size: 36px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .page-subtitle {
          color: var(--text-secondary);
          font-size: 16px;
          margin-bottom: 32px;
        }

        .main-content {
          flex: 1;
          padding: 0 40px 40px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
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

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .card {
          background: var(--card-bg, #fff);
          border: 1px solid var(--border, #e5e7eb);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
        }

        .card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-primary, #111827);
        }

        .card p {
          font-size: 14px;
          color: var(--text-secondary, #6b7280);
        }
      `}</style>
    </>
  );
};

export default DashboardHome;
