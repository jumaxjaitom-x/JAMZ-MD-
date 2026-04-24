import db from '../../lib/database.js';

export default {
    name: 'aioff',
    alias: ['ai-off'],
    desc: 'Disable AI chat features.',
    category: 'owner',
    usage: 'aioff',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        db.setSetting('ai_enabled', false);
        await sock.sendMessage(msg.key.remoteJid, { text: 'AI features have been disabled.' }, { quoted: msg });
    }
};
