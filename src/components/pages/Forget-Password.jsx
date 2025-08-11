import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import './style/Forget-Password.css';
import forgetImg from "../../assets/ForgetPasswordassets.png";

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Reset password for:', email);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const illustrationVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotate: -5
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const formVariants = {
    hidden: { 
      opacity: 0, 
      x: 100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const buttonVariants = {
    idle: { 
      scale: 1,
      boxShadow: "0 4px 15px rgba(139, 92, 246, 0.2)"
    },
    hover: { 
      scale: 1.02,
      y: -2,
      boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.98,
      y: 0
    },
    submitting: {
      scale: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.8
      }
    }
  };

  const inputVariants = {
    idle: { 
      scale: 1,
      boxShadow: "0 0 0 0px rgba(139, 92, 246, 0)"
    },
    focus: { 
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const backgroundShapeVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundShape2Variants = {
    animate: {
      y: [0, 15, 0],
      x: [0, -15, 0],
      rotate: [0, -3, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  const backgroundShape3Variants = {
    animate: {
      y: [0, -10, 0],
      x: [0, 8, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  };

  // Reduce animations if user prefers reduced motion
  const getVariants = (variants) => shouldReduceMotion ? {} : variants;

  return (
    <motion.div 
      className="forget-password-container"
      variants={getVariants(containerVariants)}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="forget-password-card"
        variants={getVariants(cardVariants)}
      >
        
        {/* Illustration Section */}
        <motion.div 
          className="illustration-section"
          variants={getVariants(illustrationVariants)}
        >
          <motion.img 
            src={forgetImg} 
            alt="Reset Password" 
            className="illustration-img"
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          />
        </motion.div>
        
        {/* Form Section */}
        <motion.div 
          className="form-section"
          variants={getVariants(formVariants)}
        >
          <div className="form-content">
            <motion.h1 
              className="title"
              variants={getVariants(itemVariants)}
            >
              Forgot Your Password ?
            </motion.h1>

            <motion.form 
              className="form" 
              onSubmit={handleSubmit}
              variants={getVariants(itemVariants)}
            >
              <motion.div 
                className="input-group"
                variants={getVariants(itemVariants)}
              >
                <motion.label 
                  htmlFor="email" 
                  className="input-label"
                  variants={getVariants(itemVariants)}
                >
                  Email Address
                </motion.label>
                <motion.input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  variants={getVariants(inputVariants)}
                  initial="idle"
                  whileFocus="focus"
                  whileHover={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.button 
                type="submit" 
                className="reset-button"
                variants={getVariants(buttonVariants)}
                initial="idle"
                whileHover={!isSubmitting ? "hover" : "submitting"}
                whileTap={!isSubmitting ? "tap" : {}}
                animate={isSubmitting ? "submitting" : "idle"}
                disabled={isSubmitting}
              >
                <motion.span
                  animate={isSubmitting ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
                  transition={{ repeat: isSubmitting ? Infinity : 0, duration: 1 }}
                >
                  {isSubmitting ? "SENDING..." : "RESET PASSWORD"}
                </motion.span>
              </motion.button>

              <motion.div variants={getVariants(itemVariants)}>
                <Link 
                  to="/" 
                  className="back-link"
                  component={motion.a}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#8b5cf6",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to signin
                </Link>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="background-decorations"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div 
          className="bg-shape-1"
          variants={getVariants(backgroundShapeVariants)}
          animate="animate"
        />
        <motion.div 
          className="bg-shape-2"
          variants={getVariants(backgroundShape2Variants)}
          animate="animate"
        />
        <motion.div 
          className="bg-shape-3"
          variants={getVariants(backgroundShape3Variants)}
          animate="animate"
        />
      </motion.div>
    </motion.div>
  );
};

export default ForgetPassword;




