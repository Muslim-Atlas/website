'use client';

import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { sendWaitlistEmail } from '@/app/actions/sendWaitlistEmail';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface WaitlistFormProps {
  compact?: boolean;
}

export const WaitlistForm = ({ compact = false }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const isValidEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) return;

    const formData = new FormData();
    formData.set('email', email.trim());

    startTransition(async () => {
      const result = await sendWaitlistEmail(formData);
      if (result?.success) {
        setSuccess(true);
        setEmail('');
        toast.success("Successfully registered!", {
          description: "We will email you update milestones for Muslim Atlas.",
        });
      } else {
        toast.error(result?.error || 'Unable to submit email. Please retry.');
      }
    });
  };

  if (success) {
    return (
      <div className="flex items-center justify-center gap-2 text-emerald-950 text-xs font-semibold py-3 px-4 border border-emerald-500/30 bg-emerald-50 shadow-sm rounded-full w-full">
        <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
        <span className="text-center">Added to waitlist. JazakAllah khair.</span>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
        <input
          id="hero-email-input"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          disabled={isPending}
          className="flex-1 px-4.5 py-2.5 rounded-full text-xs bg-white border border-emerald-900/15 text-emerald-950 placeholder-emerald-900/40 focus:outline-none focus:border-emerald-600 transition-all duration-150 disabled:opacity-50"
        />
        <button
          id="hero-waitlist-submit-btn"
          type="submit"
          disabled={isPending || !isValidEmail(email)}
          className="btn-pill-primary text-xs py-2.5 px-5 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <Loader2 size={12} className="animate-spin" />
              Submitting...
            </>
          ) : (
            'Notify Me'
          )}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id="waitlist-email-input"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          disabled={isPending}
          className="flex-1 px-5 py-3 rounded-full text-xs bg-white border border-emerald-900/15 text-emerald-950 placeholder-emerald-900/40 focus:outline-none focus:border-emerald-600 transition-all duration-150 disabled:opacity-50"
        />
        <button
          id="waitlist-submit-btn"
          type="submit"
          disabled={isPending || !isValidEmail(email)}
          className="btn-pill-primary py-3 px-6 text-xs whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <Loader2 size={12} className="animate-spin" />
              Adding...
            </>
          ) : (
            'Join Waitlist'
          )}
        </button>
      </div>
      <p className="mt-3 text-[10px] text-emerald-800/70 text-center font-mono">
        Strict privacy policy. Unsubscribe at any time.
      </p>
    </form>
  );
};
