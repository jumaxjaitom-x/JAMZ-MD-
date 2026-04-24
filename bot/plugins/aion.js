import db from '../../lib/database.js';

export default {
    name: 'aion',
    alias: ['ai-on'],
    desc: 'Enable AI chat features.',
    category: 'owner',
    usage: 'aion',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        db.setSetting('ai_enabled', true);
        await sock.sendMessage(msg.key.remoteJid, { text: 'AI features have been enabled.' }, { quoted: msg });
    }
};
