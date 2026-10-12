export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { endpoint, payload } = req.body;
    const API_KEY = "AzaGanteng-tEKbSHWqb2hmoSIGXq1jf6YjrXl7r8DE";
    const BASE_URL = "https://axzyedev.biz.id/api/v1";

    if (!endpoint) {
        return res.status(400).json({ success: false, message: 'Endpoint tidak ditemukan.' });
    }

    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY
            },
            body: JSON.stringify(payload || {})
        });

        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (error) {
        return res.status(500).json({ success: false, message: "Kesalahan proxy server: " + error.message });
    }
}
