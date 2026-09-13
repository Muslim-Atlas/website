'use server';

import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '164f141d-a403-4ab5-ab92-1f32e58d7777';
const TO_ADDRESS = process.env.WAITLIST_EMAIL_TO || 'hello@muslimatlas.app';

export async function unsubscribeWaitlist(email: string) {
  if (!email || !email.includes('@')) {
    return { error: 'Please enter a valid email address.' };
  }

  const cleanEmail = email.trim().toLowerCase();

  try {
    // 1. Remove contact from Resend Audience
    try {
      await resend.contacts.remove({
        email: cleanEmail,
        audienceId: AUDIENCE_ID,
      });
    } catch (contactErr) {
      console.warn('Resend contact remove notice:', contactErr);
    }

    // 2. Persist to local unsubscribed archive
    const dataDir = path.resolve(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const unsubPath = path.join(dataDir, 'unsubscribed.json');
    let unsubscribedList: string[] = [];
    if (fs.existsSync(unsubPath)) {
      try {
        unsubscribedList = JSON.parse(fs.readFileSync(unsubPath, 'utf8'));
      } catch (e) {
        unsubscribedList = [];
      }
    }
    if (!unsubscribedList.includes(cleanEmail)) {
      unsubscribedList.push(cleanEmail);
      fs.writeFileSync(unsubPath, JSON.stringify(unsubscribedList, null, 2), 'utf8');
    }

    // 3. Notify owner
    await resend.emails.send({
      from: 'Muslim Atlas <noreply@notifications.yqwebstudio.com>',
      to: TO_ADDRESS,
      subject: `Waitlist Unsubscribe: ${cleanEmail}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e1e1e1; border-radius: 12px;">
          <h2 style="color: #64748b; margin-top: 0;">Waitlist Unsubscribe Request</h2>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p style="font-size: 13px; color: #666;">This user unsubscribed from the Muslim Atlas waitlist and will no longer receive release emails.</p>
        </div>
      `,
    }).catch(console.warn);

    return { success: true };
  } catch (err: unknown) {
    console.error('Unsubscribe action error:', err);
    return { error: 'Failed to process unsubscribe request. Please try again later.' };
  }
}
