import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, XCircle, Star } from "lucide-react";
import Button from "../components/valueButton.js";
import "../styles/valueshowcase2.css";

const ValueShowcase2 = () => {
  const ref = useRef(null);
  // Lower the inView threshold to trigger animations sooner
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    if (isInView) {
      const animateCounter = (endValue, key) => {
        let currentValue = 0;
        const increment = endValue / 40;

        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= endValue) {
            clearInterval(counter);
            setCounts((prev) => ({ ...prev, [key]: endValue }));
          } else {
            setCounts((prev) => ({ ...prev, [key]: Math.floor(currentValue) }));
          }
        }, 50);
      };

      animateCounter(500, "clients");
      animateCounter(1200, "projects");
      animateCounter(99, "satisfaction");
    }
  }, [isInView]);

  const navigate = useNavigate();

  return (
    <section ref={ref} className="v2-showcase-container">
      <motion.div
        className="v2-content-wrapper"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.h2
          className="v2-heading"
          initial={{ opacity: 0, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          97% of Brands Fade. <br /> Yours Shines—With Onuel Creates! 🚀
        </motion.h2>

        <motion.p
          className="v2-description"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Every moment your content doesn’t stand out,{" "}
          <strong>you’re losing attention.</strong>
          <br />
          <span className="v2-text-highlight">
            88% of viewers won’t come back
          </span>{" "}
          after a bad experience.
          <br />
          We make sure that NEVER happens to you.
        </motion.p>

        <div className="v2-grid">
          <motion.div
            className="v2-card"
            // Red card slides in from the left
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="v2-card-header">
              <XCircle className="v2-icon v2-text-danger" />
              <h3>Why Most Brands Fail 🚨</h3>
            </div>
            <ul>
              <li>🚨 94% of people judge brands by their content.</li>
              <li>⚡ 47% expect attention-grabbing content in 2 seconds.</li>
              <li>💰 Weak messages = lost customers.</li>
              <li>🔎 Poor content = no exposure.</li>
            </ul>
          </motion.div>

          <motion.div
            className="v2-card"
            // Green card slides in from the right
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="v2-card-header">
              <CheckCircle className="v2-icon v2-text-success" />
              <h3>How We Make You Win 🏆</h3>
            </div>
            <ul>
              <li>🎬 Eye-catching videos that capture attention.</li>
              <li>🎤 Voiceovers that speak clearly to your audience.</li>
              <li>📈 Content that helps your brand grow.</li>
              <li>🔥 Smooth editing that brings your ideas to life.</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="v2-cta-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Button
            className="v2-cta-button"
            // onClick={() => navigate("/contact")}
          >
            🔥 Grow Your Brand — Start Now!
          </Button>
        </motion.div>

        <div className="v2-stats-container">
          <motion.div
            className="v2-stat-item"
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="v2-stats-number v2-text-primary">
              {counts.clients}
            </span>
            + Thrilled Clients
          </motion.div>
          <motion.div
            className="v2-stat-item"
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="v2-stats-number v2-text-accent">
              {counts.projects}
            </span>
            + Successful Projects
          </motion.div>
          <motion.div
            className="v2-stat-item"
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="v2-stats-number v2-text-danger">
              {counts.satisfaction}
            </span>
            % Client Satisfaction
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValueShowcase2;
