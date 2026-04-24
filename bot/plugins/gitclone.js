import axios from 'axios';

export default {
    name: 'gitclone',
    alias: ['githubclone'],
    desc: 'Download a GitHub repository as a ZIP file.',
    category: 'download',
    usage: 'gitclone [repo_url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a GitHub repository URL.' }, { quoted: msg });

        const regex = /(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/]+)\/([^\/]+)/;
        const match = text.match(regex);
        if (!match) return sock.sendMessage(msg.key.remoteJid, { text: 'Invalid GitHub URL.' }, { quoted: msg });

        const [ , user, repo ] = match;
        const zipUrl = `https://github.com/${user}/${repo.replace('.git', '')}/archive/refs/heads/main.zip`;

        try {
            await sock.sendMessage(msg.key.remoteJid, { 
                document: { url: zipUrl }, 
                fileName: `${repo}.zip`, 
                mimetype: 'application/zip',
                caption: `Repository: ${user}/${repo}`
            }, { quoted: msg });
        } catch (error) {
            // Try master if main fails
            const masterUrl = `https://github.com/${user}/${repo.replace('.git', '')}/archive/refs/heads/master.zip`;
            try {
                await sock.sendMessage(msg.key.remoteJid, { 
                    document: { url: masterUrl }, 
                    fileName: `${repo}.zip`, 
                    mimetype: 'application/zip',
                    caption: `Repository: ${user}/${repo}`
                }, { quoted: msg });
            } catch (e) {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Error cloning repository. Make sure it is public.' }, { quoted: msg });
            }
        }
    }
};
