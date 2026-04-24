import axios from 'axios';

export default {
    name: 'mega',
    alias: ['megadl'],
    desc: 'Download files from Mega.nz.',
    category: 'download',
    usage: 'mega [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a Mega.nz URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/mega?url=${encodeURIComponent(text)}`);
            if (res.data.result && res.data.result.url) {
                await sock.sendMessage(msg.key.remoteJid, { 
                    document: { url: res.data.result.url }, 
                    fileName: res.data.result.name || 'mega_file', 
                    mimetype: 'application/octet-stream',
                    caption: `*Name:* ${res.data.result.name}\n*Size:* ${res.data.result.size}`
                }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download from Mega.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading from Mega.' }, { quoted: msg });
        }
    }
};
