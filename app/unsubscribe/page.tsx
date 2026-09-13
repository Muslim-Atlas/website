'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, MailX, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { unsubscribeWaitlist } from '../actions/unsubscribeWaitlist';

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await unsubscribeWaitlist(email);
      if (res.error) {
        setStatus('error');
        setErrorMessage(res.error);
      } else {
        setStatus('success');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaf5eb] to-[#cce3d0] text-[#1a382d] font-sans antialiased py-12 px-6 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-md rounded-3xl border border-emerald-500/10 shadow-xl p-8 md:p-12 relative overflow-hidden">
        
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 border-b border-black/5 mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-zinc-200 shadow-sm">
              <Image
                src="/logo.png"
                alt="Muslim Atlas logo"
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-emerald-950 font-unbounded font-semibold text-xs tracking-tight">
              Muslim Atlas
            </span>
          </div>
        </div>

        {status === 'success' ? (
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
              <CheckCircle size={32} />
            </div>
            <h1 className="text-2xl font-bold text-emerald-950 font-unbounded mb-3">
              Unsubscribed
            </h1>
            <p className="text-sm text-emerald-800/80 leading-relaxed mb-6 max-w-sm">
              <strong className="text-emerald-950">{email}</strong> has been successfully removed from our waitlist. You will not receive any further launch updates or emails.
            </p>
            <p className="text-xs text-emerald-800/60 mb-8">
              Changed your mind? You can rejoin anytime by visiting the home page.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-sm transition-colors shadow-sm"
            >
              Return to Muslim Atlas
            </Link>
          </div>
        ) : (
          <div>
            {/* Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600">
                <MailX size={24} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-emerald-950 font-unbounded">
                  Unsubscribe
                </h1>
                <p className="text-xs text-emerald-800/70 mt-0.5">
                  Manage your Muslim Atlas waitlist subscription
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-900/80 mb-6 leading-relaxed">
              If you no longer wish to receive launch updates, new version releases, or invitations for Muslim Atlas, enter your email below to unsubscribe.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-emerald-950 mb-1.5 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-emerald-900/20 bg-white/90 text-emerald-950 placeholder:text-emerald-900/40 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 px-6 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Unsubscribing...
                  </>
                ) : (
                  'Unsubscribe from Waitlist'
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#eaf5eb] flex items-center justify-center">Loading...</div>}>
      <UnsubscribeContent />
    </Suspense>
  );
}
