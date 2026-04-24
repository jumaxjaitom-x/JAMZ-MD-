import axios from 'axios';

export default {
    name: 'terabox',
    alias: ['teradl'],
    desc: 'Download files from TeraBox.',
    category: 'download',
    usage: 'terabox [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a TeraBox URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/terabox?url=${encodeURIComponent(text)}`);
            if (res.data.result && res.data.result.url) {
                await sock.sendMessage(msg.key.remoteJid, { 
                    document: { url: res.data.result.url }, 
                    fileName: res.data.result.name || 'terabox_file', 
                    mimetype: 'application/octet-stream'
                }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download from TeraBox.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading from TeraBox.' }, { quoted: msg });
        }
    }
};
