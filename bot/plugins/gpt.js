import axios from 'axios';
import OpenAI from 'openai';

export default {
    name: 'gpt',
    alias: ['ai', 'openai'],
    desc: 'Chat with GPT AI',
    category: 'ai',
    usage: 'gpt [query]',
    execute: async (sock, msg, { args }) => {
        const text = args.join(' ');
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a query.' }, { quoted: msg });
        
        await sock.sendMessage(msg.key.remoteJid, { text: 'AI is thinking...' }, { quoted: msg });
        
        if (process.env.OPENAI_API_KEY) {
            try {
                const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
                const response = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: text }],
                });
                return await sock.sendMessage(msg.key.remoteJid, { text: response.choices[0].message.content }, { quoted: msg });
            } catch (e) {
                console.error('OpenAI Error:', e);
            }
        }

        // Fallback to free API
        try {
            const res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(text)}&lc=en`);
            await sock.sendMessage(msg.key.remoteJid, { text: res.data.success || 'AI is busy right now.' }, { quoted: msg });
        } catch (e) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'AI service unavailable.' }, { quoted: msg });
        }
    }
};
