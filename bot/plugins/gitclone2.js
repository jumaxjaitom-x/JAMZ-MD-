import axios from 'axios';

export default {
    name: 'gitclone2',
    alias: ['githubclone2'],
    desc: 'Alternative method to download GitHub repository.',
    category: 'download',
    usage: 'gitclone2 [repo_url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a GitHub repository URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/gitclone?url=${encodeURIComponent(text)}`);
            if (res.data.result && res.data.result.url) {
                await sock.sendMessage(msg.key.remoteJid, { 
                    document: { url: res.data.result.url }, 
                    fileName: res.data.result.filename || 'repo.zip', 
                    mimetype: 'application/zip'
                }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download repository using alternative method.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading repository.' }, { quoted: msg });
        }
    }
};
