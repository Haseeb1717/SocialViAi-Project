import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is SocialVi AI?",
      answer:
        "SocialVi AI is an all-in-one social media management software that automates content creation, scheduling, analytics, and engagement across multiple platforms using advanced AI tools.",
    },
    {
      question: "How does content scheduling work?",
      answer:
        "You can create posts and schedule them across platforms. Our smart scheduling system automatically picks the best time for engagement based on audience activity.",
    },
    {
      question: "Can I use SocialVi AI for multiple accounts?",
      answer:
        "Yes, SocialVi AI supports managing multiple social accounts simultaneously, allowing you to organize content by brand or platform with ease.",
    },
    {
      question: "Is there a free plan available?",
      answer:
        "Yes, SocialVi AI offers a free plan with limited features. You can upgrade anytime to unlock full automation, analytics, and premium tools.",
    },
    {
      question: "How secure is my account data?",
      answer:
        "Your security is our priority. We use strong encryption, OAuth-based authentication, and optional two-factor authentication to ensure your data remains safe.",
    },
  ];

  return (
    <>
      <style>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          margin-top: 40px;
        }

        .gradient-header {
          height: 80px;
          background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.1) 0%, transparent 50%);
        }

        .faq-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 40px;
          border-bottom: 1px solid #f0f0f0;
        }

        .faq-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .faq-title h2 {
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .faq-icon {
          color: #6366f1;
        }

        .faq-list {
          padding: 30px 40px 50px;
        }

        .faq-item {
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          margin-bottom: 16px;
          overflow: hidden;
          transition: all 0.2s ease-in-out;
        }

        .faq-item.active {
          border-color: #6366f1;
          background: #f9f9ff;
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          cursor: pointer;
          background: transparent;
          color: #1a1a1a;
          font-weight: 500;
          font-size: 15px;
          transition: background 0.2s;
        }

        .faq-question:hover {
          background: #f5f5f5;
        }

        .faq-answer {
          padding: 0 20px 20px;
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .faq-header, .faq-list {
            padding: 20px;
          }
        }
      `}</style>

      <div className="container">
        <div className="gradient-header"></div>

        <div className="faq-header">
          <div className="faq-title">
            <HelpCircle className="faq-icon" size={28} />
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                {activeIndex === index ? (
                  <ChevronUp size={20} color="#6366f1" />
                ) : (
                  <ChevronDown size={20} color="#666" />
                )}
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
