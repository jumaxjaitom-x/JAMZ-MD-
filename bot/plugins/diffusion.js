export default {
    name: 'diffusion',
    alias: ['stable', 'sd'],
    desc: 'Generate an image using Stable Diffusion.',
    category: 'ai',
    usage: 'diffusion [prompt]',
    execute: async (sock, msg, { args, text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a prompt.' }, { quoted: msg });

        try {
            const url = `https://pollinations.ai/p/${encodeURIComponent(text)}?model=stablediffusion`;
            await sock.sendMessage(msg.key.remoteJid, { 
                image: { url: url },
                caption: `*Stable Diffusion:* ${text}`
            }, { quoted: msg });
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error generating image with Diffusion.' }, { quoted: msg });
        }
    }
};
