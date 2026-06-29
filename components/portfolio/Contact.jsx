/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 2
          ? "Name must be at least 2 characters"
          : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email"
          : "";
      case "message":
        return value.trim().length < 10
          ? "Message must be at least 10 characters"
          : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_4972dz2",
        "template_jtmq7r9",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "cil8aFz2MW5FvhmLT",
      );

      toast({
        title: "✅ Message Sent!",
        description: "Thank you for contacting me.",
        className: "bg-emerald-600 border-emerald-700 text-white",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      toast({
        title: "Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const getFieldStatus = (fieldName) => {
    if (!touched[fieldName]) return null;
    return errors[fieldName] ? "error" : "success";
  };

  return (
    <section
      id="contact"
      className="py-20 bg-ocean-950 relative overflow-hidden"
    >
      {/* Background decoration */}
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
              <h2 className="text-5xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <div className="w-24 h-1.5 bg-linear-to-r from-cyan-500 to-teal-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Let&apos;s discuss your next project or opportunity
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-4 p-4 glass rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="p-3 bg-linear-to-br from-cyan-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform shadow-lg glow-cyan">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {personalInfo.email}
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`tel:${personalInfo.phone}`}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-4 p-4 glass rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="p-3 bg-linear-to-br from-cyan-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform shadow-lg glow-cyan">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Phone</p>
                      <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {personalInfo.phone}
                      </p>
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
                      <p className="font-semibold text-white">
                        {personalInfo.location}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-linear-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg glow-cyan hover:shadow-2xl transition-all"
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
                  >
                    <GithubIcon className="text-white" size={28} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form with Validation */}
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
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
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
                      placeholder="John Doe"
                      className={`w-full bg-ocean-900 border text-white placeholder:text-slate-500 focus:ring-2 transition-all ${
                        getFieldStatus("name") === "error"
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : getFieldStatus("name") === "success"
                            ? "border-cyan-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            : "border-cyan-500/30 focus:border-cyan-500 focus:ring-cyan-500/20"
                      }`}
                    />
                    {getFieldStatus("name") === "success" && (
                      <CheckCircle2
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400"
                        size={20}
                      />
                    )}
                    {getFieldStatus("name") === "error" && (
                      <AlertCircle
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400"
                        size={20}
                      />
                    )}
                  </div>
                  {errors.name && touched.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
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
                      placeholder="john@example.com"
                      className={`w-full bg-ocean-900 border text-white placeholder:text-slate-500 focus:ring-2 transition-all ${
                        getFieldStatus("email") === "error"
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : getFieldStatus("email") === "success"
                            ? "border-cyan-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            : "border-cyan-500/30 focus:border-cyan-500 focus:ring-cyan-500/20"
                      }`}
                    />
                    {getFieldStatus("email") === "success" && (
                      <CheckCircle2
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400"
                        size={20}
                      />
                    )}
                    {getFieldStatus("email") === "error" && (
                      <AlertCircle
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400"
                        size={20}
                      />
                    )}
                  </div>
                  {errors.email && touched.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Your Message *
                  </label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className={`w-full bg-ocean-900 border text-white placeholder:text-slate-500 focus:ring-2 transition-all resize-none ${
                        getFieldStatus("message") === "error"
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : getFieldStatus("message") === "success"
                            ? "border-cyan-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            : "border-cyan-500/30 focus:border-cyan-500 focus:ring-cyan-500/20"
                      }`}
                    />
                  </div>
                  {errors.message && touched.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
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
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
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
