// api/subscribe.js
// Vercel serverless function — adds subscribers to Resend Audiences
// keeping the API key server-side and out of the browser.
//
// Accepts POST body: { email, first_name?, last_name?, utm_source? }
// utm_source defaults to 'website' if not provided.
// Known values:
//   'homepage'           — theaiclassroomhub.com main subscribe form
//   'coach-landing-page' — theaiclassroomhub.com/coach lead magnet form

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers — allow requests from the same origin only
  res.setHeader('Access-Control-Allow-Origin', 'https://theaiclassroomhub.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const {
    email,
    first_name,
    last_name,
    utm_source = 'website',
  } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const RESEND_API_KEY  = process.env.RESEND_API_KEY;
  // Office Hours /AI audience — created 2026-04-25
  const AUDIENCE_ID     = '1152c5e0-2309-4dd1-a3b1-174ca0f9fda8';

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Build contact payload
    const contact = {
      email: email.trim(),
      unsubscribed: false,
    };
    if (first_name) contact.first_name = first_name.trim();
    if (last_name)  contact.last_name  = last_name.trim();

    // Add contact to Resend Audience
    const resendRes = await fetch(
      `https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify(contact),
      }
    );

    const data = await resendRes.json();

    if (!resendRes.ok) {
      console.error('Resend API error:', resendRes.status, data);
      return res.status(resendRes.status).json({ error: data.message || 'Subscription failed' });
    }

    // Send welcome email via Resend
    const welcomeRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Ryan David <ryan@theaiclassroomhub.com>',
        to: [email.trim()],
        subject: 'You\'re in — Office Hours /AI arrives Sunday',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Office Hours /AI</title>
</head>
<body style="margin:0;padding:0;background:#f8f8f7;font-family:'DM Sans',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8f7;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#f8f8f7;padding:0 24px;">
          
          <!-- Header -->
          <tr>
            <td style="padding-bottom:40px;border-bottom:1px solid #e5e3dd;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:400;color:#34322d;letter-spacing:-0.01em;">
                Office Hours <span style="color:#0081f2;">/</span>AI
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding-top:40px;">
              <h1 style="margin:0 0 24px 0;font-family:Georgia,'Times New Roman',serif;font-size:36px;line-height:1.1;font-weight:400;color:#34322d;letter-spacing:-0.02em;">
                You're in.
              </h1>
              <p style="margin:0 0 20px 0;font-size:17px;line-height:1.6;color:#34322d;">
                ${first_name ? `Hi ${first_name} — ` : ''}your first issue of Office Hours <span style="color:#0081f2;">/</span>AI lands this Sunday morning.
              </p>
              <p style="margin:0 0 20px 0;font-size:17px;line-height:1.6;color:#34322d;">
                Every week I send one practical tip, one tool worth trying, and one real story from a classroom that's actually using AI — no jargon, no hype, just what works on Monday.
              </p>
              <p style="margin:0 0 40px 0;font-size:17px;line-height:1.6;color:#34322d;">
                Pull up a chair.
              </p>
              <p style="margin:0;font-size:17px;line-height:1.6;font-style:italic;color:#6b6862;">
                — Ryan
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:48px 0 0 0;border-top:1px solid #e5e3dd;margin-top:48px;">
              <p style="margin:0;font-size:13px;line-height:1.5;color:#9b9690;">
                You're receiving this because you subscribed at <a href="https://theaiclassroomhub.com" style="color:#0081f2;text-decoration:none;">theaiclassroomhub.com</a>.
                Don't want these? <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#9b9690;text-decoration:underline;">Unsubscribe</a>.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
      }),
    });

    if (!welcomeRes.ok) {
      const welcomeData = await welcomeRes.json();
      console.warn('Welcome email failed (non-fatal):', welcomeRes.status, welcomeData);
      // Don't fail the whole request — subscriber was added successfully
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Proxy error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
