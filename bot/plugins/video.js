import axios from 'axios';

export default {
    name: 'video',
    alias: ['ytvideo', 'ytv'],
    desc: 'Search and download video from YouTube.',
    category: 'download',
    usage: 'video [query]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a search query.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/ytplay?q=${encodeURIComponent(text)}`);
            const video = res.data.result;
            if (video && video.video) {
                await sock.sendMessage(msg.key.remoteJid, { 
                    video: { url: video.video }, 
                    caption: `*Title:* ${video.title}\n*Channel:* ${video.channel}\n*Duration:* ${video.duration}`
                }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'No video found.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error searching for video.' }, { quoted: msg });
        }
    }
};
