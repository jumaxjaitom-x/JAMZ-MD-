import axios from 'axios';

export default {
    name: 'snapchat',
    alias: ['snapdl'],
    desc: 'Download Snapchat video.',
    category: 'download',
    usage: 'snapchat [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a Snapchat URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/snapchat?url=${encodeURIComponent(text)}`);
            if (res.data.result && res.data.result.url) {
                await sock.sendMessage(msg.key.remoteJid, { video: { url: res.data.result.url }, caption: 'Downloaded from Snapchat' }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download from Snapchat.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading from Snapchat.' }, { quoted: msg });
        }
    }
};
