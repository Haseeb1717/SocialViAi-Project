import React from "react";
import './DashboardStyle/DashboardHome.css';

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

          <h1 className="page-title">Welcome back, Haseeb! 👋</h1>
          <p className="page-subtitle">
            Here's what's happening with your business today.
          </p>
        </div>
</div>
      
      {/* Scoped CSS */}
      <style>{`
      `}</style>
    </>
  );
};

export default DashboardHome;
