import axios from 'axios';

export default {
    name: 'facebook',
    alias: ['fb', 'fbdl'],
    desc: 'Download Facebook video.',
    category: 'download',
    usage: 'facebook [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a Facebook video URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/facebook?url=${encodeURIComponent(text)}`);
            const videoUrl = res.data.result.hd || res.data.result.sd;
            if (videoUrl) {
                await sock.sendMessage(msg.key.remoteJid, { video: { url: videoUrl }, caption: 'Downloaded from Facebook' }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to find video URL.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading Facebook video.' }, { quoted: msg });
        }
    }
};
