// api/subscribe.js
// Vercel serverless function — proxies subscription requests to Beehiiv API
// keeping the API key server-side and out of the browser.
//
// Accepts POST body: { email, utm_source?, reactivate_existing? }
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
    utm_source = 'website',
    reactivate_existing = true,
  } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
  const BEEHIIV_PUB_ID = 'pub_ab25b333-94e9-4301-9480-d002e742e755';

  if (!BEEHIIV_API_KEY) {
    console.error('BEEHIIV_API_KEY environment variable is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const beehiivRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email: email.trim(),
          reactivate_existing,
          utm_source,
        }),
      }
    );

    const data = await beehiivRes.json();

    if (!beehiivRes.ok) {
      console.error('Beehiiv API error:', beehiivRes.status, data);
      return res.status(beehiivRes.status).json({ error: data.message || 'Subscription failed' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Proxy error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
