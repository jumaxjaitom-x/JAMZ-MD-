import axios from 'axios';

export default {
    name: 'twitter',
    alias: ['tw', 'twdl', 'x'],
    desc: 'Download Twitter (X) video.',
    category: 'download',
    usage: 'twitter [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a Twitter URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/twitter?url=${encodeURIComponent(text)}`);
            const videoUrl = res.data.result.video;
            if (videoUrl) {
                await sock.sendMessage(msg.key.remoteJid, { video: { url: videoUrl }, caption: 'Downloaded from Twitter' }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to find video URL.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading Twitter video.' }, { quoted: msg });
        }
    }
};
