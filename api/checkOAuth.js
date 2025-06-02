export default async function handler(req, res) {
  const { user_id, oauth_token } = req.query;

  if (!user_id || !oauth_token) return res.send('0');

  try {
    const r = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${oauth_token}` }
    });

    if (!r.ok) return res.send('0');

    const user = await r.json();
    if (user.id !== user_id) return res.send('0');

    return res.send('1');
  } catch {
    return res.send('0');
  }
}
