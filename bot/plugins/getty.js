import axios from 'axios';

export default {
    name: 'getty',
    alias: ['gettydl'],
    desc: 'Download Getty Images.',
    category: 'download',
    usage: 'getty [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a Getty URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/getty?url=${encodeURIComponent(text)}`);
            if (res.data.result) {
                await sock.sendMessage(msg.key.remoteJid, { image: { url: res.data.result }, caption: 'Downloaded from Getty' }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download Getty image.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading Getty image.' }, { quoted: msg });
        }
    }
};
