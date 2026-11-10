import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "../styles/CTAButton.css";

const phoneNumber = "+971585911064";
const whatsappNumber = "+971585911064";

const whatsappMessage =
  "Hello Sir, I came across your website and really liked your work. I’m interested in discussing a project with you. Could you please share more details about your services? Looking forward to connecting with you. Thank you!";

const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const CTAButton = ({ children = "LET'S TALK" }) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [modalOpen]);

  return (
    <>
      {/* CTA BUTTON */}
      <button
        type="button"
        className="cta-button"
        onClick={() => setModalOpen(true)}
      >
        <span className="cta-button-text">{children}</span>

        <span className="cta-button-icon">
          <span className="cta-arrow">→</span>
        </span>
      </button>

      {/* CONTACT MODAL */}
      {createPortal(
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              className="contact-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setModalOpen(false)}
            >
              <motion.div
                className="contact-modal"
                initial={{ opacity: 0, y: 35, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 25, scale: 0.96 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* CLOSE BUTTON */}
                <button
                  className="contact-modal-close"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close contact modal"
                >
                  ×
                </button>

                <span className="contact-modal-tag">LET'S CONNECT</span>

                <h2>
                  Let's start a <span>conversation.</span>
                </h2>

                <p className="contact-modal-description">
                  Have a project in mind or just want to say hello? I'd love to
                  hear from you. Choose your preferred way to connect.
                </p>

                {/* CONTACT OPTIONS */}
                <div className="contact-options">
                  {/* CALL OPTION */}
                  <a
                    href={`tel:${phoneNumber}`}
                    className="contact-option call-option"
                  >
                    <span className="contact-option-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>

                    <span className="contact-option-content">
                      <strong>Give me a call</strong>
                      <small>Let's talk directly</small>
                      <span className="contact-option-number">
                        +971585911064
                      </span>
                    </span>

                    <span className="contact-option-arrow">↗</span>
                  </a>

                  {/* WHATSAPP OPTION */}
                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-option whatsapp-option"
                  >
                    <span className="contact-option-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.49-8.41ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.88 9.88 0 0 1-1.52-5.24c0-5.45 4.43-9.88 9.89-9.88a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.43 9.88-9.9 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                      </svg>
                    </span>

                    <span className="contact-option-content">
                      <strong>Chat on WhatsApp</strong>
                      <small>Usually replies quickly</small>
                      <span className="contact-option-number">
                        Send me a message
                      </span>
                    </span>

                    <span className="contact-option-arrow">↗</span>
                  </a>
                </div>

                <div className="contact-modal-footer">
                  <span className="contact-footer-dot" />
                  AVAILABLE FOR NEW PROJECTS
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default CTAButton;
