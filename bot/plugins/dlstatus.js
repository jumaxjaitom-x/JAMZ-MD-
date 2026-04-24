import { downloadContentFromMessage } from '@whiskeysockets/baileys';

export default {
    name: 'dlstatus',
    alias: ['downloadstatus'],
    desc: 'Download a WhatsApp status (reply to status).',
    category: 'download',
    usage: 'dlstatus (reply to a status message)',
    execute: async (sock, msg) => {
        const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        if (!quoted) return sock.sendMessage(msg.key.remoteJid, { text: 'Please reply to a status message.' }, { quoted: msg });

        const type = Object.keys(quoted)[0];
        if (!['imageMessage', 'videoMessage'].includes(type)) return sock.sendMessage(msg.key.remoteJid, { text: 'Only images and videos can be downloaded.' }, { quoted: msg });

        try {
            const stream = await downloadContentFromMessage(quoted[type], type === 'imageMessage' ? 'image' : 'video');
            let buffer = Buffer.from([]);
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            if (type === 'imageMessage') {
                await sock.sendMessage(msg.key.remoteJid, { image: buffer }, { quoted: msg });
            } else {
                await sock.sendMessage(msg.key.remoteJid, { video: buffer }, { quoted: msg });
            }
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download status.' }, { quoted: msg });
        }
    }
};
