import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Só POST' });

  const { user_id } = req.query;
  const { oauth_token } = req.body;

  if (!user_id) return res.status(400).json({ error: 'user_id obrigatório' });
  if (!oauth_token) return res.status(400).json({ error: 'oauth_token obrigatório' });

  try {
    const response = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${oauth_token}` }
    });

    if (response.status !== 200) return res.status(401).json({ status: 2, message: 'Token inválido' });

    const userData = await response.json();

    if (userData.id !== user_id) return res.status(403).json({ status: 2, message: 'user_id não confere' });

    return res.status(200).json({ status: 1 });
  } catch {
    return res.status(500).json({ status: 2, message: 'Erro no servidor' });
  }
}
