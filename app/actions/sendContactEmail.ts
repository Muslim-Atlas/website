'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || name.trim().length === 0) {
    return { error: 'Please enter your name.' };
  }

  if (!email || !email.includes('@')) {
    return { error: 'Please enter a valid email address.' };
  }

  if (!message || message.trim().length === 0) {
    return { error: 'Please write a message.' };
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim());
  const toAddress = process.env.WAITLIST_EMAIL_TO || 'hello@muslimatlas.app';

  try {
    const { error } = await resend.emails.send({
      from: 'Muslim Atlas Contact <noreply@notifications.yqwebstudio.com>',
      to: toAddress,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e1e1e1; border-radius: 12px;">
          <h2 style="color: #0d8253; border-bottom: 2px solid #0d8253; padding-bottom: 10px; margin-top: 0;">
            ✉️ New Contact Form Submission
          </h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap;">
            ${safeMessage}
          </div>
          <p style="font-size: 11px; color: #666; margin-top: 20px;">Submitted via the Muslim Atlas landing page contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend contact email error:', error);
      return { error: error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error('Contact server action error:', err);
    return { error: 'Failed to send message. Please try again later.' };
  }
}
