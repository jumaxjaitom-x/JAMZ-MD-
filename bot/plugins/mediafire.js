import axios from 'axios';

export default {
    name: 'mediafire',
    alias: ['mfdl'],
    desc: 'Download Mediafire file.',
    category: 'download',
    usage: 'mediafire [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a Mediafire URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/mediafire?url=${encodeURIComponent(text)}`);
            const file = res.data.result;
            if (file && file.url) {
                await sock.sendMessage(msg.key.remoteJid, { 
                    document: { url: file.url }, 
                    fileName: file.name, 
                    mimetype: 'application/octet-stream',
                    caption: `*Name:* ${file.name}\n*Size:* ${file.size}`
                }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'File not found.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading Mediafire file.' }, { quoted: msg });
        }
    }
};
