import axios from 'axios';

export default {
    name: 'sharechat',
    alias: ['scdl'],
    desc: 'Download ShareChat video.',
    category: 'download',
    usage: 'sharechat [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a ShareChat URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/sharechat?url=${encodeURIComponent(text)}`);
            if (res.data.result && res.data.result.url) {
                await sock.sendMessage(msg.key.remoteJid, { video: { url: res.data.result.url }, caption: 'Downloaded from ShareChat' }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download from ShareChat.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading from ShareChat.' }, { quoted: msg });
        }
    }
};
