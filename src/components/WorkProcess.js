import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaRegLightbulb,
  FaVideo,
  FaCut,
  FaShareAlt,
} from "react-icons/fa";
import "../styles/workprocess.css";

const steps = [
  {
    icon: <FaHandshake />,
    title: "Talk With Us",
    description:
      "We’ll learn about your goals and how we can bring your idea to life.",
  },
  {
    icon: <FaRegLightbulb />,
    title: "Plan & Create",
    description:
      "We’ll come up with a plan that fits your brand and makes you stand out.",
  },
  {
    icon: <FaVideo />,
    title: "Filming & Shooting",
    description:
      "We’ll film high-quality content that tells your story and grabs attention.",
  },
  {
    icon: <FaCut />,
    title: "Edit & Polish",
    description:
      "We’ll perfect your content with smooth editing to make it look great.",
  },
  {
    icon: <FaShareAlt />,
    title: "Launch & Share",
    description:
      "We’ll help your project reach the right audience and make sure it gets noticed.",
  },
];

const WorkProcess = () => {
  return (
    <div className="work-process-section">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        How We Deliver Results
      </motion.h2>
      <div className="process-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="process-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon-container">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.a
        href="tel:+2348064452171"
        className="cta-button"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        onClick={(e) => {
          if (!/Mobi|Android/i.test(navigator.userAgent)) {
            e.preventDefault();
            alert("Please use a mobile device to call.");
          } else {
            if (typeof fbq !== "undefined") {
              fbq("track", "Contact", { content_name: "Phone Call" });
            }
          }
        }}
      >
        Book a Call and Boost Your Brand
      </motion.a>
    </div>
  );
};

export default WorkProcess;
