import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/socialproof.css";

const AnimatedCounter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.max(10, Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <span ref={ref} className="counter">
      {count}
      {suffix}
    </span>
  );
};

const SocialProof = () => {
  return (
    <div className="social-proof-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-title"
      >
        Why Clients Trust Us
      </motion.h2>

      <div className="stats-container">
        {[
          { label: "Projects Done", value: 120, suffix: "+" },
          { label: "Years of Experience", value: 10, suffix: "" },
          { label: "5-Star Reviews", value: 200, suffix: "+" },
          { label: "Leads Generated", value: 100, suffix: "M+" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="stat-value">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="testimonial-box"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="testimonial-text">
          "🔥 O'Nuél Creates completely upgraded my brand! The videos and
          content were amazing, and it really helped my business grow. I highly
          recommend them! 🔥"
        </p>
        <h4 className="testimonial-author">- Tobi Adebayo, CEO of Nova Co.</h4>
      </motion.div>
    </div>
  );
};

export default SocialProof;
