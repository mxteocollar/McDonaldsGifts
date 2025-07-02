// Guarda la IP en data/ips.json (de forma básica)
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
  const date = new Date().toISOString();

  const filePath = path.join(process.cwd(), 'data', 'ips.json');
  let data = [];

  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {}

  data.push({ ip, date });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.status(200).json({ ok: true });
}
