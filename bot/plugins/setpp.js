import { downloadContentFromMessage } from '@whiskeysockets/baileys';
import fs from 'fs';

export default {
    name: 'setpp',
    alias: ['setprofile'],
    desc: 'Set bot profile picture.',
    category: 'owner',
    usage: 'setpp (reply to an image)',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });

        const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        const imageMsg = msg.message?.imageMessage || quoted?.imageMessage;

        if (!imageMsg) return sock.sendMessage(msg.key.remoteJid, { text: 'Please reply to an image.' }, { quoted: msg });

        try {
            const stream = await downloadContentFromMessage(imageMsg, 'image');
            let buffer = Buffer.from([]);
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            await sock.updateProfilePicture(sock.user.id, buffer);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Profile picture updated successfully!' }, { quoted: msg });
        } catch (error) {
            console.error(error);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to update profile picture.' }, { quoted: msg });
        }
    }
};
