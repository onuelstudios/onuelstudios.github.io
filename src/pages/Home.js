// Import necessary hooks & dependencies
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import testimonials from "../data/testimonials.js";
import SocialProof from "../components/SocialProof.js";
import ValueShowcase2 from "../components/ValueShowcase2.js";
import WorkProcess from "../components/WorkProcess.js";
import result from "../assets/images/result.png";
import FAQ from "../components/FAQ.js";
import FinalCta from "../components/FinalCta.js";
import "../styles/home.css";
import "../styles/sml-services.css";
import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.webp";
import brand3 from "../assets/images/brand3.webp";
import project1 from "../assets/images/project1.webp";
import project2 from "../assets/images/project2.webp";
import project3 from "../assets/images/project3.webp";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dynamic Hero Text Animation
  const words = ["Sales", "Clients", "Growth", "Profit"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const trackProjectClick = (projectName) => {
    if (typeof fbq !== "undefined") {
      fbq("track", "ViewContent", { content_name: projectName });
    }
  };

  // Testimonial Slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Auto-play every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Form State & Submission
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post(
      //   "https://leadform-backend-production.up.railway.app/submit", // ✅ UPDATED to public URL
      //   formData
      // );
      // // FIRE Facebook Pixel event
      // if (typeof fbq !== "undefined") {
      //   fbq("track", "Lead", {
      //     content_name: "Free Audit Form Submission",
      //   });
      // }
      setMessage(response.data.message);
      setFormData({ name: "", email: "" }); // Reset form
    } catch (error) {
      console.error(error); // ✅ Still good for debugging
      setMessage("Complete payment to activate the form.");
    }
  };

  const navigate = useNavigate();

  // Services Data
  const services = [
    {
      title: "Video",
      description: "Ads and videos that bring you customers.",
      icon: "🎥",
    },
    {
      title: "Voiceover",
      description: "Clear, professional voice tracks.",
      icon: "🎙️",
    },
    {
      title: "Ads",
      description: "Simple ads that sell more.",
      icon: "📣",
    },
    {
      title: "Live Events",
      description: "Host shows that connect with people.",
      icon: "🎤",
    },
    {
      title: "Editing",
      description: "Cut and join clips for a smooth story.",
      icon: "✂️",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">
          We Create Content That Brings{" "}
          <span className={`dynamic-word ${fade ? "fade-in" : "fade-out"}`}>
            {words[currentWordIndex]}
          </span>
        </h1>
        <p className="hero-text">
          Premium video ads, voiceovers &amp; production that deliver real
          results. <strong>Every penny works for you.</strong>
        </p>

        <Link
          // to="/portfolio"
          className="hero-button"
          onClick={() => {
            if (typeof fbq !== "undefined") {
              fbq("track", "ViewContent", {
                content_name: "See Our Work Button",
              });
            }
          }}
        >
          See Our Work
        </Link>
      </div>

      {/* Trust & Authority Section */}
      <div className="trust-section">
        <h2 className="trust-title">🏆 Trusted by Top Brands</h2>

        {/* Brand Logos */}
        <div className="brand-logos">
          <img src={brand1} alt="Brand 1" />
          <img src={brand2} alt="Brand 2" />
          <img src={brand3} alt="Brand 3" />
        </div>

        {/* Quick Stats */}
        <p className="quick-stats">
          🎬 400+ Videos | 🎙️ 500+ Voiceovers | ⭐⭐⭐⭐⭐ 5-Star Client Reviews
        </p>
      </div>

      {/* Why Clients Love O'Nuel Studios */}
      <section className="why-clients-love-section">
        <div className="why-clients-love-container">
          <h2 className="why-clients-love-title" data-aos="fade-up">
            💡 Why Clients Love{" "}
            <span className="why-clients-love-highlight">O'Nuel Studios</span>
          </h2>
          <p
            className="why-clients-love-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We don’t just create videos—we help you grow your business and get
            real results.
          </p>

          <div className="why-clients-love-grid">
            {[
              "400+ quality videos delivered",
              "5,000+ voiceovers done for clients",
              "Over 10 million views and leads generated",
              "We create ads, edit videos, and cover live events",
            ].map((text, index) => (
              <div
                key={index}
                className="why-clients-love-item"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <span className="why-clients-love-icon">✔</span>
                <p className="why-clients-love-text">{text}</p>
              </div>
            ))}
          </div>

          <div
            className="why-clients-love-image-container"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src={result}
              alt="Client Results"
              className="why-clients-love-image"
            />
          </div>
        </div>
        {/* Why Choose Us Button */}
        <div
          className="why-choose-us-container"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link
            // to="/about"
            className="why-choose-us-button"
            onClick={() => {
              if (typeof fbq !== "undefined") {
                fbq("track", "ViewContent", {
                  content_name: "Why Choose Us Button",
                });
              }
            }}
          >
            🚀 Why Choose Us
          </Link>
        </div>
      </section>

      {/* Testimonial Slider */}
      <div className="testimonial-slider">
        <button
          className="slider-btn slider-btn-left"
          onClick={prevTestimonial}
        >
          ‹
        </button>
        <div className="testimonial-content">
          <p className="testimonial-text">
            "{testimonials[currentIndex].feedback}"
          </p>
          <h3 className="client-name">
            {testimonials[currentIndex].name} -{" "}
            {testimonials[currentIndex].role}
          </h3>
        </div>
        <button
          className="slider-btn slider-btn-right"
          onClick={nextTestimonial}
        >
          ›
        </button>
      </div>

      {/* Irresistible Offer Section */}
      <div className="offer-section">
        <h2 className="offer-title">
          🚀 Get a FREE Review of Your Ads & Content – Only a Few Spots Left!
        </h2>
        <p className="offer-text">
          We’ll show you what’s stopping you from getting more views, clicks,
          and sales — all in 24 hours.
        </p>

        {/* Offer Form */}
        <form className="offer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="offer-button">
            Claim Your Free Review
          </button>
        </form>

        {/* Form Submission Message */}
        {message && <p className="form-message">{message}</p>}
      </div>

      {/* SHOWCASE SECTION */}

      <div className="showcase-work">
        <h2 className="showcase-title">See Our Work in Action</h2>
        <p className="showcase-subtitle">
          Video ads, brand films & voiceovers that get real results.
        </p>

        <div className="projects-container">
          <div className="project-card">
            <h3>Event Video 🎥</h3>
            <p>
              <strong>Client:</strong> NovaTech Solutions
            </p>
            <p>
              <strong>What We Did:</strong> Produced a 30s cinematic ad with
              professional voiceover.
            </p>
            <p>
              <strong>Result:</strong> Boosted views by 300%.
            </p>

            <img
              src={project1}
              alt="E-Commerce Preview"
              className="project-image"
            />
            <Link
              // to="/portfolio/project1"
              className="project-button"
              onClick={() => trackProjectClick("Project 1")}
            >
              View Project
            </Link>
          </div>

          <div className="project-card">
            <h3>Ad Video 🎬</h3>
            <p>
              <strong>Client:</strong> Elite Fashion House
            </p>
            <p>
              <strong>What We Did:</strong> Produced a 45s cinematic video with
              premium voiceover.
            </p>
            <p>
              <strong>Result:</strong> +250% engagement in 30 days.
            </p>
            <img
              src={project2}
              alt="Luxury Brand Preview"
              className="project-image"
            />
            <Link
              // to="/portfolio/project2"
              className="project-button"
              onClick={() => trackProjectClick("Project 2")}
            >
              View Project
            </Link>
          </div>

          <div className="project-card">
            <h3>Music Video 🎶</h3>
            <p>
              <strong>Client:</strong> Aya Tone
            </p>
            <p>
              <strong>What We Did:</strong> Directed & edited a cinematic video
              with pro voiceover.
            </p>
            <p>
              <strong>Result:</strong> 1M+ views in 30 days.
            </p>
            <img
              src={project3}
              alt="SaaS Website Preview"
              className="project-image"
            />
            <Link
              // to="/portfolio/project3"
              className="project-button"
              onClick={() => trackProjectClick("Project 3")}
            >
              View Project
            </Link>
          </div>
        </div>

        <Link
          // to="/contact"
          className="cta-button"
          onClick={() => {
            if (typeof fbq !== "undefined") {
              fbq("track", "ViewContent", {
                content_name: "Get a Custom Website",
              });
            }
          }}
        >
          🔹 Get Started Today!
        </Link>
      </div>

      {/* ========== SERVICES SECTION ========== */}
      <section className="trust-services-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="trust-services-title text-3xl font-bold text-center mb-8"
        >
          Our Services
        </motion.h2>
        <div className="trust-services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="trust-service-card shadow-lg rounded-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="trust-service-icon text-4xl">
                {service.icon}
              </span>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="mt-2">{service.description}</p>{" "}
              {/* Removed text-gray-600 */}
            </motion.div>
          ))}
        </div>
        <motion.button
          className="trust-services-cta-button py-3 px-6 text-lg mt-8 block mx-auto rounded-lg shadow-md"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            if (typeof fbq !== "undefined") {
              fbq("track", "ViewContent", { content_name: "Services Page" });
            }
            // navigate("/services");
          }}
        >
          Learn More →
        </motion.button>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <SocialProof />

      {/* ========== FINAL HIGH-CONVERTING CALL-TO-ACTION SECTION ========== */}
      <div className="final-cta-section">
        <h2 className="cta-title">Make Your Brand Shine in One Click!</h2>
        <p className="cta-subtext">
          Don’t settle for average. Get content that makes your brand stand out.
        </p>
        <div className="cta-buttons">
          <a
            className="cta-button primary"
            href="tel:+2348064452171"
            onClick={(e) => {
              if (window.innerWidth >= 768) {
                e.preventDefault();
                alert("Please use a mobile device to call.");
              } else {
                if (typeof fbq !== "undefined") {
                  fbq("track", "Contact", { content_name: "Phone Call" });
                }
              }
            }}
          >
            🔥 Get Your Free Call
          </a>

          <Link
            // to="/contact"
            className="cta-button secondary"
            onClick={() => {
              if (typeof fbq !== "undefined") {
                fbq("track", "ViewContent", {
                  content_name: "Launch Project Click",
                });
              }
            }}
          >
            🚀 Start Your Project Now
          </Link>

          <a
            href="https://wa.me/2348064452171"
            className="cta-button whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof fbq !== "undefined") {
                fbq("track", "Contact", { content_name: "WhatsApp Chat" });
              }
            }}
          >
            💬 Chat with Us on WhatsApp
          </a>
        </div>
      </div>

      {/* VALUE SHOWCASE SECTION */}
      <ValueShowcase2 />

      {/* WORKPROCESS SECTION */}
      <WorkProcess />
      {/* FAQ SECTION */}
      <FAQ />
      {/* FINAL CTA SECTION */}
      <FinalCta />
    </div>
  );
}

export default Home;
