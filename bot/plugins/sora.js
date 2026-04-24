export default {
    name: 'sora',
    alias: ['aivideo'],
    desc: 'Generate a video using Sora AI (Mockup).',
    category: 'ai',
    usage: 'sora [prompt]',
    execute: async (sock, msg, { args, text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a prompt.' }, { quoted: msg });

        await sock.sendMessage(msg.key.remoteJid, { 
            text: `*Sora AI* is currently in private beta. Your prompt "${text}" has been queued. (This is a mockup as no public Sora API exists yet).`
        }, { quoted: msg });
    }
};
