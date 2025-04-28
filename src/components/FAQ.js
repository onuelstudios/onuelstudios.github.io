import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input.js";
import { Button } from "./ui/button.js";
import { Card, CardContent } from "./ui/card.js";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Mic, ThumbsUp, ThumbsDown } from "lucide-react";
import "../styles/faq.css";

const faqs = [
  {
    id: 1,
    question: "How long to complete a project?",
    answer:
      "\ud83d\ude80 Fast, efficient, and built for success! Most projects are completed in 2-4 weeks, depending on complexity. Need it sooner? Rush options available.",
  },
  {
    id: 2,
    question: "Will my content work on all platforms?",
    answer:
      "\ud83d\udcf1  Absolutely! Whether it's for social media, ads, or events, we ensure your content looks stunning and performs flawlessly across every device and platform.",
  },
  {
    id: 3,
    question: "Do you offer support after the project?",
    answer:
      "\ud83d\udd27 Yes! We don't just deliver and walk away. Our post-project support ensures everything stays fresh, engaging, and aligned with your brand’s evolution.",
  },
  {
    id: 4,
    question: "What makes Onuel Creates different?",
    answer:
      "\ud83d\udd25 Onuel Creates blends creativity with strategy. We don’t just produce—We craft content that grabs attention and makes an impact. From viral ads to cinematic videos, everything we do is designed to elevate your brand to the next level.",
  },
  {
    id: 5,
    question: "What if I’m not sure what I want?",
    answer:
      "\ud83c\udfaf No worries! We work closely with you to understand your vision and bring it to life. Our collaborative process ensures you get content that not only meets but exceeds your expectations.",
  },
  {
    id: 6,
    question: "How much do your services cost?",
    answer:
      "\ud83d\udcb0 The investment depends on your needs. We offer flexible pricing that ensures you get the best value for your project. Great content is an investment that brings massive returns—let’s make sure yours does just that.",
  },
  {
    id: 7,
    question: "What’s the next step?",
    answer:
      "\ud83d\ude80 Let’s get started! Click below to take your brand to the next level.",
  },
];

export default function UltimateFAQ() {
  const [search, setSearch] = useState("");
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [feedback, setFeedback] = useState({});
  const [isListening, setIsListening] = useState(false);
  let recognition;

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event) =>
        setSearch(event.results[0][0].transcript);
      recognition.onerror = () => setIsListening(false);
    }
  }, []);

  const startListening = () => {
    if (recognition) recognition.start();
    else alert("Your browser does not support speech recognition.");
  };

  const handleFeedback = (id, type) => {
    setFeedback((prev) => ({ ...prev, [id]: prev[id] === type ? null : type }));
  };

  const filteredFAQs = search
    ? faqs.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
      )
    : faqs.slice(0, 4);

  const navigate = useNavigate();

  return (
    <div className="faq-container">
      <h1 className="faq-title">
        Got Questions? Here’s What You Need to Know.
      </h1>
      <p className="faq-description">
        At Onuel Creates, we make content that boosts your brand and gets real
        results.
      </p>

      <div className="faq-search-container">
        <Input
          className="faq-search-input"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="faq-search-icon" />
        <Mic
          className={`faq-mic-icon ${isListening ? "listening" : ""}`}
          onClick={startListening}
        />
      </div>

      <AnimatePresence>
        {filteredFAQs.map((faq) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="faq-card">
              <CardContent
                className="faq-question"
                onClick={() =>
                  setSelectedFAQ(selectedFAQ === faq.id ? null : faq.id)
                }
              >
                <span>{faq.question}</span>
              </CardContent>
              {selectedFAQ === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-answer"
                >
                  <p>{faq.answer}</p>
                  <div className="faq-feedback">
                    <ThumbsUp
                      className={`feedback-icon ${
                        feedback[faq.id] === "like" ? "liked" : ""
                      }`}
                      onClick={() => handleFeedback(faq.id, "like")}
                    />
                    <ThumbsDown
                      className={`feedback-icon ${
                        feedback[faq.id] === "dislike" ? "disliked" : ""
                      }`}
                      onClick={() => handleFeedback(faq.id, "dislike")}
                    />
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
      <Button className="faq-cta-button" onClick={() => navigate("")}>
        Need More Help? Contact Us!
      </Button>
    </div>
  );
}
