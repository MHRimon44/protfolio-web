/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email"
          : "";
      case "message":
        return value.trim().length < 10 ? "Message must be at least 10 characters" : "";
      default:
        return "";
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setTouched({ name: true, email: true, message: true });

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
          },
          publicKey,
        );

        toast({
          title: "Message sent",
          description: "Thank you for contacting me. I will get back to you soon.",
          className: "bg-emerald-600 border-emerald-700 text-white",
        });
      } else {
        openMailClient();
        toast({
          title: "Email app opened",
          description: "EmailJS is not configured, so your message was prepared in your email client.",
          className: "bg-cyan-600 border-cyan-700 text-white",
        });
      }

      setFormData(initialFormData);
      setErrors({});
      setTouched({});
    } catch (err) {
      toast({
        title: "Message failed",
        description: "Please email me directly or try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldStatus = (fieldName) => {
    if (!touched[fieldName]) return null;
    return errors[fieldName] ? "error" : "success";
  };

  const inputClass = (fieldName) =>
    `w-full bg-ocean-900 border text-white placeholder:text-slate-500 focus:ring-2 transition-all ${
      getFieldStatus(fieldName) === "error"
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
        : getFieldStatus(fieldName) === "success"
          ? "border-cyan-500 focus:border-cyan-500 focus:ring-cyan-500/20"
          : "border-cyan-500/30 focus:border-cyan-500 focus:ring-cyan-500/20"
    }`;

  return (
    <section id="contact" className="py-20 bg-ocean-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Need a production mobile app, app improvement, or React Native support? Let&apos;s talk.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                <p className="text-slate-300 leading-relaxed">
                  I am open to mobile app development roles, production React Native work, and business app improvements across e-commerce, ERP, CRM, POS, and logistics systems.
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 glass rounded-xl border border-cyan-500/20"
                >
                  <div className="p-3 bg-linear-to-br from-cyan-500 to-teal-500 rounded-lg shadow-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-semibold text-white break-all">{personalInfo.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 glass rounded-xl border border-cyan-500/20"
                >
                  <div className="p-3 bg-linear-to-br from-cyan-500 to-teal-500 rounded-lg shadow-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="font-semibold text-white">{personalInfo.phone}</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 glass rounded-xl border border-cyan-500/20"
                >
                  <div className="p-3 bg-linear-to-br from-cyan-500 to-teal-500 rounded-lg shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="font-semibold text-white">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-linear-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg glow-cyan hover:shadow-2xl transition-all"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedinIcon className="text-white" size={28} />
                  </motion.a>
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-linear-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg glow-cyan hover:shadow-2xl transition-all"
                    aria-label="GitHub profile"
                  >
                    <GithubIcon className="text-white" size={28} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 border border-cyan-500/20 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      className={inputClass("name")}
                    />
                    {getFieldStatus("name") === "success" && (
                      <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400" size={20} />
                    )}
                    {getFieldStatus("name") === "error" && (
                      <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400" size={20} />
                    )}
                  </div>
                  {errors.name && touched.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email *
                  </label>
                  <div className="relative">
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@example.com"
                      className={inputClass("email")}
                    />
                    {getFieldStatus("email") === "success" && (
                      <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400" size={20} />
                    )}
                    {getFieldStatus("email") === "error" && (
                      <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400" size={20} />
                    )}
                  </div>
                  {errors.email && touched.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project, role, or mobile app requirement..."
                    rows={6}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && touched.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold shadow-lg glow-cyan transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
