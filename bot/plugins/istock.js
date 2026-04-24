import axios from 'axios';

export default {
    name: 'istock',
    alias: ['istockdl'],
    desc: 'Download IStock images.',
    category: 'download',
    usage: 'istock [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide an IStock URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/istock?url=${encodeURIComponent(text)}`);
            if (res.data.result) {
                await sock.sendMessage(msg.key.remoteJid, { image: { url: res.data.result }, caption: 'Downloaded from IStock' }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download IStock image.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading IStock image.' }, { quoted: msg });
        }
    }
};
