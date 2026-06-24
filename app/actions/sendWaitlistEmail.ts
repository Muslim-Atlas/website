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

export async function sendWaitlistEmail(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return { error: 'Please enter a valid email address.' };
  }

  const safeEmail = escapeHtml(email.trim());
  const toAddress = process.env.WAITLIST_EMAIL_TO || 'hello@muslimatlas.app';

  try {
    // Notify owner
    const { error: ownerError } = await resend.emails.send({
      from: 'Muslim Atlas <noreply@notifications.yqwebstudio.com>',
      to: toAddress,
      subject: `New Waitlist Sign-up: ${safeEmail}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e1e1e1; border-radius: 12px;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px; margin-top: 0;">
            🕌 New Muslim Atlas Waitlist Sign-up
          </h2>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p style="font-size: 13px; color: #666;">Signed up via the Muslim Atlas pre-launch landing page.</p>
        </div>
      `,
    });

    if (ownerError) {
      console.error('Resend owner email error:', ownerError);
      return { error: ownerError.message };
    }

    // Send confirmation to subscriber
    await resend.emails.send({
      from: 'Muslim Atlas <noreply@notifications.yqwebstudio.com>',
      to: safeEmail,
      subject: "You're on the Muslim Atlas waitlist 🕌",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #0f172a; color: #f8fafc; border-radius: 12px;">
          <h1 style="color: #10b981; margin-top: 0;">Muslim Atlas</h1>
          <h2 style="color: #f8fafc;">You're on the list! 🎉</h2>
          <p style="color: #94a3b8; line-height: 1.7;">
            Thank you for joining the Muslim Atlas waitlist. You'll be among the first to know when the full release is live.
          </p>
          <p style="color: #94a3b8; line-height: 1.7;">
            In the meantime, you can download the current Android Alpha build from our GitHub releases page.
          </p>
          <a href="https://github.com/YusufQuresh1/Muslim-Atlas/releases" 
             style="display: inline-block; margin-top: 16px; padding: 12px 24px; background: #059669; color: #fff; border-radius: 8px; text-decoration: none; font-weight: 600;">
            Download Android Alpha
          </a>
          <p style="margin-top: 32px; font-size: 13px; color: #475569;">
            JazakAllah khair for your support.<br />- The Muslim Atlas Team
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (err: unknown) {
    console.error('Waitlist server action error:', err);
    return { error: 'Failed to join waitlist. Please try again later.' };
  }
}
