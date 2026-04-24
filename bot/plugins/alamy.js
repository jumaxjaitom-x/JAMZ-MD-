import axios from 'axios';

export default {
    name: 'alamy',
    alias: ['alamydl'],
    desc: 'Download Alamy images (no watermark if API supports).',
    category: 'download',
    usage: 'alamy [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide an Alamy URL.' }, { quoted: msg });

        try {
            // Simplified search or direct download if URL provided
            const res = await axios.get(`https://api.vreden.my.id/api/alamy?url=${encodeURIComponent(text)}`);
            if (res.data.result) {
                await sock.sendMessage(msg.key.remoteJid, { image: { url: res.data.result }, caption: 'Downloaded from Alamy' }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download Alamy image.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading Alamy image.' }, { quoted: msg });
        }
    }
};
