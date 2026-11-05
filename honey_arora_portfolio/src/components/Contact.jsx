import { useLayoutEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ToastContainer, toast } from "react-toastify";

import CTAButton from "./CTAButton";
import "../styles/Contact.css";
import "react-toastify/dist/ReactToastify.css";


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);



useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const leftElements = [
      ".contact-eyebrow",
      ".contact-heading",
      ".contact-description",
      ".contact-direct",
    ];

    // Left content: subtle reveal
    gsap.fromTo(
      leftElements,
      {
        opacity: 0,
        y: 18,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 0.5,
        },
      }
    );

    // Form: same-time reveal, less movement
    gsap.fromTo(
      ".contact-form-card",
      {
        opacity: 0,
        y: 18,
      },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 0.5,
        },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);



  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile" && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured yet.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          phone_number: formData.mobile,
          message: formData.message.trim(),
        },
        publicKey,
      );

      toast.success("Thank you! Your enquiry has been sent.");

      setFormData({
        name: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Message could not be sent. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="contact-container">
        <div className="contact-left">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            LET'S MAKE IT HAPPEN
          </span>

          <h2 className="contact-heading">
            HAVE A VISION?
            <br />
            <span>LET'S BUILD IT.</span>
          </h2>

          <p className="contact-description">
            Whether you're looking for your dream property or exploring an
            investment opportunity, let's start a conversation. Share your
            details and we'll get back to you.
          </p>

          <div className="contact-direct">
            <span className="contact-direct-label">
              PREFER A DIRECT CONVERSATION?
            </span>

            <div className="contact-cta">
              <CTAButton>LET'S TALK</CTAButton>
            </div>

            <span className="contact-direct-note">
              We're just one conversation away.
            </span>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-top">
            <span>GET IN TOUCH</span>
            <span className="contact-live">
              <i />
              AVAILABLE FOR ENQUIRIES
            </span>
          </div>

          <h3>Tell us about yourself.</h3>
          <p className="contact-form-subtitle">
            Leave your details below. We'll reach out to you.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">YOUR NAME</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                maxLength={80}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-mobile">MOBILE NUMBER</label>

              <div className="contact-phone-input">
                <span>+91</span>
                <input
                  id="contact-mobile"
                  type="tel"
                  name="mobile"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={10}
                  required
                />
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">YOUR MESSAGE</label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us what you're looking for..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                rows={4}
                maxLength={1000}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              <span>{isSending ? "SENDING..." : "SEND ENQUIRY"}</span>
              <span className="contact-submit-arrow">↗</span>
            </button>
          </form>

          <div className="contact-form-footer">
            <span>YOUR DETAILS ARE SAFE WITH US.</span>
            <span>HONEY ARORA ©</span>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3500}
        theme="dark"
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
