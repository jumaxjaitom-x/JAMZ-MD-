import axios from 'axios';

export default {
    name: 'snack',
    alias: ['snackdl'],
    desc: 'Download SnackVideo.',
    category: 'download',
    usage: 'snack [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a SnackVideo URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/snackvideo?url=${encodeURIComponent(text)}`);
            if (res.data.result && res.data.result.url) {
                await sock.sendMessage(msg.key.remoteJid, { video: { url: res.data.result.url }, caption: 'Downloaded from SnackVideo' }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download from SnackVideo.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading from SnackVideo.' }, { quoted: msg });
        }
    }
};
