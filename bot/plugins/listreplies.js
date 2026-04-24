import db from '../../lib/database.js';

export default {
    name: 'listreplies',
    alias: ['replies'],
    desc: 'List all auto-reply triggers.',
    category: 'owner',
    usage: 'listreplies',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });

        const data = db.get();
        if (!data.replies || Object.keys(data.replies).length === 0) {
            return sock.sendMessage(msg.key.remoteJid, { text: 'No auto-replies found.' }, { quoted: msg });
        }

        let message = `*Active Auto-Replies*\n\n`;
        for (const [trigger, response] of Object.entries(data.replies)) {
            message += `▢ *${trigger}* -> ${response}\n`;
        }
        
        await sock.sendMessage(msg.key.remoteJid, { text: message }, { quoted: msg });
    }
};
