import axios from 'axios';

export default {
    name: 'mistral',
    alias: ['mistralai'],
    desc: 'Chat with Mistral AI.',
    category: 'ai',
    usage: 'mistral [query]',
    execute: async (sock, msg, { args, text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a query.' }, { quoted: msg });

        try {
            // Placeholder for a free Mistral API or using a generic one
            const response = await axios.get(`https://api.lolhuman.xyz/api/openai?apikey=free&text=${encodeURIComponent(text)}`);
            await sock.sendMessage(msg.key.remoteJid, { text: response.data.result || 'Mistral AI is currently unavailable.' }, { quoted: msg });
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error contacting Mistral service.' }, { quoted: msg });
        }
    }
};
