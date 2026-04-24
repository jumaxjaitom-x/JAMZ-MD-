import axios from 'axios';

export default {
    name: 'gimage',
    alias: ['googleimage', 'image'],
    desc: 'Search and download image from Google.',
    category: 'download',
    usage: 'gimage [query]',
    execute: async (sock, msg, { text }) => {
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a search query.' }, { quoted: msg });

        try {
            const res = await axios.get(`https://api.vreden.my.id/api/gimage?q=${encodeURIComponent(text)}`);
            const images = res.data.result;
            if (images && images.length > 0) {
                const randomImg = images[Math.floor(Math.random() * images.length)];
                await sock.sendMessage(msg.key.remoteJid, { image: { url: randomImg }, caption: `Result for: ${text}` }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { text: 'No images found.' }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Error searching for image.' }, { quoted: msg });
        }
    }
};
