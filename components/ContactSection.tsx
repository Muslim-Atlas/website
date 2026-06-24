'use client';

import { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { sendContactEmail } from '@/app/actions/sendContactEmail';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all fields.');
      return;
    }

    const formData = new FormData();
    formData.set('name', name.trim());
    formData.set('email', email.trim());
    formData.set('message', message.trim());

    startTransition(async () => {
      const result = await sendContactEmail(formData);
      if (result?.success) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        toast.success("Message sent successfully!", {
          description: "JazakAllah khair. We will review your message shortly.",
        });
      } else {
        toast.error(result?.error || 'Unable to send message. Please retry.');
      }
    });
  };

  return (
    <section id="contact" className="relative pt-12 pb-24 md:py-16 px-6 border-t border-black/5 bg-transparent z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-700 mb-3 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-emerald-950 max-w-2xl mx-auto leading-tight font-unbounded">
            Questions or Suggestions?
          </h2>
          <p className="mt-4 text-emerald-800 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Have a feature request, question, or feedback? Drop us a line below and the team will get back to you.
          </p>
        </div>

        {/* Contact Form Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center w-full"
        >
          <div className="glass-panel w-full max-w-xl p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden">
            
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-8 gap-5 border border-emerald-500/30 bg-emerald-50 shadow-sm rounded-2xl w-full"
              >
                <div className="w-14 h-14 rounded-full bg-white border border-emerald-500/20 flex items-center justify-center text-emerald-600 shadow-xs">
                  <CheckCircle2 size={28} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-emerald-950 font-unbounded">Message Received!</h3>
                  <p className="text-xs text-emerald-950 leading-relaxed font-sans max-w-sm font-medium">
                    JazakAllah khair for reaching out. We will review your message and get back to you at your email address as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-pill-secondary text-xs py-2.5 px-6 mt-2 cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Name field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-850 text-left">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    disabled={isPending}
                    className="w-full px-4.5 py-3 rounded-2xl text-xs bg-white border border-emerald-900/15 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:border-emerald-600 transition-all duration-150 disabled:opacity-50"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-850 text-left">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={isPending}
                    className="w-full px-4.5 py-3 rounded-2xl text-xs bg-white border border-emerald-900/15 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:border-emerald-600 transition-all duration-150 disabled:opacity-50"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-850 text-left">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    disabled={isPending}
                    className="w-full px-4.5 py-3.5 rounded-2xl text-xs bg-white border border-emerald-900/15 text-emerald-950 placeholder-emerald-900/30 focus:outline-none focus:border-emerald-600 transition-all duration-150 disabled:opacity-50 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isPending}
                  className="btn-pill-primary w-full text-xs py-3.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={12} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
};
