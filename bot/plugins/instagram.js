import axios from 'axios';

export default {
    name: 'instagram',
    alias: ['ig', 'igdl'],
    desc: 'Download Instagram media.',
    category: 'download',
    usage: 'instagram [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide an Instagram URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/igdl?url=${encodeURIComponent(text)}`);
            const media = res.data.result;
            for (const item of media) {
                if (item.url.includes('.mp4')) {
                    await sock.sendMessage(msg.key.remoteJid, { video: { url: item.url } }, { quoted: msg });
                } else {
                    await sock.sendMessage(msg.key.remoteJid, { image: { url: item.url } }, { quoted: msg });
                }
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading Instagram media.' }, { quoted: msg });
        }
    }
};
