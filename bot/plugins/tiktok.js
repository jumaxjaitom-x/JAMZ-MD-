import axios from 'axios';

export default {
    name: 'tiktok',
    alias: ['tt', 'ttdl'],
    desc: 'Download TikTok video.',
    category: 'download',
    usage: 'tiktok [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a TikTok URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/tiktok?url=${encodeURIComponent(text)}`);
            const videoUrl = res.data.result.video;
            if (videoUrl) {
                await sock.sendMessage(msg.key.remoteJid, { video: { url: videoUrl }, caption: 'Downloaded from TikTok' }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to find video URL.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading TikTok video.' }, { quoted: msg });
        }
    }
};
