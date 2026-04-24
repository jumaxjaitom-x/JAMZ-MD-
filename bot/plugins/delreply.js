import db from '../../lib/database.js';

export default {
    name: 'delreply',
    alias: ['removereply'],
    desc: 'Delete an auto-reply message.',
    category: 'owner',
    usage: 'delreply [trigger]',
    execute: async (sock, msg, { text, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a trigger.' }, { quoted: msg });

        const data = db.get();
        if (data.replies && data.replies[text.toLowerCase()]) {
            delete data.replies[text.toLowerCase()];
            db.save(data);
            await sock.sendMessage(msg.key.remoteJid, { text: `Auto-reply for *${text}* removed.` }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: `No auto-reply found for *${text}*.` }, { quoted: msg });
        }
    }
};
