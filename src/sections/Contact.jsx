import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import SectionHeader from "../components/SectionHeader";

function Field({ label, as = "input", ...props }) {
  const Component = as;
  return (
    <label className="relative block">
      <Component className="field peer" placeholder={label} {...props} />
      <span className="floating-label">{label}</span>
    </label>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
    window.setTimeout(() => setSent(false), 2600);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build"
          highlight="something smooth"
          description="Send a message for React Native roles, freelance mobile work, or collaboration."
        />

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card neon-border relative mx-auto grid max-w-4xl gap-5 p-5 sm:p-8"
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full Name" name="fullName" required />
            <Field label="Email Address" name="email" type="email" required />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Mobile Number" name="mobile" type="tel" required />
            <Field label="Email Subject" name="subject" />
          </div>
          <Field label="Your Message" as="textarea" name="message" rows="7" required />

          <div className="flex justify-center">
            <MagneticButton as="button" type="submit">
              Send Message
            </MagneticButton>
          </div>

          <AnimatePresence>
            {sent && (
              <motion.div
                className="absolute right-5 top-5 rounded-2xl border border-neon/30 bg-neon px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-ink shadow-glow"
                initial={{ opacity: 0, y: -12, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.94 }}
              >
                Message Sent
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
