import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'ips.json');

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'No hay IPs guardadas.' });
  }
}