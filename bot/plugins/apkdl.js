import axios from 'axios';

export default {
    name: 'apkdl',
    alias: ['apk'],
    desc: 'Download APK file.',
    category: 'download',
    usage: 'apkdl [app_name]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide an app name.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/apkdl?q=${encodeURIComponent(text)}`);
            const apk = res.data.result;
            if (apk && apk.url) {
                await sock.sendMessage(msg.key.remoteJid, { 
                    document: { url: apk.url }, 
                    fileName: `${apk.name}.apk`, 
                    mimetype: 'application/vnd.android.package-archive',
                    caption: `*Name:* ${apk.name}\n*Size:* ${apk.size}`
                }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'App not found.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading APK.' }, { quoted: msg });
        }
    }
};
