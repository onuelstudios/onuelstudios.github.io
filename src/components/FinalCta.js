import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/finalCta.css";

const FinalCta = () => {
  return (
    <motion.div
      className="final-cta-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="cta-title">
        Your Content Should Grow Your Brand. Let’s Create It! 🚀
      </h2>
      <p className="cta-description">
        Great content isn’t just about looking good—it should build trust, drive
        engagement, and grow your audience nonstop.
      </p>
      <ul className="cta-benefits">
        <li>🔥 Ads, videos, and voiceovers built to drive real results.</li>
        <li>🔥 Storytelling crafted to connect and build loyalty.</li>
        <li>🔥 Content that turns followers into loyal fans and customers.</li>
      </ul>
      <p className="cta-action">Success favors action. Don’t wait.</p>
      <div className="cta-buttons">
        <Link
          // to="/contact"
          className="cta-button primary"
          onClick={() => {
            if (typeof fbq !== "undefined") {
              fbq("track", "ViewContent", {
                content_name: "Launch Website Now Click",
              });
            }
          }}
        >
          🎬 Start Your Project Now
        </Link>

        <a
          href="https://wa.me/2348064452171"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button secondary"
          onClick={() => {
            if (typeof fbq !== "undefined") {
              fbq("track", "Contact", { content_name: "WhatsApp Chat" });
            }
          }}
        >
          📲 Chat on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default FinalCta;
