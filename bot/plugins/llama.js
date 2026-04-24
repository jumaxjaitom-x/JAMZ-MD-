import axios from 'axios';

export default {
    name: 'llama',
    alias: ['meta-ai'],
    desc: 'Chat with Llama AI.',
    category: 'ai',
    usage: 'llama [query]',
    execute: async (sock, msg, { args, text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a query.' }, { quoted: msg });

        try {
            // Using a free API endpoint that provides Llama access
            const response = await axios.get(`https://api.api-ninjas.com/v1/llama?text=${encodeURIComponent(text)}`, {
                headers: { 'X-Api-Key': process.env.NINJA_API_KEY || '' }
            }).catch(() => null);

            if (response && response.data) {
                await sock.sendMessage(msg.key.remoteJid, { text: response.data.response }, { quoted: msg });
            } else {
                // Another fallback
                const fallback = await axios.get(`https://aiv6.p.rapidapi.com/llama/chat?prompt=${encodeURIComponent(text)}`).catch(() => null);
                await sock.sendMessage(msg.key.remoteJid, { text: fallback?.data?.content || 'Llama AI is currently unavailable.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error contacting Llama service.' }, { quoted: msg });
        }
    }
};
