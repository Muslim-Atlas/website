import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaf5eb] to-[#cce3d0] text-[#1a382d] font-sans antialiased py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl border border-emerald-500/10 shadow-xl p-8 md:p-12 relative overflow-hidden">
        
        {/* Header bar */}
        <div className="flex items-center justify-between pb-8 border-b border-black/5 mb-8">
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

        {/* Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
            <Shield size={24} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-emerald-950 font-unbounded">
              Privacy Policy
            </h1>
            <p className="text-[10px] font-mono text-emerald-800/70 mt-1">
              Last Updated: June 24, 2026
            </p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="prose prose-emerald text-emerald-900/90 text-sm leading-relaxed flex flex-col gap-6 font-medium">
          
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-emerald-950 font-unbounded mt-4">
              1. Introduction
            </h2>
            <p>
              Welcome to Muslim Atlas. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our waitlist and contact forms.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-emerald-950 font-unbounded mt-4">
              2. Information We Collect
            </h2>
            <p>
              We only collect information that you voluntarily provide to us:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>
                <strong>Waitlist Form:</strong> When you join our waitlist, we collect your email address to send you launch updates, milestone notifications, and app access credentials.
              </li>
              <li>
                <strong>Contact Form:</strong> When you send a message, question, or feature suggestion, we collect your name and email address to follow up and respond to your inquiry.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-emerald-950 font-unbounded mt-4">
              3. Analytics & Cookie Tracking
            </h2>
            <p>
              To improve website performance and user experience, we plan to implement <strong>Google Analytics</strong>. Google Analytics collects anonymous information such as:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>IP addresses (anonymized)</li>
              <li>Browser types and operating systems</li>
              <li>Time spent on pages and click patterns</li>
            </ul>
            <p className="mt-2">
              This data is collected via cookies and is used solely for traffic evaluation and site performance monitoring. You can opt-out of Google Analytics cookie tracking by adjusting your browser settings.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-emerald-950 font-unbounded mt-4">
              4. Data Sharing & Third Parties
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. We utilize trusted third-party service providers to run our operations:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
              <li>
                <strong>Resend:</strong> Used to securely route and deliver transactional waitlist and contact emails.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-emerald-950 font-unbounded mt-4">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical security measures to protect your email and message data from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-emerald-950 font-unbounded mt-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us through the form on our home screen.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="border-t border-black/5 mt-10 pt-6 text-center">
          <p className="text-[10px] font-mono text-emerald-800/70">
            © 2026 Muslim Atlas. Built to serve our ummah.
          </p>
        </div>

      </div>
    </div>
  );
}
