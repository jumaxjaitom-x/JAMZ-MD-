import db from '../../lib/database.js';

export default {
    name: 'addreply',
    alias: ['setreply'],
    desc: 'Add an auto-reply message.',
    category: 'owner',
    usage: 'addreply [trigger] | [response]',
    execute: async (sock, msg, { text, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!text.includes('|')) return sock.sendMessage(msg.key.remoteJid, { text: 'Usage: addreply trigger | response' }, { quoted: msg });

        const [trigger, response] = text.split('|').map(t => t.trim());
        const data = db.get();
        if (!data.replies) data.replies = {};
        data.replies[trigger.toLowerCase()] = response;
        db.save(data);

        await sock.sendMessage(msg.key.remoteJid, { text: `Auto-reply added: *${trigger}* -> ${response}` }, { quoted: msg });
    }
};
