import axios from 'axios';

export default {
    name: 'spotify',
    alias: ['spotdl'],
    desc: 'Download Spotify track.',
    category: 'download',
    usage: 'spotify [url]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a Spotify URL.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/spotify?url=${encodeURIComponent(text)}`);
            const audioUrl = res.data.result.url;
            if (audioUrl) {
                await sock.sendMessage(msg.key.remoteJid, { audio: { url: audioUrl }, mimetype: 'audio/mpeg' }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to find audio URL.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error downloading Spotify track.' }, { quoted: msg });
        }
    }
};
