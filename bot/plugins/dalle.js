import axios from 'axios';

export default {
    name: 'dalle',
    alias: ['aiimage', 'gen'],
    desc: 'Generate an image using AI.',
    category: 'ai',
    usage: 'dalle [prompt]',
    execute: async (sock, msg, { args, text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a prompt.' }, { quoted: msg });

        try {
            const url = `https://pollinations.ai/p/${encodeURIComponent(text)}`;
            await sock.sendMessage(msg.key.remoteJid, { 
                image: { url: url },
                caption: `*Prompt:* ${text}`
            }, { quoted: msg });
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error generating image.' }, { quoted: msg });
        }
    }
};
