export default {
    name: 'flux',
    alias: ['fluximg'],
    desc: 'Generate an image using Flux AI.',
    category: 'ai',
    usage: 'flux [prompt]',
    execute: async (sock, msg, { args, text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a prompt.' }, { quoted: msg });

        try {
            const url = `https://pollinations.ai/p/${encodeURIComponent(text)}?model=flux`;
            await sock.sendMessage(msg.key.remoteJid, { 
                image: { url: url },
                caption: `*Flux AI:* ${text}`
            }, { quoted: msg });
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error generating image with Flux.' }, { quoted: msg });
        }
    }
};
