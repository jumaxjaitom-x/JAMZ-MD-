import axios from 'axios';

export default {
    name: 'gpt',
    alias: ['ai', 'chatgpt'],
    desc: 'Chat with AI (GPT).',
    category: 'ai',
    usage: 'gpt [query]',
    execute: async (sock, msg, { args, text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a query.' }, { quoted: msg });

        try {
            if (process.env.OPENAI_API_KEY) {
                // OpenAI implementation (simplified)
                const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: text }]
                }, {
                    headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` }
                });
                await sock.sendMessage(msg.key.remoteJid, { text: response.data.choices[0].message.content }, { quoted: msg });
            } else {
                // Fallback to free API
                const response = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(text)}&lc=en`);
                await sock.sendMessage(msg.key.remoteJid, { text: response.data.success || 'AI is currently unavailable.' }, { quoted: msg });
            }
        } catch (error) {
            console.error(error);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error contacting AI service.' }, { quoted: msg });
        }
    }
};
